import React, {useEffect, memo} from 'react'
import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import Sidebar from '../components/molecules/Dashboard/Sidebar';
import Navbar from '../components/molecules/Dashboard/Navbar';
import LogoutOverlay from '../components/organisms/Logout/LogoutOverlay';
import { logoutActions, logout } from '../state-manager/reducers/logout/logout';
import { useSelector, useDispatch } from 'react-redux';
import ResetPassword from "../components/organisms/Password/resetpassword";
import { getAuthToken, getDeviceName } from '../utilis';

// Memoized Sidebar and Navbar components to prevent unnecessary re-renders
const MemoizedSidebar = memo(Sidebar);
const MemoizedNavbar = memo(Navbar);

const AppLayout = () => {
	const showLogoutModal = useSelector((state) => state.logout.showModal);
	const showResetModal = useSelector((state) => state.logout.showResetModal);
	const allowedTimeOfInactivityInSeconds = useSelector(
		(state) => state.logout.allowedTimeOfInactivityInSeconds
	);
	const logoutProcessLoading = useSelector((state) => state.logout.loading);

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

	// checks if token doesnt exit and logs out else and logouts out on timer expiry
	useEffect(() => {
		const checkIfTokenExistsAndIsValid = async () => {
			dispatch(logoutActions.countDownSeconds());
			const token = await getAuthToken();
			if (allowedTimeOfInactivityInSeconds <= 0 && token && !logoutProcessLoading) {
				const deviceName = getDeviceName();
				dispatch(logout({ deviceName: deviceName }));
			}
			if (!token) {
				navigate("/");
			}
		};

		const id = setInterval(checkIfTokenExistsAndIsValid, 1000);
		return () => clearInterval(id);
	}, [navigate, dispatch, allowedTimeOfInactivityInSeconds]);

	return (
		<>
			{showLogoutModal && <LogoutOverlay />}
			{showResetModal && <ResetPassword />}

			<div className="flex h-screen max-h-screen">
				{/* <Sidebar /> */}
				{/* Memoized Sidebar */}
				<MemoizedSidebar />
				<div className="basis-[85%] flex flex-col max-w-[85%]">
					{/* <Navbar /> */}
					{/* Memoized Navbar */}
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
