import React from 'react'
import Tab from '../../atoms/tickets/CreateTicketSuperAdmin/Tab';
import { useSelector, useDispatch } from 'react-redux';
import { ticketsActions } from '../../../state-manager/reducers/tickets/tickets';
import SortIcon from "@mui/icons-material/Sort";
import { styled } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

const SortText = styled("p")`
	color: #000;
	font-family: "Roboto", sans-serif;
	font-size: 14px;
	font-style: normal;
	font-weight: 700;
	line-height: 20px; /* 142.857% */
`;

const TicketsHeaderActiveTicketType = () => {
    const { sortByAscending } = useSelector(
			(state) => state.tickets
		);
		const dispatch = useDispatch();

		const [searchParams, setSearchParams] = useSearchParams();
		const request = searchParams.get("request")?.replace("/", "");
		const showServiceRequestsTab = request === "service";
		const showProjectsRequestTab = request === "project";

		const handleServiceRequestTabToggle = () => {
			setSearchParams({request: "service"})
		};

		const handleShowProjectTabToggle = () => {
			setSearchParams({ request: "project" });
		};

		const handleSortByToggle = () => {
			dispatch(ticketsActions.updateField({ key: "sortByAscending", value: !sortByAscending }));
		}

  return (
		<div className="border-b-2 rounded-t-[0.75rem] border-b-[#ECECEC] bg-white pt-[0.8rem] px-[0.8rem]">
			<div className="flex items-center justify-between">
				<div className="flex relative">
					<div className="w-[9rem]">
						<div className={`border-[#2b2e72] transition-all absolute w-[50%] border-[2px] bottom-0 ${showServiceRequestsTab ? "left-0" : "left-[50%]"}`}></div>
						<Tab onClick={handleServiceRequestTabToggle} isActive={showServiceRequestsTab}>
							Service Requests
						</Tab>
					</div>
					<div className="w-[9rem]">
						<Tab onClick={handleShowProjectTabToggle} isActive={showProjectsRequestTab}>
							Project Requests
						</Tab>
					</div>
				</div>
        <div onClick={handleSortByToggle} className='cursor-pointer'>
						<SortText>Sort by: <SortIcon className={`${sortByAscending ? "rotate-180" : ""}`}/> </SortText>
				</div>
			</div>
		</div>
	);
}

export default TicketsHeaderActiveTicketType