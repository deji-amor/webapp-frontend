import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material';

const Button = styled("button")`
	display: flex;
	justify-content: space-between;
	padding: 0.5rem;
	align-items: flex-start;
	width: 100%;
	gap: 0.625rem;
	align-self: stretch;
	border-radius: 0.375rem;
	background: ${({ active }) => (active ? "#2b2e72" : "#fff")};
	color: ${({ active }) => (active ? "#fff" : "#2b2e72")};
	font-family: Poppins;
	font-size: 1.125rem;
	font-style: normal;
	font-weight: 600;
`;


const LinkButton = ({ onClick, children, active }) => {
  const ArrowIcon = () => (
		<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
			<path
				d="M18.4883 14C18.4795 13.6924 18.3652 13.4111 18.1191 13.1826L11.2813 6.50293C11.0879 6.30957 10.8418 6.2041 10.5518 6.2041C9.97168 6.2041 9.50586 6.66113 9.50586 7.24121C9.50586 7.52246 9.62012 7.79492 9.82227 7.99707L15.9834 13.9912L9.82227 20.0029C9.62891 20.2051 9.50586 20.4688 9.50586 20.7588C9.50586 21.3389 9.97168 21.7959 10.5518 21.7959C10.8418 21.7959 11.0879 21.6904 11.2812 21.4971L18.1191 14.8086C18.3652 14.5713 18.4883 14.3076 18.4883 14Z"
				fill={active ? "#fff" : "#2b2e72"}
			/>
		</svg>
	);
  return <Button active={active} type='button' onClick={onClick}>
    <span className='truncate'>{children}</span>
    <ArrowIcon/>
  </Button>;
};

LinkButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  active: PropTypes.bool
}

export default LinkButton