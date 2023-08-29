export const handleFilterByStatus = (
	status,
	filteredTickets,
	filteredTicketsByDate,
	filterTicketsByStatus,
	setMultipleFilterStatus,
	dispatch
) => {
	let filTickets = [];

	if (filteredTicketsByDate.length != 0) {
		if (status === "done") {
			console.log(status);
			filTickets = filteredTicketsByDate.slice().filter(tic => tic.status.toLowerCase() === status);
			dispatch(filterTicketsByStatus({data: filTickets, status: status}));
			dispatch(setMultipleFilterStatus(status));
		} else if (status === "in-progress") {
			filTickets = filteredTicketsByDate.slice().filter(tic => tic.status.toLowerCase() === status);
			dispatch(filterTicketsByStatus({data: filTickets, status: status}));
			dispatch(setMultipleFilterStatus(status));
		} else if (status === "pending") {
			filTickets = filteredTicketsByDate.slice().filter(tic => tic.status.toLowerCase() === status);
			dispatch(filterTicketsByStatus({data: filTickets, status: status}));
			dispatch(setMultipleFilterStatus(status));
		} else {
			filTickets = filteredTicketsByDate.slice().filter(tic => tic.status.toLowerCase() === status);
			dispatch(filterTicketsByStatus({data: filTickets, status: status}));
			dispatch(setMultipleFilterStatus(status));
		}
	} else {
		if (status === "done") {
			console.log(status);
			filTickets = filteredTickets.slice().filter(tic => tic.status.toLowerCase() === status);
			dispatch(filterTicketsByStatus({data: filTickets, status: status}));
			dispatch(setMultipleFilterStatus(status));
		} else if (status === "in-progress") {
			filTickets = filteredTickets.slice().filter(tic => tic.status.toLowerCase() === status);
			dispatch(filterTicketsByStatus({data: filTickets, status: status}));
			dispatch(setMultipleFilterStatus(status));
		} else if (status === "pending") {
			filTickets = filteredTickets.slice().filter(tic => tic.status.toLowerCase() === status);
			dispatch(filterTicketsByStatus({data: filTickets, status: status}));
			dispatch(setMultipleFilterStatus(status));
		} else {
			filTickets = filteredTickets.slice().filter(tic => tic.status.toLowerCase() === status);
			dispatch(filterTicketsByStatus({data: filTickets, status: status}));
			dispatch(setMultipleFilterStatus(status));
		}
	}
};

export const handleCustomerFilterByStatus = (
	status,
	filteredCustomers,
	filteredCustomersByDate,
	filterCustomersByStatus,
	dispatch
) => {
	let filCustomers = [];

	console.log(status)

	if (filteredCustomersByDate.length != 0) {
		if (status === "active") {
			filCustomers = filteredCustomersByDate
				.slice()
				.filter(tic => tic.status.toLowerCase() === status);
			dispatch(filterCustomersByStatus(filCustomers));
		} else if (status === "inactive") {
			filCustomers = filteredCustomersByDate
				.slice()
				.filter(tic => tic.status.toLowerCase() === status);
			dispatch(filterCustomersByStatus(filCustomers));
		} else if (status === "suspend") {
			filCustomers = filteredCustomersByDate
				.slice()
				.filter(tic => tic.status.toLowerCase() === status);
			dispatch(filterCustomersByStatus(filCustomers));
		}
		else {
			filCustomers = filteredCustomersByDate
				.slice()
				.filter(tic => tic.status.toLowerCase() === status);
			dispatch(filterCustomersByStatus(filCustomers));
		}
	} else {
		if (status === "active") {
			filCustomers = filteredCustomers.slice().filter(tic => tic.status.toLowerCase() === status);
			dispatch(filterCustomersByStatus(filCustomers));
		} else if (status === "inactive") {
			filCustomers = filteredCustomers.slice().filter(tic => tic.status.toLowerCase() === status);
			dispatch(filterCustomersByStatus(filCustomers));
		} else if (status === "suspend") {
			filCustomers = filteredCustomers.slice().filter(tic => tic.status.toLowerCase() === status);
			dispatch(filterCustomersByStatus(filCustomers));
		}else {
			filCustomers = filteredCustomers.slice().filter(tic => tic.status.toLowerCase() === status);
			dispatch(filterCustomersByStatus(filCustomers));
		}
	}
};
