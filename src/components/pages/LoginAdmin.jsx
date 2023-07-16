import React from 'react'
import Wrapper from '../atoms/Login/Wrapper'
import AdminFormComponent from '../molecules/Login/AdminFormComponent'
import AdminLoginToastContainer from '../molecules/Login/AdminLoginToastContainer'

const LoginAdmin = () => {
  return (
    <div className='min-h-screen'>
      <AdminLoginToastContainer/>
      <Wrapper>
        <AdminFormComponent/>
      </Wrapper>
    </div>
  )
}

export default LoginAdmin