import React, {memo} from "react";
import {
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import LoginAdmin from "./pages/LoginAdmin";
import LoginCustomer from "./pages/LoginCustomer";
import ResetPasswordPageSuccess from "./pages/ResetPasswordSuccess";
import RecoverPassword from "./pages/RecoverPassword";
import PasswordExpired from "./pages/PasswordExpired";
import PasswordRecoverySuccess from "./pages/PasswordRecoverySuccess";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPasswordEmailSuccess from "./pages/ForgotPasswordEmailSuccess";
import CustomerForgotPasswordPage from "./pages/CustomerForgotPassword";
import SuperAdminOnboarding from "./pages/SuperAdminOnboarding";
import { ProtectedRoute } from "./utilis";
import AppLayout from "./pages/AppLayout";
import Dashboard from "./pages/app/Dashboard";
import Tickets from "./pages/app/Tickets";
import Users from "./pages/app/Users";
import Reports from "./pages/app/Reports";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import SuperAdminVerifyEmail from "./pages/SuperAdminVerifyEmail";
import SuperAdminOnboardingSuccess from "./pages/SuperAdminOnboardingSuccess";
import ErrorPage from "./pages/ErrorPage";
import CustomerOnboarding from "./pages/CustomerOnboarding";
import CustomerCreatePassword from "./pages/CustomerCreatePassword";
import CustomerCreatePasswordSuccess from "./pages/CustomerCreatePasswordSuccess";
import CustomerPasswordLinkExpired from "./pages/customerPasswordLinkExpired";

const MemoizedProtectedRoute = memo(ProtectedRoute)

function App() {

	const router = createBrowserRouter([
		{ path: "/", element: <Home />, index: true, errorElement: <ErrorPage /> },
		{ path: "/login-admin", element: <LoginAdmin /> },
		{ path: "/login-customer", element: <LoginCustomer /> },
		{ path: "/forgot-password", element: <ForgotPassword /> },
		{ path: "/forgot-password-success", element: <ForgotPasswordEmailSuccess /> },
		{ path: "/reset-password-success", element: <ResetPasswordPageSuccess /> },
		{ path: "/recover-password/:email/:token", element: <RecoverPassword /> },
		{ path: "/customer-onboarding/:email/:token", element: <CustomerCreatePassword /> },
		{ path: "/customer-create-password-success", element: <CustomerCreatePasswordSuccess /> },
		{ path: "/customer-token-expired", element: <CustomerPasswordLinkExpired /> },
		{ path: "/password-expired", element: <PasswordExpired /> },
		{ path: "/password-recovery-success", element: <PasswordRecoverySuccess /> },
		{ path: "/customer-password", element: <CustomerForgotPasswordPage /> },
		{ path: "/super-admin-onboarding", element: <SuperAdminOnboarding /> },
		{ path: "/customer-onboarding", element: <CustomerOnboarding /> },
		{ path: "/super-admin-verify", element: <SuperAdminVerifyEmail /> },
		{
			path: "/super-admin-onboarding-success/:email/:token",
			element: <SuperAdminOnboardingSuccess />,
		},
		{
			path: "/app",
			element: <ProtectedRoute><AppLayout /></ProtectedRoute>,
			children: [
				{ path: "dashboard", element:<MemoizedProtectedRoute><Dashboard /></MemoizedProtectedRoute>, index: true },
				{ path: "tickets", element: <MemoizedProtectedRoute><Tickets /></MemoizedProtectedRoute> },
				{ path: "users", element: <MemoizedProtectedRoute><Users /></MemoizedProtectedRoute> },
				{ path: "reports", element: <MemoizedProtectedRoute><Reports /></MemoizedProtectedRoute> },
			],
		},
		{
			path: "/customer",
			element: <ProtectedRoute><AppLayout /></ProtectedRoute>,
			children: [
				{ path: "customer-dashboard", element:<MemoizedProtectedRoute><CustomerDashboard /></MemoizedProtectedRoute>, index: true },
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
