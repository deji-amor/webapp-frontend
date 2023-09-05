import React, {useEffect, useState} from "react";
import { styled } from "@mui/material";
import { PDFDownloadLink} from "@react-pdf/renderer";
import TicketTemplatePDF from "./Details/TicketTemplatePDF";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CSVLink } from "react-csv";
import { ticketHeaders } from "../../../atoms/Reports/headers";

const ExportButton = styled("button")`
	display: flex;
	padding: 0.5rem 0.75rem;
	align-items: flex-start;
	gap: 0.5rem;
	border-radius: 0.375rem;
	border: 0.5px solid #2b2e72;
	color: #2b2e72;
	font-family: Poppins;
	font-size: 1.125rem;
	font-style: normal;
	font-weight: 500;
`;

const DropdownWrapper = styled("div")`
	display: flex;
	padding: 0.5rem 0.5rem 0.75rem 0.5rem;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	border-radius: 0.5rem;
	background: #fff;
	box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
	width: 100%;
`;

const Item = styled("div")`
	display: flex;
	padding: 0.125rem 0rem;
	align-items: center;
	gap: 1rem;
	align-self: stretch;
	cursor: pointer;
`;

const ExportIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
		<g clipPath="url(#clip0_4797_30891)">
			<path
				d="M5.40002 21.5999C4.60437 21.5999 3.84131 21.2838 3.2787 20.7212C2.71609 20.1586 2.40002 19.3956 2.40002 18.5999V5.3999C2.40002 4.60425 2.71609 3.84119 3.2787 3.27858C3.84131 2.71597 4.60437 2.3999 5.40002 2.3999H9.52702C9.79224 2.3999 10.0466 2.50526 10.2341 2.6928C10.4217 2.88033 10.527 3.13469 10.527 3.3999C10.5303 3.67804 10.4295 3.94737 10.2446 4.15511C10.0596 4.36284 9.80368 4.49401 9.52702 4.5229H5.52702C5.26181 4.5229 5.00745 4.62826 4.81992 4.8158C4.63238 5.00333 4.52702 5.25769 4.52702 5.5229V18.4769C4.52702 18.7421 4.63238 18.9965 4.81992 19.184C5.00745 19.3715 5.26181 19.4769 5.52702 19.4769H18.4C18.6652 19.4769 18.9196 19.3715 19.1071 19.184C19.2947 18.9965 19.4 18.7421 19.4 18.4769V14.4769C19.4421 14.1944 19.5858 13.937 19.8041 13.7528C20.0225 13.5687 20.3005 13.4706 20.586 13.4769C20.8512 13.4769 21.1056 13.5823 21.2931 13.7698C21.4807 13.9573 21.586 14.2117 21.586 14.4769V18.6039C21.586 19.3996 21.27 20.1626 20.7073 20.7252C20.1447 21.2878 19.3817 21.6039 18.586 21.6039L5.40002 21.5999ZM15.575 14.0789C15.4489 14.0231 15.3418 13.9316 15.2668 13.8158C15.1919 13.7 15.1523 13.5649 15.153 13.4269V11.0819C14.9649 11.0721 14.7764 11.0675 14.588 11.0679C12.673 11.0679 9.27002 11.4189 7.94702 13.7749C7.8882 13.8826 7.80141 13.9724 7.69581 14.0349C7.59022 14.0973 7.46972 14.1302 7.34702 14.1299C7.28654 14.1301 7.22631 14.122 7.16802 14.1059C7.02068 14.0644 6.89102 13.9756 6.79891 13.8534C6.7068 13.7311 6.65731 13.582 6.65802 13.4289C6.72452 11.3739 7.53511 9.41303 8.93902 7.9109C10.6097 6.31048 12.8365 5.42132 15.15 5.4309V3.1099C15.1491 2.97255 15.1887 2.83797 15.2637 2.72292C15.3387 2.60788 15.446 2.51745 15.572 2.4629C15.6982 2.40983 15.8373 2.39575 15.9715 2.42249C16.1057 2.44922 16.2289 2.51554 16.325 2.6129L21.38 7.7729C21.5117 7.90601 21.5855 8.08568 21.5855 8.2729C21.5855 8.46013 21.5117 8.63979 21.38 8.7729L16.325 13.9319C16.2287 14.0291 16.1057 14.0954 15.9716 14.1222C15.8374 14.1491 15.6983 14.1354 15.572 14.0829L15.575 14.0789ZM15.726 9.5599C15.8779 9.57862 16.0175 9.65276 16.1181 9.76811C16.2187 9.88345 16.2732 10.0319 16.271 10.1849V11.3469L19.289 8.2699L16.276 5.1929V6.3599C16.2758 6.52428 16.2108 6.68195 16.0951 6.79874C15.9794 6.91554 15.8224 6.98206 15.658 6.9839C14.7009 6.91833 13.7405 7.04875 12.8356 7.3672C11.9306 7.68564 11.1001 8.1854 10.395 8.8359C9.8331 9.42048 9.3995 10.116 9.12202 10.8779C10.762 9.91429 12.6432 9.43932 14.544 9.5089C15.243 9.5099 15.7 9.5619 15.724 9.5619L15.726 9.5599Z"
				fill="#2B2E72"
			/>
		</g>
		<defs>
			<clipPath id="clip0_4797_30891">
				<rect width="24" height="24" fill="white" />
			</clipPath>
		</defs>
	</svg>
);


export const removeNullishValuesFromTickets = (ticket, removeAllNullish=true) => {
	const ticketCopy = structuredClone(ticket);
	const valuesToExclude = ["", "[]", "undefined", "null", null, undefined];
	Object.keys(ticket).forEach((key) => {
		if(valuesToExclude.includes(ticket[key])) {
			if(removeAllNullish){
				delete ticketCopy[key];
			}else {
				ticketCopy[key] = ""; 
			}
		}
	});
	return ticketCopy;
};

const ExportTicket = () => {
	const params = useParams()
	const {ticketId} = params
	const {tickets} = useSelector(state => state.tickets)
	const { customers } = useSelector((state) => state.customers);
	const { users } = useSelector((state) => state.users);
	const ticket = tickets.find(ticket => +ticket.id === +ticketId)
	const customer = customers.find((customer) => +customer.user_id === +ticket.customer_id);
	const user = users.find((user) => +user.id === +ticket.user_id);
	const [showDropdown, setShowDropdown] = useState(false)

	const showDropdownHandler = () => {
		setShowDropdown(pv => !pv)
	}

	const list = [removeNullishValuesFromTickets(ticket, true)];

	useEffect(() => {
		const listener = (event) => {
			if(!event.target.closest("#ExportTicketAsCSVOrPDFDropdown")){
				setShowDropdown(false)
			}
		}

		document.body.addEventListener("click", listener)
		return () => {
			document.body.removeEventListener("click", listener)
		}
	}, [])

	return (
		<div className="relative" id="ExportTicketAsCSVOrPDFDropdown">
			{showDropdown && (
				<DropdownWrapper className="absolute top-[105%] right-0">
					<Item>
						<PDFDownloadLink
							document={<TicketTemplatePDF ticket={ticket} customer={customer} user={user} />}
							fileName={`ticket-${ticket.id}-${new Date()}-pdf`}
							onClick={(event) => event.stopPropagation()}
						>
							{({ blob, url, loading, error }) => (loading ? "Loading PDF..." : "PDF")}
						</PDFDownloadLink>
					</Item>
					<Item>
						<CSVLink
							data={list}
							headers={ticketHeaders}
							filename={`ticket-${ticket.id}-${new Date()}-csv`}
							target="_blank"
						>
							CSV
						</CSVLink>
					</Item>
				</DropdownWrapper>
			)}
			<ExportButton
				onClick={showDropdownHandler}
				className="flex items-center justify-start gap-[0.5rem]"
			>
				<span>Export</span>
				<span>
					<ExportIcon />
				</span>
			</ExportButton>
		</div>
	);
};

export default ExportTicket;
