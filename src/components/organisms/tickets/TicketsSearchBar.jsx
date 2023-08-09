import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import BlueHeader from '../../atoms/tickets/BlueHeader'
import SearchBar from '../../molecules/tickets/SearchBar';
import MultiplePathButton from '../../atoms/tickets/CreateTicketSuperAdmin/MultiplePathButton';
import TicketsSearchCustomer from './TicketsSearchCustomer';
import AddIcon from "@mui/icons-material/Add";
import { ticketsActions } from '../../../state-manager/reducers/tickets/tickets';

const TicketsSearchBar = () => {
	const [showSearchCustomers, setShowSearchCustomers] = useState(!false)
	const dispatch = useDispatch()

	const searchTicketsValue = useSelector((state) => state.tickets.searchTicketsValue);
	const changeTicketsSearchHandler = (value) => {
		dispatch(ticketsActions.updateField({ key: "searchTicketsValue", value: value }));
	}

	const showSearchCustomersHandler = (e) => {
		e.stopPropagation();
		setShowSearchCustomers(pv => !pv)
	};

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (!e.target.closest("#add-ticket-button")) {
				setShowSearchCustomers(false)
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

  return (
		<div className="flex items-center justify-between">
			<div className="">
				<BlueHeader>All Tickets</BlueHeader>
			</div>
			<div className="flex items-center gap-[2rem]">
				<div className="w-[30rem]">
					<SearchBar
						placeholder={"Search Tickets"}
						value={searchTicketsValue}
						onChange={changeTicketsSearchHandler}
					/>
				</div>
				<div id="add-ticket-button" className="border border-red-500 relative">
					<MultiplePathButton onClick={showSearchCustomersHandler}>
						{" "}
						<AddIcon /> Add New Ticket
					</MultiplePathButton>
					{showSearchCustomers && <TicketsSearchCustomer />}
				</div>
			</div>
		</div>
	);
}

export default TicketsSearchBar