import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const Wrapper = styled("div")`
	padding: 0.5rem;
	align-self: stretch;
	background: rgba(76, 111, 255, 0.04);
`;

const Tablet = styled("div")`
	padding: 0.25rem 0.75rem;
	border-radius: 1rem;
	background: rgba(76,111,255,0.12);
	color: #2b2e72;
	font-family: "Poppins", sans-serif;
	font-size: 0.75rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.25rem; /* 166.667% */
`;

const Picture = styled("div")`
	width: 3rem;
	height: 3rem;
	border-radius: 3rem;
	border: 2px solid #2b2e72;
	background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

const NotificationItem = props => {
  return (
		<Wrapper className="flex items-center justify-between gap-[1.5rem]">
			<Tablet className='mb-[0.75rem]'>Customer Profile Update </Tablet>
      <div className='flex items-center justify-between gap-[1.5rem]'>
        <div className=''></div>
        <div className=''></div>
      </div>
		</Wrapper>
	);
}

NotificationItem.propTypes = {}

export default NotificationItem