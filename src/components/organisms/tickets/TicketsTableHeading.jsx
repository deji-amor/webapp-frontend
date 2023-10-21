import React from 'react'
import RecentTicketsTableHeader from '../../atoms/Dashboard/RecentTicketsTableHeader';
import { Select, MenuItem, FormControl } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ticketsActions } from '../../../state-manager/reducers/tickets/tickets';

const TicketsTableHeading = () => {
	const { statuses, filterByStatus } = useSelector((state) => state.tickets);
	const dispatch = useDispatch()

	const handleStatusChange = (event) => {
		dispatch(ticketsActions.updateField({ key: "filterByStatus", value: event.target.value }));
	}

  return (
		<thead className="border-b-2 border-b-[#ECECEC]">
			<tr>
				<RecentTicketsTableHeader >Company Name</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Ticket Type</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Created By</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Status</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Date Created</RecentTicketsTableHeader>
				<RecentTicketsTableHeader alignment={"right"}>
					<span className="flex items-center gap-x-[1.3rem]">
						<span>Filter By:</span>
						<span>
							<FormControl size="small" className=''>
								<Select value={filterByStatus} onChange={handleStatusChange}>
									{statuses.map((status) => (
										<MenuItem key={status} value={status} className='capitalize'>
											{status}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</span>
					</span>
				</RecentTicketsTableHeader>
			</tr>
		</thead>
	);
}

export default TicketsTableHeading