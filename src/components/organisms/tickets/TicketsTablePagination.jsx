import React, { useEffect } from 'react'
import PaginationText from '../../atoms/Dashboard/PaginationText';
import PaginationButtonList from '../../molecules/Dashboard/PaginationButtonList';
import usePagination from '../../atoms/Dashboard/usePagination';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useSelector, useDispatch } from 'react-redux';
import { ticketsActions } from '../../../state-manager/reducers/tickets/tickets';

const TicketsTablePagination = () => {
	const { loading: ticketsLoading, activeTickets } = useSelector((state) => state.tickets);

	const {loading: customersLoading } = useSelector((state) => state.customers);

	const dispatch = useDispatch()

	const totalItems = activeTickets.length;
	const itemsOnEachPage = 5;
	const maxNumberOfButtons = 5;
	const {
		currentPage,
		goBackward,
		goForward,
		goToPage,
		pages,
		itemEndPoint,
		itemStartPoint,
		newStartingPoint,
		newEndingPoint,
	} = usePagination(totalItems, itemsOnEachPage, maxNumberOfButtons);

	useEffect(() => {
		dispatch(
			ticketsActions.updateField({ key: "activeTicketsStartPoint", value: itemStartPoint - 1 })
		);
		dispatch(
			ticketsActions.updateField({ key: "activeTicketsEndPoint", value: itemEndPoint })
		);
	}, [itemStartPoint, itemStartPoint, totalItems])

	if(ticketsLoading || customersLoading) return <></>

	return (
		<div className="bg-white p-[0.8rem] rounded-b-[0.75rem] border-t-2 border-b-[#ECECEC] flex items-center justify-between">
			<div className="">
				<PaginationText>
					{" "}
					Showing {itemStartPoint} - {itemEndPoint} of {totalItems} Results{" "}
				</PaginationText>
			</div>
			<div className="flex items-center gap-[0.2rem]">
				<ChevronLeftIcon
					onClick={goBackward}
					className="text-[#2B2E72] cursor-pointer"
					style={{ fontSize: 20 }}
				/>{" "}
				<PaginationButtonList
					onClick={goToPage}
					currentPage={currentPage}
					numberOfButtons={pages}
					newStartingPoint={newStartingPoint}
					newEndingPoint={newEndingPoint}
				/>
				<ChevronRightIcon
					onClick={goForward}
					className="text-[#2B2E72] cursor-pointer"
					style={{ fontSize: 20 }}
				/>{" "}
			</div>
		</div>
	);
}

export default TicketsTablePagination