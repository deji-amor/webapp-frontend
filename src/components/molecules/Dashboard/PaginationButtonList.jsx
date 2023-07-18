import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import PaginationButton from "../../atoms/Dashboard/PaginationButton";

const PaginationButtonList = ({ numberOfButtons, onClick, currentPage, newStartingPoint, newEndingPoint }) => {

	let List = Array.from(new Array(numberOfButtons)).map((_, ind) => (
		<PaginationButton key={ind + 1} onClick={onClick} isActive={currentPage === ind + 1}>
			{ind + 1}
		</PaginationButton>
	)).slice(newStartingPoint, newEndingPoint);

	return <>{List}</>;
};

PaginationButtonList.propTypes = {
	numberOfButtons: PropTypes.number,
	onClick: PropTypes.func,
	currentPage: PropTypes.number,
	maxNumberOfButtons: PropTypes.number,
	newStartingPoint: PropTypes.number,
	newEndingPoint: PropTypes.number,
};

export default PaginationButtonList;
