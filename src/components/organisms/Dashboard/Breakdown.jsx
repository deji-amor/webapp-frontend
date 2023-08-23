import { Grid, styled } from "@mui/material";
import React from "react";
import Dropdown from "./Dropdown";

export const Breakdown = () => {
	const Box = styled("div")`
		display: flex;
		align-items: center;
		flex-shrink: 0;
        border-radius: 12px;
        background: #FFF;
        gap: 14px;
        padding: 16px 32px 20px 32px;
		box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);
	`;

	const Typography = styled("h3")`
    color: #706E6E;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
	`;

    const options = ['Tickets', 'Customers'];

	return (
		<Grid container spacing={2}>
			<Grid item xs={8}>
				<Box>
                    {/* <Typography>Breakdown</Typography> <br/> */}
                    <Dropdown options={options} />
                </Box>
			</Grid>
			<Grid item xs={4}>
				<Box>Rioch</Box>
			</Grid>
		</Grid>
	);
};
