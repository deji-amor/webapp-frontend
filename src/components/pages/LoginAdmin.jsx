import React from 'react'
import Wrapper from '../atoms/Login/Wrapper'
import AdminFormComponent from '../molecules/Login/AdminFormComponent'

const LoginAdmin = () => {
  return (
    <div className='min-h-screen'>
      <Wrapper>
        <AdminFormComponent/>
      </Wrapper>
    </div>
  )
}

export default LoginAdmin