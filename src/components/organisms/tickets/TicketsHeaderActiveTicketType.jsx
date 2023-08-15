import React from 'react'
import Tab from '../../atoms/tickets/CreateTicketSuperAdmin/Tab';
import { useSelector, useDispatch } from 'react-redux';
import { ticketsActions } from '../../../state-manager/reducers/tickets/tickets';

const TicketsHeaderActiveTicketType = () => {
    const { showServiceRequestsTab, showProjectsTab} = useSelector(
			(state) => state.tickets
		);
		const dispatch = useDispatch();

		const handleServiceRequestTabToggle = () => {
			if (!showServiceRequestsTab) {
				dispatch(
					ticketsActions.updateField([
						{ key: "showServiceRequestsTab", value: true },
						{ key: "showProjectsTab", value: false },
					])
				);
			}
		};

		const handleShowProjectTabToggle = () => {
			if (!showProjectsTab) {
				dispatch(
					ticketsActions.updateField([
						{ key: "showServiceRequestsTab", value: false },
						{ key: "showProjectsTab", value: true },
					])
				);
			}
		};

  return (
		<div className="border-b-2 rounded-t-[0.75rem] border-b-[#ECECEC] bg-white p-[0.8rem]">
			<div className="flex items-center justify-between">
				<div className="flex gap-[1.5rem]">
					<div className="">
						<Tab onClick={handleServiceRequestTabToggle} isActive={showServiceRequestsTab}>
							Service Requests
						</Tab>
					</div>
					<div className="">
						<Tab onClick={handleShowProjectTabToggle} isActive={showProjectsTab}>
							Project Requests
						</Tab>
					</div>
				</div>
        <></>
			</div>
		</div>
	);
}

export default TicketsHeaderActiveTicketType