import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import PaginationButton from "../../atoms/Dashboard/PaginationButton";

const PaginationButtonList = ({ numberOfButtons, onClick, currentPage, maxNumberOfButtons }) => {
  const t = currentPage - Math.ceil(maxNumberOfButtons / 2)
  const newStartingPoint = t < 1 ? 0 : t
  const newEndingPoint = newStartingPoint + maxNumberOfButtons

  console.log({t, newStartingPoint, newEndingPoint, currentPage, maxNumberOfButtons});

  const Original = Array.from(new Array(numberOfButtons)).map((_, ind) => (
		<PaginationButton key={ind + 1} onClick={onClick} isActive={currentPage === ind + 1}>
			{ind + 1}
		</PaginationButton>
	));

	let List = Array.from(new Array(numberOfButtons)).map((_, ind) => (
		<PaginationButton key={ind + 1} onClick={onClick} isActive={currentPage === ind + 1}>
			{ind + 1}
		</PaginationButton>
	));

  if(maxNumberOfButtons < numberOfButtons){
    List = List.slice(newStartingPoint, newEndingPoint)
    if(List.length < maxNumberOfButtons){
      List = Original.slice(-maxNumberOfButtons)
    }
  }

	return <>{List}</>;
};

PaginationButtonList.propTypes = {
	numberOfButtons: PropTypes.number,
	onClick: PropTypes.func,
	currentPage: PropTypes.number,
	maxNumberOfButtons: PropTypes.number,
};

export default PaginationButtonList;
