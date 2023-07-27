import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Home = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h1>Home</h1>
      <Link to='/login-admin' >
        <Button>Navigate to Admin Login</Button>
      </Link>
      
      <Link to='/login-customer' >
        <Button>Navigate to Customer Login</Button>
      </Link>

      <Link to='/forgot-password' >
        <Button>Navigate to Forgot Password</Button>
      </Link>

      {/* <Link to='/password-expired' >
        <Button>Navigate to Password Expired</Button>
      </Link> */}
      
      <Link to='/customer-password' >
        <Button>Navigate to Customer Forgot Password</Button>
      </Link>

      <Link to='/super-admin-onboarding' >
        <Button>Navigate to Super Admin Onboarding</Button>
      </Link>

      <Link to='/app/dashboard' >
        <Button>Navigate to Dashboard</Button>
      </Link>
    </div>

  )
}

export default Home