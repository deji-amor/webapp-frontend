import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const Arrow = ({ active }) => {

  if(active) {
    return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
				viewBox="0 0 28 28"
				fill="none"
			>
				<path
					d="M18.4883 14C18.4795 13.6924 18.3652 13.4111 18.1191 13.1826L11.2813 6.50293C11.0879 6.30957 10.8418 6.2041 10.5518 6.2041C9.97168 6.2041 9.50586 6.66113 9.50586 7.24121C9.50586 7.52246 9.62012 7.79492 9.82227 7.99707L15.9834 13.9912L9.82227 20.0029C9.62891 20.2051 9.50586 20.4688 9.50586 20.7588C9.50586 21.3389 9.97168 21.7959 10.5518 21.7959C10.8418 21.7959 11.0879 21.6904 11.2812 21.4971L18.1191 14.8086C18.3652 14.5713 18.4883 14.3076 18.4883 14Z"
					fill="white"
				/>
			</svg>
		);
  }

  return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="fill-[#2B2E72] group-hover:fill-[#fff] fill"
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
		>
			<path
				d="M18.4883 14C18.4795 13.6924 18.3652 13.4111 18.1191 13.1826L11.2813 6.50293C11.0879 6.30957 10.8418 6.2041 10.5518 6.2041C9.97168 6.2041 9.50586 6.66113 9.50586 7.24121C9.50586 7.52246 9.62012 7.79492 9.82227 7.99707L15.9834 13.9912L9.82227 20.0029C9.62891 20.2051 9.50586 20.4688 9.50586 20.7588C9.50586 21.3389 9.97168 21.7959 10.5518 21.7959C10.8418 21.7959 11.0879 21.6904 11.2812 21.4971L18.1191 14.8086C18.3652 14.5713 18.4883 14.3076 18.4883 14Z"
			/>
		</svg>
	);
}

const TicketNav = ({to, text, className}) => {
  const location = useLocation()
  let isActive
  if (text === "Ticket Details"){
    isActive = location.pathname.includes("/tickets/view/detail/");
  }else{
    isActive = location.pathname.includes("/tickets/view/history/");
  }
   console.log(location);

  return (
		<NavLink
			to={to}
			className={twMerge(
				`flex items-center justify-between self-stretch p-2 rounded-md transition duration-300 ease-in-out group hover:bg-[#2B2E72] hover:text-white ${
					isActive ? "bg-[#2B2E72] text-white" : "bg-white text-[#2B2E72]"
				} ${className}`
			)}
		>
			<span className="">{text}</span>
			<Arrow active={isActive} />
		</NavLink>
	);
}

TicketNav.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
}

Arrow.propTypes = {
  active: PropTypes.bool
}

export default TicketNav