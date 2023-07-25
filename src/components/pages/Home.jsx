import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={`${import.meta.env.VITE_BASE_ACTIVITY_URL}/login-admin`} >
        <Button>Navigate to Admin Login</Button>
      </Link>
    </div>

  )
}

export default Home