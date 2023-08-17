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
	const [isMenuOpen, setMenuOpen] = useState(false);

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
			setFilteredCustomers(sampleCustomers);
		} else {
			const filtered = sampleCustomers.filter((customer) => {
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
	}, [filter, searchQuery, sampleCustomers]);


	useEffect(() => {
		if (searchQuery || filter) filterCustomers();
	}, [filterCustomers, searchQuery, filter]);

	const handleFilterChange = (event) => {
		setFilter(event.target.value);
	};

	const handleSearch = (searchQuery) => {
		setSearchQuery(searchQuery);
	};

	const handleMenuItemClick = () => {
    setMenuOpen(false);
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
				<DropdownButton isMenuOpen={isMenuOpen} handleMenuItemClick={handleMenuItemClick} />
			</Grid>
			<BasicTabs
				filteredCustomers={sampleCustomers}
				handleFilterChange={handleFilterChange}
				filter={filter}
			/>
		</Grid>
	);
};

export default Head;