import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SortBy from "../../../atoms/users/CustomerSuperAdmin/SortBy";
import CustomerTable from "./CustomerTable";
import { useEffect } from "react";
import Placeholder from "../../../molecules/general/Placeholder";

export const CustomTab = (props) => {
	const { label, ...other } = props;

	return (
		<Tab
			sx={{
				textTransform: "none",
				fontWeight: "600",
				fontSize: "16px",
				fontFamily: "poppins",
				backgroundColor: "white",
				borderRadius: "8px 8px 0 0",
				borderColor: "#2B2E72",
				"&.Mui-selected": {
					color: "#2B2E72",
				},
			}}
			label={label}
			{...other}
		/>
	);
};

function UserTabs(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 0 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

UserTabs.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs({ filteredCustomers }) {
    const [value, setValue] = React.useState(0);
    const [sortedCustomers, setSortedCustomers] = React.useState(filteredCustomers);
    const [isFilteringOrSearching, setIsFilteringOrSearching] = React.useState(false);

    useEffect(() => {
        setSortedCustomers(filteredCustomers);
    }, [filteredCustomers]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSort = (ascending) => {
        const sorted = [...sortedCustomers].sort((a, b) => {
            const nameA = a.company_name.toLowerCase();
            const nameB = b.company_name.toLowerCase();
            return ascending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });
        setSortedCustomers(sorted);
    };

    const handleUpdateStatus = (customerId, newStatus, comment) => {
        console.log("ACTIVE");
    };

    const handleFilterOrSearch = () => {
        setIsFilteringOrSearching(true);
    };

    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "#fff",
                color: "#2B2E72",
                marginTop: "22px",
                borderRadius: "12px 12px 0px 0px",
            }}
        >
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "#2B2E72",
                            height: "4px",
                            borderTopLeftRadius: "8px",
                            borderTopRightRadius: "8px",
                        },
                    }}
                >
                    <CustomTab label="Customers" {...a11yProps(0)} />
                    <CustomTab label="Technicians" {...a11yProps(1)} />
                    <CustomTab label="Admin" {...a11yProps(2)} />
                </Tabs>
                <SortBy onSort={handleSort} />
            </Box>
            <UserTabs value={value} index={0}>
                {isFilteringOrSearching && sortedCustomers.length === 0 ? (
                    <Typography variant="body1">No data found.</Typography>
                ) : sortedCustomers.length === 0 ? (
                    <Placeholder
                        messageHeader="seems you don’t have anything here yet!"
                        messageParagraph="Once a customer has been created for you, you will be able to view the data here."
                    />
                ) : (
                    <CustomerTable
                        filteredCustomers={sortedCustomers}
                        handleUpdateStatus={handleUpdateStatus}
                        onFilterOrSearch={handleFilterOrSearch}
                    />
                )}
            </UserTabs>
			<UserTabs value={value} index={1}>
				<Placeholder messageHeader="seems you don’t have anything here yet!" messageParagraph="Once a technician has been created for you, you will be able to view the data here." />
			</UserTabs>
			<UserTabs value={value} index={2}>
				<Placeholder messageHeader="seems you don’t have anything here yet!" messageParagraph="Once an admin has been created for you, you will be able to view the data here." />
			</UserTabs>
		</Box>
	);
}
