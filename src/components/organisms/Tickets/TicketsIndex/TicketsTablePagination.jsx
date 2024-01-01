import React from 'react'
import { Box } from '@mui/material';
import { ticketsActions } from '../../../../state-manager/reducers/tickets/tickets';
import Pagination from '../../../atoms/users/CustomerSuperAdmin/UserPagination';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from "prop-types";

const TicketsTablePagination = ({ totalResults }) => {
	const dispatch = useDispatch();
	const { ticketsOnEachPage, currentPage } = useSelector((state) => state.tickets);

	const handlePageChange = (newPage) => {
		dispatch(ticketsActions.updateField({ key: "currentPage", value: +newPage }))
	};

	return (
		<Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
			<Pagination
				totalResults={totalResults || 0}
				resultsPerPage={ticketsOnEachPage}
				currentPage={currentPage}
				onPageChange={handlePageChange}
				sx={{
					"& .MuiPaginationItem-root": { color: "#2b2e72", backgroundColor: "transparent" },
				}}
			/>
		</Box>
	);
};

export default TicketsTablePagination

TicketsTablePagination.propTypes = {
	totalResults: PropTypes.string
};