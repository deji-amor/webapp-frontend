import React, { useState, useEffect, useCallback } from "react";
import HeadMessage from "../../../atoms/users/CustomerSuperAdmin/HeadMessage";
import HeadSearch from "../../../atoms/users/CustomerSuperAdmin/HeadSearch";
import DropdownButton from "../../../atoms/users/CustomerSuperAdmin/DropdownButton";
import { Grid } from "@mui/material";
import UserTabs from "../../../organisms/users/CustomerSuperAdmin/UserTabs";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomers } from "../../../../state-manager/reducers/users/customers/customers";

const Head = () => {
	const [filter, setFilter] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredCustomers, setFilteredCustomers] = useState([]);
	const [allCustomers, setCustomers] = useState([]);

	const dispatch = useDispatch();
	const {
		customers
	} = useSelector((state) => state.customers);

	// const sampleCustomers = [
	// 	{
	// 		id: 1,
	// 		companyName: "Sevirox Manufacturing",
	// 		representativeName: "Alexander Schevchenko",
	// 		representativeEmail: "ASchevchenko@Servirox.com",
	// 		representativePhone: "09088776655",
	// 		status: "Active",
	// 		dateCreated: new Date().toISOString(),
	// 	},
	// 	{
	// 		id: 2,
	// 		companyName: "Sevirox Manufacturing",
	// 		representativeName: "Jane Smith",
	// 		representativeEmail: "jane@example.com",
	// 		status: "Inactive",
	// 	},
	// 	{
	// 		id: 3,
	// 		companyName: "Sammy Highway",
	// 		representativeName: "Mike Johnson",
	// 		representativeEmail: "mike@example.com",
	// 		status: "Suspended",
	// 	},
	// 	{
	// 		id: 4,
	// 		companyName: "Lorem Adel",
	// 		representativeName: "Alexander Schevchenko",
	// 		representativeEmail: "ASchevchenko@Servirox.com",
	// 		status: "Inactive",
	// 	},
	// 	{
	// 		id: 5,
	// 		companyName: "Sevirox Manufacturing",
	// 		representativeName: "Jane Smith",
	// 		representativeEmail: "jane@example.com",
	// 		status: "Active",
	// 	},
	// 	{
	// 		id: 6,
	// 		companyName: "Sammy Highway",
	// 		representativeName: "Mike Johnson",
	// 		representativeEmail: "mike@example.com",
	// 		status: "Suspended",
	// 	},
	// 	{
	// 		id: 7,
	// 		companyName: "Gbubemi Deji Enterprises",
	// 		representativeName: "Richard Gbemisola",
	// 		representativeEmail: "ricgbe@example.com",
	// 		status: "Suspended",
	// 	},
	// ];

	const filterCustomers = useCallback(() => {
		if (filter === "All" && searchQuery === "") {
			setFilteredCustomers(allCustomers);
		} else {
			const filtered = allCustomers.filter((customer) => {
				return (
					(filter === "All" || customer.status === filter) &&
					(searchQuery === "" ||
						customer.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
						customer.representativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
						customer.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
						customer.representativeEmail.toLowerCase().includes(searchQuery.toLowerCase()))
				);
			});
			setFilteredCustomers(filtered);
		}
	}, [filter, searchQuery, allCustomers]);

	useEffect(() => {
		dispatch(fetchCustomers());
		// setTimeout(() => {
			setCustomers(customers);
			setFilteredCustomers(customers);
		// }, 500);
	}, [dispatch]);

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
			<UserTabs
				filteredCustomers={filteredCustomers}
				handleFilterChange={handleFilterChange}
				filter={filter}
			/>
		</Grid>
	);
};

export default Head;
