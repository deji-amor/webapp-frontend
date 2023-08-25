import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const Message = styled("span")`
  color: #000;
  font-family: Poppins;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.25rem;

	.blue {
		color: #2b2e72;
		font-family: Poppins;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 600;
		line-height: 0.25rem; /* 28.571% */
	} 
`;

const HistoryTicketMessage = ({field, email}) => {
  return (
		<Message>
			<span className="blue">{email}</span> updated the field{" "}
			<span className="blue">{field}</span>
		</Message>
	);
}

HistoryTicketMessage.propTypes = {
	field: PropTypes.string,
	email: PropTypes.string,
}

export default HistoryTicketMessage