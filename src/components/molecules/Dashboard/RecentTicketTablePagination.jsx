import React from "react";
import PropTypes from "prop-types";
import PaginationText from "../../atoms/Dashboard/PaginationText";
import PaginationButtonList from "./PaginationButtonList";
import usePagination from "../../atoms/Dashboard/usePagination";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const RecentTicketTablePagination = (props) => {
  const totalItems = 100
  const itemsOnEachPage = 10
	const { currentPage, goBackward, goForward, goToPage, pages, currentRange } = usePagination(totalItems, itemsOnEachPage);

	const startingPoint = currentRange - itemsOnEachPage + 1
	const endingPoint = currentRange

	return (
		<div className="bg-white p-[0.8rem] rounded-b-[0.75rem] border-t-2 border-b-[#ECECEC] flex items-center justify-between">
      <div className="">
        <PaginationText> Showing {startingPoint} - {endingPoint} of {totalItems} Results </PaginationText>
      </div>
			<div className="flex items-center gap-[0.2rem]">
				<ChevronLeftIcon onClick={goBackward} className="text-[#2B2E72] cursor-pointer" style={{ fontSize: 20 }} />{" "}
				<PaginationButtonList onClick={goToPage} currentPage={currentPage} numberOfButtons={pages} maxNumberOfButtons={5}/>
				<ChevronRightIcon onClick={goForward} className="text-[#2B2E72] cursor-pointer" style={{ fontSize: 20 }} />{" "}
			</div>
		</div>
	);
};

RecentTicketTablePagination.propTypes = {};

export default RecentTicketTablePagination;
