import React, { useState, useEffect } from "react";
import HeadMessage from "../../../atoms/users/CustomerSuperAdmin/HeadMessage";
import HeadSearch from "../../../atoms/users/CustomerSuperAdmin/HeadSearch";
import DropdownButton from "../../../atoms/users/CustomerSuperAdmin/DropdownButton";
import { Grid } from "@mui/material";
import BasicTabs from "../../../organisms/users/CustomerSuperAdmin/UserTabs";
import { useSelector } from "react-redux";

const Head = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredCustomers, setFilteredCustomers] = useState([]);

	const customers = useSelector((state) => state.customers.customers);

	useEffect(() => {
		filterCustomers();
	}, [searchQuery, customers]);

	const filterCustomers = () => {
		const filtered = customers.filter((customer) => {
			return (
				(searchQuery === "" ||
					customer.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
					customer.representativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
					customer.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
					customer.representativeEmail.toLowerCase().includes(searchQuery.toLowerCase()))
			);
		});
		setFilteredCustomers(filtered);
	};

	const handleSearch = (searchQuery) => {
		setSearchQuery(searchQuery);
	};

	return (
		<Grid container spacing={3}>
			<Grid item xs>
				<HeadMessage>All Users</HeadMessage>
			</Grid>
			<Grid item xs>
			</Grid>
			<Grid item xs={6}>
				<HeadSearch onSearch={handleSearch} />
			</Grid>
			<Grid item xs>
				<DropdownButton />
			</Grid>
			<BasicTabs filteredCustomers={filteredCustomers} />
		</Grid>
	);
};

export default Head;
