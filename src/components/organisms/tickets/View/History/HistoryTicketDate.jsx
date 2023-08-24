import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

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

const HistoryTicketDate = props => {
  return (
		<DateText>
			14th August 2023 at <span className="blue">10:45am</span>
		</DateText>
	);
}

HistoryTicketDate.propTypes = {}

export default HistoryTicketDate