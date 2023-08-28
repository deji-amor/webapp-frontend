import React from "react";
import { Tabs } from "@mui/material";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const ReportTabs = ({children, index}) => {
	return (
		<Box
        sx={{
            borderBottom: 1,
            borderColor: "1px solid rgba(182, 182, 182, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }}
        >
			<Tabs
				value={index}
				TabIndicatorProps={{
					style: {
						backgroundColor: "#2B2E72",
						height: "4px",
						borderTopLeftRadius: "8px",
						borderTopRightRadius: "8px",
					},
				}}
			>
				{children}
			</Tabs>
		</Box>
	);
};

ReportTabs.propTypes = {
	children: PropTypes.node,
    index: PropTypes.number,
};

export default ReportTabs;
