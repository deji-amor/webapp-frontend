import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    
    const months = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    
    const daySuffix = day === 1 ? "st" : day === 2 ? "nd" : day === 3 ? "rd" : "th";
    const formattedDate = `${day}${daySuffix} ${months[monthIndex]} ${year}`;
    
    return formattedDate;
};

const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    const meridiem = hours >= 12 ? "pm" : "am";
    const formattedTime = `${(hours % 12 === 0 ? 12 : hours % 12).toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${meridiem}`;
    
    return formattedTime;
};

const DateText = styled("p")`
	color: #555;
	font-family: Poppins;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 400;

	.blue {
		color: #2b2e72;
		font-family: Poppins;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.57006rem; /* 293.718% */
	}
`;

const HistoryTicketDate = ({timeStamp}) => {
  return (
		<DateText>
			{formatDate(timeStamp)} at <span className="blue">{formatTime(timeStamp)}</span>
		</DateText>
	);
}

HistoryTicketDate.propTypes = {
	timeStamp: PropTypes.string
}

export default HistoryTicketDate