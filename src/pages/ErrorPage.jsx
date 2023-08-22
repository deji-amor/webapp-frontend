import React from 'react'
import EmojiHeader from '../components/atoms/Login/EmojiHeader'
import Header from '../components/atoms/Login/Header'
import { NavLink } from 'react-router-dom'
import Paragraph from '../components/atoms/Login/Paragraph'
import { styled } from '@mui/material'

const ErrorPage = () => {
  const Wrapper = styled("div")`
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
    width: 100%;
    min-height: 100vh;
	`;


  return (
		<Wrapper className="text-center">
			<div className="">
				<div className="mb-[1.2rem]">
					<EmojiHeader position={"center"}>👋</EmojiHeader>
				</div>
				<Header position={"center"}>Ops, Looks Like An Has Error Occurred</Header>
        <NavLink to="/login-admin">
          <Paragraph position={"center"}>Log back into your Dashboard</Paragraph>
        </NavLink>
			</div>
		</Wrapper>
	);
}

export default ErrorPage