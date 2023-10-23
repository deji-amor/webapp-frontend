import React, { useEffect } from 'react'
import PaginationText from '../../atoms/Dashboard/PaginationText';
import PaginationButtonList from '../../molecules/Dashboard/PaginationButtonList';
import usePagination from '../../atoms/Dashboard/usePagination';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useSelector, useDispatch } from 'react-redux';
import { ticketsActions } from '../../../state-manager/reducers/tickets/tickets';

const TicketsTablePagination = () => {
	const {
		loading: ticketsLoading,
		activeTickets,
		ticketsOnEachPage,
		showServiceRequestsTab,
		showProjectsTab,
	} = useSelector((state) => state.tickets);

	const {loading: customersLoading } = useSelector((state) => state.customers);

	const dispatch = useDispatch()

	const totalItems = activeTickets.length;
	const itemsOnEachPage = ticketsOnEachPage;
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
		reset
	} = usePagination(totalItems, itemsOnEachPage, maxNumberOfButtons);

	useEffect(() => {
		reset()
	}, [showServiceRequestsTab, showProjectsTab]);

	useEffect(() => {
		if(totalItems.length <= itemsOnEachPage){
			console.log("98f6d57");
			dispatch(
				ticketsActions.updateField({ key: "activeTicketsStartPoint", value: 0 })
			);
			dispatch(
				ticketsActions.updateField({ key: "activeTicketsEndPoint", value: itemsOnEachPage })
			);
			return
		}
		dispatch(
			ticketsActions.updateField({ key: "activeTicketsStartPoint", value: itemStartPoint - 1 })
		);
		dispatch(
			ticketsActions.updateField({ key: "activeTicketsEndPoint", value: itemEndPoint })
		);
	}, [itemStartPoint, itemEndPoint, totalItems,dispatch])

	if(ticketsLoading || customersLoading) return <></>

	if(totalItems === 0) return <></>;

	return (
		<div className="bg-white p-[0.8rem] rounded-b-[0.75rem] border-t-2 border-b-[#ECECEC] flex items-center justify-between">
			<div className="">
				<PaginationText>
					{" "}
					Showing {itemStartPoint} - {itemEndPoint} of {totalItems} Results{" "}
				</PaginationText>
			</div>
			{
				(itemsOnEachPage < totalItems) &&
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
			}
		</div>
	);
}

export default TicketsTablePagination