import React, {useEffect, memo} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';
import ToastContainer from '../components/molecules/general/ToastContainer';
import Sidebar from '../components/molecules/Dashboard/Sidebar';
import Navbar from '../components/molecules/Dashboard/Navbar';
import LogoutOverlay from '../components/organisms/Logout/LogoutOverlay';
import { fetchUsers } from '../state-manager/reducers/users/users';
import { fetchCustomers } from '../state-manager/reducers/users/customers/customers';
import { fetchAllCustomers } from '../state-manager/reducers/reports/customers/customers';
import { fetchAllTickets } from '../state-manager/reducers/reports/tickets/ticketreport';
import { fetchTickets } from '../state-manager/reducers/tickets/tickets';
import { logoutActions, logout } from '../state-manager/reducers/logout/logout';
import { useSelector, useDispatch } from 'react-redux';
import ResetPassword from "../components/organisms/Password/resetpassword";
import { getAuthToken, getDeviceName } from '../utilis';
import { authUserActions, fetchAuthUser } from '../state-manager/reducers/users/authUser';

// Memoized Sidebar and Navbar components to prevent unnecessary re-renders
const MemoizedSidebar = memo(Sidebar);
const MemoizedNavbar = memo(Navbar);
const MemoizedToastContainer = memo(ToastContainer)

const AdminLayout = () => {
	/////////// AUTHENTICATION LOGIC STARTS HERE
	const allowedTimeOfInactivityInSeconds = useSelector(
		(state) => state.logout.allowedTimeOfInactivityInSeconds
	);
	const logoutProcessLoading = useSelector((state) => state.logout.loading);
	const authUser = useSelector((state) => state.authUser.data);

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
		if (
			!userTypePropertyNames.some(
				(propName) => authUser[propName] === "superadmin" || authUser[propName] === "admin"
			)
		) {
			navigate("/");
		}
	}, []);

	// checks if token doesnt exit and logs out else and logouts out on timer expiry
	useEffect(() => {
		const checkIfTokenExistsAndIsValid = async () => {
			if (logoutProcessLoading) return;

			if (allowedTimeOfInactivityInSeconds <= 0) {
				const deviceName = getDeviceName();
				dispatch(authUserActions.clearData());
				dispatch(logout({ deviceName }));
				return navigate("/login-admin");
			}

			const token = await getAuthToken();
			if (!token) {
				return navigate("/login-admin");
			}

			const decodedToken = jwtDecode(token);
			const currentTimeInSeconds = Math.floor(Date.now() / 1000);
			const hasJWTTokenExpired = decodedToken?.exp && decodedToken?.exp < currentTimeInSeconds;

			if (hasJWTTokenExpired) {
				navigate("/login-admin");
			}

			dispatch(logoutActions.countDownSeconds());
		};

		const id = setInterval(checkIfTokenExistsAndIsValid, 1000);
		return () => clearInterval(id);
	}, [navigate, dispatch, allowedTimeOfInactivityInSeconds, logoutProcessLoading]);
	/////////// AUTHENTICATION LOGIC ENDS HERE

	const showLogoutModal = useSelector((state) => state.logout.showModal);
	const showResetModal = useSelector((state) => state.logout.showResetModal);
	// const { showAddTicketModal } = useSelector((state) => state.ticketCreation);

	useEffect(() => {
		dispatch(fetchAuthUser());
		dispatch(fetchUsers());
		dispatch(fetchCustomers());
		dispatch(fetchTickets());
		dispatch(fetchAllCustomers());
		dispatch(fetchAllTickets());
		// dispatch(fetchNotifications())
	}, []);

	return (
		<>
			{<MemoizedToastContainer />}
			{showLogoutModal && <LogoutOverlay />}
			{showResetModal && <ResetPassword />}
			{/* {showAddTicketModal && <MemoizedInitialAdminCreationFormAndModal />} */}
			<div className="flex min-h-screen max-h-screen overflow-scroll">
				<MemoizedSidebar />
				<div className="max-w-full overflow-x-hidden sm:basis-[85%] flex flex-col sm:max-w-[85%]">
					<MemoizedNavbar />
					<div className="bg-[#F8FAFC] py-[1.125rem] px-[2.5rem] grow space-y-[1.25rem] z">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
}

export default AdminLayout;
