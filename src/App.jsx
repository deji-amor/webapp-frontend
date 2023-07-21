import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home'
import LoginAdmin from './components/pages/LoginAdmin'
import LoginCustomer from './components/pages/LoginCustomer'
import ResetPasswordPageSuccess from './components/pages/ResetPasswordSuccess'
import RecoverPassword from './components/pages/RecoverPassword'
import PasswordExpired from './components/pages/PasswordExpired'
import PasswordRecoverySuccess from './components/pages/PasswordRecoverySuccess'
import ForgotPassword from './components/pages/ForgotPassword'
import ForgotPasswordEmailSuccess from './components/pages/ForgotPasswordEmailSuccess'
import CustomerForgotPasswordPage from './components/pages/CustomerForgotPassword'
import SuperAdminOnboarding from './components/pages/SuperAdminOnboarding'
import AppLayout from './components/pages/AppLayout'
import Dashboard from './components/pages/app/Dashboard'
import Tickets from './components/pages/app/Tickets'
import Users from './components/pages/app/Users'
import Reports from './components/pages/app/Reports'
import SuperAdminVerifyEmail from './components/pages/SuperAdminVerifyEmail'
import SuperAdminOnboardingSuccess from './components/pages/SuperAdminOnboardingSuccess'
import ErrorPage from './components/pages/ErrorPage'

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Home/>, index: true, errorElement: <ErrorPage/>},
    {path: "/login-admin", element: <LoginAdmin/>},
    {path: "/login-customer", element: <LoginCustomer/>},
    {path: "/forgot-password", element: <ForgotPassword/>},
    {path: "/forgot-password-success", element: <ForgotPasswordEmailSuccess/>},
    {path: "/reset-password-success", element: <ResetPasswordPageSuccess/>},
    {path: "/recover-password", element: <RecoverPassword/>},
    {path: "/password-expired", element: <PasswordExpired/>},
    {path: "/password-recovery-success", element: <PasswordRecoverySuccess/>},
    {path: "/customer-password", element: <CustomerForgotPasswordPage/>},
    {path: "/super-admin-onboarding", element: <SuperAdminOnboarding/>},
    {path: "/super-admin-verify", element: <SuperAdminVerifyEmail/>},
    {path: "/super-admin-onboarding-success", element: <SuperAdminOnboardingSuccess/>},
    {path: "/app", element: <AppLayout/>, children: [
      {path: "dashboard", element: <Dashboard/>, index: true},
      {path: "tickets", element: <Tickets/>},
      {path: "users", element: <Users/>},
      {path: "reports", element: <Reports/>},
    ]},
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
