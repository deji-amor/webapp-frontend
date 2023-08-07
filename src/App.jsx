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
import SuperAdminVerifyEmail from "./pages/SuperAdminVerifyEmail";
import SuperAdminOnboardingSuccess from "./pages/SuperAdminOnboardingSuccess";
import ErrorPage from "./pages/ErrorPage";
import CustomerOnboarding from "./pages/CustomerOnboarding";

function App() {
	const router = createBrowserRouter([
		{ path: "/", element: <LoginAdmin />, index: true, errorElement: <ErrorPage /> },
		{ path: "/login-admin", element: <LoginAdmin /> },
		{ path: "/login-customer", element: <LoginCustomer /> },
		{ path: "/forgot-password", element: <ForgotPassword /> },
		{ path: "/forgot-password-success", element: <ForgotPasswordEmailSuccess /> },
		{ path: "/reset-password-success", element: <ResetPasswordPageSuccess /> },
		{ path: "/recover-password/:email/:token", element: <RecoverPassword /> },
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
				{ path: "dashboard", element:<ProtectedRoute><Dashboard /></ProtectedRoute>, index: true },
				{ path: "tickets", element: <ProtectedRoute><Tickets /></ProtectedRoute> },
				{ path: "users", element: <ProtectedRoute><Users /></ProtectedRoute> },
				{ path: "reports", element: <ProtectedRoute><Reports /></ProtectedRoute> },
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
