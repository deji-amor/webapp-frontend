import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home'
import LoginAdmin from './components/pages/LoginAdmin'
import LoginCustomer from './components/pages/LoginCustomer'
import ForgotPassword from './components/pages/ForgotPassword'
import SuperAdminOnboarding from './components/pages/SuperAdminOnboarding'
import AppLayout from './components/pages/AppLayout'
import Dashboard from './components/pages/app/Dashboard'
import Tickets from './components/pages/app/Tickets'
import Users from './components/pages/app/Users'
import Reports from './components/pages/app/Reports'

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Home/>, index: true},
    {path: "/login-admin", element: <LoginAdmin/>},
    {path: "/login-customer", element: <LoginCustomer/>},
    {path: "/forgot-password", element: <ForgotPassword/>},
    {path: "/super-admin-onboarding", element: <SuperAdminOnboarding/>},
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
