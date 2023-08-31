import React from 'react'
import { styled } from '@mui/material'
import NotificationItem from './NotificationItem';

const Wrapper = styled("div")`
	position: absolute;
	top: 150%;
	right: 0px;
	display: inline-flex;
	padding: 1.5rem 1.25rem;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	border-radius: 0.75rem;
	background: #fff;
	box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
`;

const NotificationsDropdown = () => {
  return (
    <Wrapper>NotificationsDropdown</Wrapper>
  )
}

export default NotificationsDropdown