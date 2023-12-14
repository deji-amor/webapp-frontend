import React, {memo, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
import ToastContainer from "../components/molecules/general/ToastContainer";
import CustomerNavbar from '../components/molecules/CustomerDashboard/CustomerNavbar'
import CustomerSidebar from '../components/molecules/CustomerDashboard/CustomerSidebar'
import LogoutOverlay from '../components/organisms/Logout/LogoutOverlay'
import ResetPassword from '../components/organisms/Password/resetpassword'
import { fetchUsers } from "../state-manager/reducers/users/users";
import { fetchCustomers } from "../state-manager/reducers/users/customers/customers";
import { fetchAllCustomers } from "../state-manager/reducers/reports/customers/customers";
import { fetchAllTickets } from "../state-manager/reducers/reports/tickets/ticketreport";
import { fetchTickets } from "../state-manager/reducers/tickets/tickets";
import { fetchNotifications } from '../state-manager/reducers/notifications/notifications'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutActions, logout } from '../state-manager/reducers/logout/logout'
import { getAuthToken, getDeviceName } from '../utilis'
import { authUserActions, fetchAuthUser } from '../state-manager/reducers/users/authUser'

const MemoizedCustomerNavbar = memo(CustomerNavbar)
const MemoizedCustomerSidebar = memo(CustomerSidebar)
const MemoizedToastContainer = memo(ToastContainer);

const CustomerAppLayout = () => {
	/////////// AUTHENTICATION LOGIC STARTS HERE
	const allowedTimeOfInactivityInSeconds = useSelector(
		(state) => state.logout.allowedTimeOfInactivityInSeconds
	);
	const logoutProcessLoading = useSelector((state) => state.logout.loading);
  const authUser = useSelector(state => state.authUser.data)

	const dispatch = useDispatch();
	const navigate = useNavigate();

	// add the activity events and reset inactivity timer
	useEffect(() => {
		const eventsThatShowActivity = ["mousemove", "keydown", "click", "scroll", "input"];
		eventsThatShowActivity.forEach((event) => {
			window.addEventListener(event, () => {
				dispatch(logoutActions.resetAllowedTimeOfInactivityInSeconds());
			});
		});
	}, [dispatch]);

  useEffect(() => {
		const userTypePropertyNames = ["user_type", "userType"];
		if(!userTypePropertyNames.some(propName => authUser[propName] === 'customer')){
			navigate("/")
		}
  }, [])

	// checks if token doesnt exit and logs out else and logouts out on timer expiry
	useEffect(() => {
		const checkIfTokenExistsAndIsValid = async () => {
			if(logoutProcessLoading) return

			if(allowedTimeOfInactivityInSeconds <= 0){
				const deviceName = getDeviceName();
				dispatch(authUserActions.clearData());
				dispatch(logout({ deviceName }));
				return navigate("/login-customer");
			}

			const token = await getAuthToken();
			if(!token) {
				return navigate("/login-customer");
			}

			const decodedToken = jwtDecode(token);
			const currentTimeInSeconds = Math.floor(Date.now() / 1000);		
			const hasJWTTokenExpired = decodedToken?.exp && decodedToken?.exp < currentTimeInSeconds

			if (hasJWTTokenExpired) {
				navigate("/login-customer");
			}

			dispatch(logoutActions.countDownSeconds());
		};

		const id = setInterval(checkIfTokenExistsAndIsValid, 1000);
		return () => clearInterval(id);
	}, [navigate, dispatch, allowedTimeOfInactivityInSeconds, logoutProcessLoading]);
	/////////// AUTHENTICATION LOGIC ENDS HERE

	const showLogoutModal = useSelector((state) => state.logout.showModal);
	const showResetModal = useSelector((state) => state.logout.showResetModal);

		useEffect(() => {
			dispatch(fetchAuthUser());
			dispatch(fetchTickets());
			dispatch(fetchAllCustomers());
			dispatch(fetchAllTickets());
			dispatch(fetchUsers());
			dispatch(fetchCustomers())
		}, []);

	return (
		<>
			{<MemoizedToastContainer />}
			{showLogoutModal && <LogoutOverlay />}
			{showResetModal && <ResetPassword />}

			<div className="flex h-screen max-h-screen">
				<MemoizedCustomerSidebar />
				<div className="basis-[85%] flex flex-col max-w-[85%]">
					<MemoizedCustomerNavbar />
					<div className="bg-[#F8FAFC] py-[1.125rem] px-[2.5rem] grow space-y-[1.25rem] overflow-y-auto overflow-x-auto">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
}

export default CustomerAppLayout