import React from 'react'
import Tab from '../../atoms/tickets/CreateTicketSuperAdmin/Tab';
import { useSelector} from 'react-redux';
import SortIcon from "@mui/icons-material/Sort";
import { styled } from '@mui/material';
import { useSearchParams, NavLink, useNavigate } from 'react-router-dom';

const SortText = styled("p")`
	color: #000;
	font-family: "Roboto", sans-serif;
	font-size: 14px;
	font-style: normal;
	font-weight: 700;
	line-height: 20px; /* 142.857% */
`;

const TicketsHeaderActiveTicketType = () => {
    const {sortByAscending } = useSelector(
			(state) => state.tickets
		);
		const [searchParams] = useSearchParams()
		const request = searchParams.get("request").replace("/", "")
		console.log(request);
		const showServiceRequestsTab = request === "service"
		const showProjectsRequestTab = request === "project"
		console.log(showServiceRequestsTab, showProjectsRequestTab);

		const navigate = useNavigate()
		const handleSortByToggle = () => {
			if(showServiceRequestsTab){
				navigate("/admin/tickets?request=project");
			}else {
				navigate("/admin/tickets?request=service")
			}
		}

  return (
		<div className="border-b-2 rounded-t-[0.75rem] border-b-[#ECECEC] bg-white pt-[0.8rem] px-[0.8rem]">
			<div className="flex items-center justify-between">
				<div className="flex relative">
					<div className="w-[9rem]">
						<div
							className={`border-[#2b2e72] transition-all absolute w-[50%] border-[2px] bottom-0 ${
								showServiceRequestsTab ? "left-0" : "left-[50%]"
							}`}
						></div>
						<NavLink to="/admin/tickets?request=service">
							<Tab isActive={showServiceRequestsTab}>Service Requests</Tab>
						</NavLink>
					</div>
					<div className="w-[9rem]">
						<NavLink to="/admin/tickets?request=project">
							<Tab isActive={showProjectsRequestTab}>Project Requests</Tab>
						</NavLink>
					</div>
				</div>
				<div onClick={handleSortByToggle} className="cursor-pointer">
					<SortText>
						Sort by: <SortIcon className={`${sortByAscending ? "rotate-180" : ""}`} />{" "}
					</SortText>
				</div>
			</div>
		</div>
	);
}

export default TicketsHeaderActiveTicketType