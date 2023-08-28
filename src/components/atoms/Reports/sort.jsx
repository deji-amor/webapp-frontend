import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import SortImage from "../../../assets/password/vecsort.png";

const SortWrapper = styled("div")(({toggle}) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: "10px",
	cursor: "pointer",
	fontFamily: "Poppins",
	fontSize: "16px",
	fontWeight: "600",
	lineHeight: "20px",
	letterSpacing: "0em",
	textAlign: "left",
    color: "rgba(43, 46, 114, 1)",
    position: "relative",
    right: "20px",

	img: {
		width: "20px",
		height: "15px",
        transform: toggle ? "rotate(180deg)": "rotate(0)",
		transition: "transform 1s ease"
	},
}));

const ReportSort = ({handleReportsSort, toggle, setToggle}) => {

	const handleToggle = () => {
		if (toggle) {
			setToggle(false)
			handleReportsSort("ascending")
		}else {
			setToggle(true)
			handleReportsSort("descending")
		}
	}

	return (
		<SortWrapper title={toggle ?  "Ascending": "Descending"} toggle={toggle} onClick={handleToggle}>
			<span>Sort by</span>
			<img src={SortImage} alt="sort icon" />
		</SortWrapper>
	);
};

ReportSort.propTypes = {
	handleReportsSort: PropTypes.func,
	setToggle: PropTypes.func,
	toggle: PropTypes.bool
}

export default ReportSort;
