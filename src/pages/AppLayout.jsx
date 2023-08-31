import React, {useEffect, memo, useState, useMemo} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import ToastContainer from '../components/molecules/general/ToastContainer';
import Sidebar from '../components/molecules/Dashboard/Sidebar';
import Navbar from '../components/molecules/Dashboard/Navbar';
import LogoutOverlay from '../components/organisms/Logout/LogoutOverlay';
import InitialAdminCreationFormAndModal from '../components/organisms/tickets/CreateTicketSuperAdmin/InitialAdminCreationFormAndModal';
import TicketTemplateCreationOrEditionForm from '../components/organisms/tickets/CreateTicketSuperAdmin/TicketCreationOrEditionTemplateForm';
import { fetchUsers } from '../state-manager/reducers/users/users';
import { fetchCustomers } from '../state-manager/reducers/users/customers/customers';
import { fetchAllCustomers } from '../state-manager/reducers/reports/customers/customers';
import { fetchAllTickets } from '../state-manager/reducers/reports/tickets/ticketreport';
import { fetchTickets } from '../state-manager/reducers/tickets/tickets';
import { fetchNotifications } from '../state-manager/reducers/notifications/notifications';
import { logoutActions, logout } from '../state-manager/reducers/logout/logout';
import { useSelector, useDispatch } from 'react-redux';
import ResetPassword from "../components/organisms/Password/resetpassword";
import { getAuthToken, getDeviceName } from '../utilis';
import { authUserActions } from '../state-manager/reducers/users/authUser';

// Memoized Sidebar and Navbar components to prevent unnecessary re-renders
const MemoizedSidebar = memo(Sidebar);
const MemoizedNavbar = memo(Navbar);
const MemoizedInitialAdminCreationFormAndModal = memo(InitialAdminCreationFormAndModal);
const MemoizedTicketTemplateCreationOrEditionForm = memo(TicketTemplateCreationOrEditionForm)
const MemoizedToastContainer = memo(ToastContainer)

const AppLayout = () => {
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
			if(authUser.userType !== "superadmin" && authUser.userType !== "admin"){
				console.log("logout");
			}
		}, [])

	// checks if token doesnt exit and logs out else and logouts out on timer expiry
	useEffect(() => {
		const checkIfTokenExistsAndIsValid = async () => {
			dispatch(logoutActions.countDownSeconds());
			const token = await getAuthToken();
			if (allowedTimeOfInactivityInSeconds <= 0 && token && !logoutProcessLoading) {
				const deviceName = getDeviceName();
				dispatch(authUserActions.clearData());
				dispatch(logout({ deviceName: deviceName }));
			}
			if (!token) {
				navigate("/");
			}
		};

		const id = setInterval(checkIfTokenExistsAndIsValid, 1000);
		return () => clearInterval(id);
	}, [navigate, dispatch, allowedTimeOfInactivityInSeconds]);
	/////////// AUTHENTICATION LOGIC ENDS HERE

	// USE SELECTOR const { loading: usersLoading, users } = useSelector((state) => state.users);
	// USE SELECTOR const { loading: customersLoading, customers } = useSelector((state) => state.customers);

	const showLogoutModal = useSelector((state) => state.logout.showModal);
	const showResetModal = useSelector((state) => state.logout.showResetModal);
	const { showAddTicketModal, showTemplateModal } = useSelector((state) => state.ticketCreation);

	useEffect(() => {
		dispatch(fetchUsers())
		dispatch(fetchCustomers())
		dispatch(fetchTickets())
		dispatch(fetchAllCustomers())
		dispatch(fetchAllTickets())
		// dispatch(fetchNotifications())
	}, [])

	return (
		<>
			{<MemoizedToastContainer/>}
			{showLogoutModal && <LogoutOverlay />}
			{showResetModal && <ResetPassword />}
			{showAddTicketModal && <MemoizedInitialAdminCreationFormAndModal />}
			{/* {showTemplateModal && <MemoizedTicketTemplateCreationOrEditionForm />} */}

			<div className="flex h-screen max-h-screen">
				<MemoizedSidebar />
				<div className="basis-[85%] flex flex-col max-w-[85%]">
					<MemoizedNavbar />
					<div className="bg-[#F8FAFC] py-[1.125rem] px-[2.5rem] grow space-y-[1.25rem] overflow-y-auto overflow-x-auto">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
}

export default AppLayout;
