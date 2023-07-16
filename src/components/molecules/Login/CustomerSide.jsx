import React from 'react'
import { styled } from '@mui/material'
import CustomerWelcomeHeader from '../../atoms/Login/CustomerWelcomeHeader'
import CustomerWelcomeParagraph from '../../atoms/Login/CustomerWelcomeParagraph'
import bgImage from "../../../assets/login/standard-quality-control-concept-m1.png"
import Logo from '../../atoms/Login/Logo'
import Chat from '../../atoms/Login/Chat'

const CustomerSide = () => {
  const Wrapper = styled("div")`
    height: 100%;
    background: linear-gradient(180deg, rgba(43, 46, 114, 0.32) 0%, rgba(1, 1, 1, 0.32) 100%), url(${bgImage}), lightgray 50% / cover no-repeat;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .info {
      padding: 0 2rem;
    }
  `

  return (
    <Wrapper>
      <div className=''>
        <Logo/>
      </div>
      <div className="info -translate-y-6">
        <CustomerWelcomeHeader>Streamlined IT Service Management.</CustomerWelcomeHeader>
        <CustomerWelcomeParagraph>Our robust solution is built and optimized specifically for IT teams and workflows, influenced by feedback, and centred around end-user and endpoint support..</CustomerWelcomeParagraph>
      </div>
      <div className="pad">
        <Chat/>
      </div>
    </Wrapper>
  )
}

export default CustomerSide