import React from 'react'
import Wrapper from '../atoms/Login/Wrapper'
import CustomerFormComponent from '../molecules/Login/CustomerFormComponent'
import CustomerLoginToastContainer from '../molecules/Login/CustomerLoginToastContainer'

const LoginCustomer = () => {
  return (
    <div className='min-h-screen'>
      <CustomerLoginToastContainer/>
      <Wrapper>
        <CustomerFormComponent/>
      </Wrapper>
    </div>
  )
}

export default LoginCustomer