import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { handleFilterByStatus } from "../../organisms/Reports/filters";

const FilterByWrapper = styled("div")(() => ({
	position: "relative",
	left: "17px",
	top: "20px",

	button: {
		minWidth: "140px",
		height: "43px",
		padding: "10px 14px 10px 14px",
		borderRadius: "8px",
		background: "rgba(43, 46, 114, 1)",
		color: "white",
		gap: "4px",
		texAlign: "center",
	},

	".dropdownCard": {
		width: "167px",
		height: "130px",
		overflow: "hidden",
		background: "white",
		borderRadius: "8px",
		position: "absolute",
		padding: "8px 6px 8px 6px",
		boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.20)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		gap: "2px",
		transition: "all",
	},

	".dropdownCard .item": {
		display: "flex",
		alignItems: "center",
		fontFamily: "Poppins",
		fontSize: "14px",
		fontWeight: "500",
		lineHeight: "20px",
		letterSpacing: "0.02em",
		textAlign: "left",
		padding: "5px",
		borderRadius: "5px",
	},

	".dropdownCard .item.active": {
		background: "rgba(76, 111, 255, 0.08)",
	},

	".dropdownCard .item:hover": {
		width: "100%",
		height: "38px",
		border: "0px 0px 1px 0px",
		gap: "16px",
		cursor: "pointer",
		background: "rgba(76, 111, 255, 0.08)",
	},
}));

const FilterBy = ({ dropItems, filterList, ticketList, setFilteredTickets }) => {
	const [text, setText] = useState("All");
	const [status, setStatus] = useState("")
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		handleFilterByStatus(status, filterList, ticketList, setFilteredTickets);
	}, [status]);

	return (
		<FilterByWrapper>
			<button type="button" onClick={() => setToggle((prev) => !prev)}>
				{text}
			</button>
			{toggle && (
				<div className="dropdownCard">
					{dropItems.map((item) => (
						<div
							key={item.status}
							className={text === item.title ? "item active" : "item"}
							onClick={() => {
								setToggle(false);
								setStatus(item.status)
								setText(item.title);
							}}
						>
							{item.title}
						</div>
					))}
				</div>
			)}
		</FilterByWrapper>
	);
};

FilterBy.propTypes = {
	dropItems: PropTypes.array,
	filterList: PropTypes.array,
	ticketList: PropTypes.array,
	handleTicketsFilter: PropTypes.func,
	setFilteredTickets: PropTypes.func,
};

export default FilterBy;
