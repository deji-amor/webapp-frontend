import React, { useState, useEffect, useCallback } from "react";
import HeadMessage from "../../../atoms/users/CustomerSuperAdmin/HeadMessage";
import HeadSearch from "../../../atoms/users/CustomerSuperAdmin/HeadSearch";
import DropdownButton from "../../../atoms/users/CustomerSuperAdmin/DropdownButton";
import { Grid } from "@mui/material";
import BasicTabs from "../../../organisms/users/CustomerSuperAdmin/UserTabs";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomers } from "../../../../state-manager/reducers/users/customers/customers";

const Head = () => {
	const [filter, setFilter] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredCustomers, setFilteredCustomers] = useState([]);
	const [customers, setCustomers] = useState([]);

	const dispatch = useDispatch();
	const {
		loading: customersLoading,
		customers: allCustomers,
		successful,
		error,
		errorMessage,
	} = useSelector((state) => state.customers);

	const sampleCustomers = allCustomers;

	const filterCustomers = useCallback(() => {
		if (filter === "All" && searchQuery === "") {
			setFilteredCustomers(customers);
		} else {
			const filtered = customers.filter((customer) => {
				return (
					(filter === "All" || customer.status === filter) &&
					(searchQuery === "" ||
						customer.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
						customer.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
						customer.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
						customer.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
						customer.email.toLowerCase().includes(searchQuery.toLowerCase()))
				);
			});
			setFilteredCustomers(filtered);
		}
	}, [filter, searchQuery, customers]);

	// useEffect(() => {
	// 	dispatch(fetchCustomers());
	// }, [dispatch]);

	useEffect(() => {
		setCustomers(sampleCustomers);
		setFilteredCustomers(sampleCustomers);
	}, [sampleCustomers]);

	useEffect(() => {
		filterCustomers();
	}, [filterCustomers]);

	const handleFilterChange = (event) => {
		setFilter(event.target.value);
	};

	const handleSearch = (searchQuery) => {
		setSearchQuery(searchQuery);
	};

	return (
		<Grid container spacing={3}>
			<Grid item xs>
				<HeadMessage>All Users</HeadMessage>
			</Grid>
			<Grid item xs></Grid>
			<Grid item xs={6}>
				<HeadSearch onSearch={handleSearch} />
			</Grid>
			<Grid item xs>
				<DropdownButton />
			</Grid>
			<BasicTabs
				filteredCustomers={filteredCustomers}
				handleFilterChange={handleFilterChange}
				filter={filter}
			/>
		</Grid>
	);
};

export default Head;