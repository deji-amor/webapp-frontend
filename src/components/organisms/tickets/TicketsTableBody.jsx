import React from 'react'
import RecentTicketTableText from '../../atoms/Dashboard/RecentTicketTableText';
import StatusTab from '../../atoms/tickets/StatusTab';
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from '@mui/material';

const Edit = styled("p")`
	color: #2b2e72;
	font-family: Poppins;
	font-size: 1rem;
	font-style: normal;
	font-weight: 600;
	line-height: 2.25rem; /* 225% */
	display: inline-flex;
	justify-content: center;
	align-items: center;
  gap: 0.2rem;
`;

const TicketsTableBody = () => {
  const item = (
		<tr className="bg-white border-b hover:bg-gray-50" >
			<RecentTicketTableText>Sevirox Manufacturing</RecentTicketTableText>
			<RecentTicketTableText>Break Fix Maintenance</RecentTicketTableText>
			<RecentTicketTableText>ASchevchenko@Servirox...</RecentTicketTableText>
			<RecentTicketTableText>
				<StatusTab />
			</RecentTicketTableText>
			<RecentTicketTableText>12/06/2023</RecentTicketTableText>
			<RecentTicketTableText>
				<Edit className="justify-center items-center">
					Edit Ticket <EditIcon fontSize="small" /> <MoreVertIcon fontSize="small"></MoreVertIcon>{" "}
				</Edit>
			</RecentTicketTableText>
		</tr>
	);

  const list = [
		<tr key={1} className="bg-white border-b hover:bg-gray-50">
			<RecentTicketTableText>Sevirox Manufacturing</RecentTicketTableText>
			<RecentTicketTableText>Break Fix Maintenance</RecentTicketTableText>
			<RecentTicketTableText>ASchevchenko@Servirox...</RecentTicketTableText>
			<RecentTicketTableText>
				<StatusTab />
			</RecentTicketTableText>
			<RecentTicketTableText>12/06/2023</RecentTicketTableText>
			<RecentTicketTableText>
				<Edit className="justify-center items-center">
					Edit Ticket <EditIcon fontSize="small" /> <MoreVertIcon fontSize="small"></MoreVertIcon>{" "}
				</Edit>
			</RecentTicketTableText>
		</tr>,
		<tr key={2} className="bg-white border-b hover:bg-gray-50">
			<RecentTicketTableText>Sevirox Manufacturing</RecentTicketTableText>
			<RecentTicketTableText>Break Fix Maintenance</RecentTicketTableText>
			<RecentTicketTableText>ASchevchenko@Servirox...</RecentTicketTableText>
			<RecentTicketTableText>
				<StatusTab />
			</RecentTicketTableText>
			<RecentTicketTableText>12/06/2023</RecentTicketTableText>
			<RecentTicketTableText>
				<Edit className="justify-center items-center">
					Edit Ticket <EditIcon fontSize="small" /> <MoreVertIcon fontSize="small"></MoreVertIcon>{" "}
				</Edit>
			</RecentTicketTableText>
		</tr>,
		<tr key={2} className="bg-white border-b hover:bg-gray-50">
			<RecentTicketTableText>Sevirox Manufacturing</RecentTicketTableText>
			<RecentTicketTableText>Break Fix Maintenance</RecentTicketTableText>
			<RecentTicketTableText>ASchevchenko@Servirox...</RecentTicketTableText>
			<RecentTicketTableText>
				<StatusTab />
			</RecentTicketTableText>
			<RecentTicketTableText>12/06/2023</RecentTicketTableText>
			<RecentTicketTableText>
				<Edit className="justify-center items-center">
					Edit Ticket <EditIcon fontSize="small" /> <MoreVertIcon fontSize="small"></MoreVertIcon>{" "}
				</Edit>
			</RecentTicketTableText>
		</tr>,
		<tr key={3} className="bg-white border-b hover:bg-gray-50">
			<RecentTicketTableText>Sevirox Manufacturing</RecentTicketTableText>
			<RecentTicketTableText>Break Fix Maintenance</RecentTicketTableText>
			<RecentTicketTableText>ASchevchenko@Servirox...</RecentTicketTableText>
			<RecentTicketTableText>
				<StatusTab />
			</RecentTicketTableText>
			<RecentTicketTableText>12/06/2023</RecentTicketTableText>
			<RecentTicketTableText>
				<Edit className="justify-center items-center">
					Edit Ticket <EditIcon fontSize="small" /> <MoreVertIcon fontSize="small"></MoreVertIcon>{" "}
				</Edit>
			</RecentTicketTableText>
		</tr>,
		<tr key={4} className="bg-white border-b hover:bg-gray-50">
			<RecentTicketTableText>Sevirox Manufacturing</RecentTicketTableText>
			<RecentTicketTableText>Break Fix Maintenance</RecentTicketTableText>
			<RecentTicketTableText>ASchevchenko@Servirox...</RecentTicketTableText>
			<RecentTicketTableText>
				<StatusTab />
			</RecentTicketTableText>
			<RecentTicketTableText>12/06/2023</RecentTicketTableText>
			<RecentTicketTableText>
				<Edit className="justify-center items-center">
					Edit Ticket <EditIcon fontSize="small" /> <MoreVertIcon fontSize="small"></MoreVertIcon>{" "}
				</Edit>
			</RecentTicketTableText>
		</tr>,
		<tr key={5} className="bg-white border-b hover:bg-gray-50">
			<RecentTicketTableText>Sevirox Manufacturing</RecentTicketTableText>
			<RecentTicketTableText>Break Fix Maintenance</RecentTicketTableText>
			<RecentTicketTableText>ASchevchenko@Servirox...</RecentTicketTableText>
			<RecentTicketTableText>
				<StatusTab />
			</RecentTicketTableText>
			<RecentTicketTableText>12/06/2023</RecentTicketTableText>
			<RecentTicketTableText>
				<Edit className="justify-center items-center">
					Edit Ticket <EditIcon fontSize="small" /> <MoreVertIcon fontSize="small"></MoreVertIcon>{" "}
				</Edit>
			</RecentTicketTableText>
		</tr>,
		<tr key={6} className="bg-white border-b hover:bg-gray-50">
			<RecentTicketTableText>Sevirox Manufacturing</RecentTicketTableText>
			<RecentTicketTableText>Break Fix Maintenance</RecentTicketTableText>
			<RecentTicketTableText>ASchevchenko@Servirox...</RecentTicketTableText>
			<RecentTicketTableText>
				<StatusTab />
			</RecentTicketTableText>
			<RecentTicketTableText>12/06/2023</RecentTicketTableText>
			<RecentTicketTableText>
				<Edit className="justify-center items-center">
					Edit Ticket <EditIcon fontSize="small" /> <MoreVertIcon fontSize="small"></MoreVertIcon>{" "}
				</Edit>
			</RecentTicketTableText>
		</tr>,
		<tr key={7} className="bg-white border-b hover:bg-gray-50">
			<RecentTicketTableText>Sevirox Manufacturing</RecentTicketTableText>
			<RecentTicketTableText>Break Fix Maintenance</RecentTicketTableText>
			<RecentTicketTableText>ASchevchenko@Servirox...</RecentTicketTableText>
			<RecentTicketTableText>
				<StatusTab />
			</RecentTicketTableText>
			<RecentTicketTableText>12/06/2023</RecentTicketTableText>
			<RecentTicketTableText>
				<Edit className="justify-center items-center">
					Edit Ticket <EditIcon fontSize="small" /> <MoreVertIcon fontSize="small"></MoreVertIcon>{" "}
				</Edit>
			</RecentTicketTableText>
		</tr>,
		<tr key={8} className="bg-white border-b hover:bg-gray-50">
			<RecentTicketTableText>Sevirox Manufacturing</RecentTicketTableText>
			<RecentTicketTableText>Break Fix Maintenance</RecentTicketTableText>
			<RecentTicketTableText>ASchevchenko@Servirox...</RecentTicketTableText>
			<RecentTicketTableText>
				<StatusTab />
			</RecentTicketTableText>
			<RecentTicketTableText>12/06/2023</RecentTicketTableText>
			<RecentTicketTableText>
				<Edit className="justify-center items-center">
					Edit Ticket <EditIcon fontSize="small" /> <MoreVertIcon fontSize="small"></MoreVertIcon>{" "}
				</Edit>
			</RecentTicketTableText>
		</tr>,
	];

  return (
		<tbody>
      {list}
		</tbody>
	);
}

export default TicketsTableBody