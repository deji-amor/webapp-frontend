import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const Wrapper = styled("div")`
	padding: 0.5rem;
	align-self: stretch;
	background: rgba(76, 111, 255, 0.04);
`;

const Tablet = styled("div")`
	display: inline-block;
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
	border-radius: 50%;
	border: 2px solid #2b2e72;
	background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

const Text = styled("p")`
	color: #333;
	font-family: "Poppins", sans-serif;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.25rem;
	letter-spacing: 0.00875rem;

	.highlighted {
		color: #2b2e72;
		font-size: 0.875rem;
		font-weight: 600;
	}
`;

const TimeStamp = styled("div")`
	color: #706e6e;
	font-family: "Poppins", sans-serif;
	font-size: 0.75rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.25rem; /* 166.667% */
	letter-spacing: 0.0075rem;
`;

const Dot = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
		<circle cx="5.5" cy="6" r="5.5" fill="#2B2E72" />
	</svg>
);

const NotificationItem = props => {
  return (
		<Wrapper className="">
			<Tablet className="mb-[0.75rem] truncate">Customer Profile Update </Tablet>
			<div className="flex justify-between items-start gap-[1.5rem]">
				<div className="max-w-[28rem] flex gap-x-[0.5rem]">
					<img
						className="w-10 h-10 rounded-full"
						src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
						alt="Rounded avatar"
					></img>
					<div className="">
						<Text>
							<span className="highlighted">John Stones</span> updated{" "}
							<span className="highlighted">Company Email</span> for customer{" "}
							<span className="highlighted">Alexander Schevchenko</span> from{" "}
							<span className="highlighted">Servirox Manufacturing</span>
						</Text>
						<TimeStamp>15 minutes ago</TimeStamp>
					</div>
				</div>
				<div className="">
					<Dot />
				</div>
			</div>
		</Wrapper>
	);
}

NotificationItem.propTypes = {}

export default NotificationItem