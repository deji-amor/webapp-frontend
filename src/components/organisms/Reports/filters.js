import { getDateFromDateTime } from "../../../helpers/date-manipulation";

export const handleFilterByStatus = (status, filteredTickets, tickets, setFilteredTickets) => {
    let filTickets = []

    if (status === "all") {
        return setFilteredTickets([...tickets])
    }

    if (filteredTickets) {
        if (status === "done") {
            console.log(status)
            filTickets = filteredTickets.slice().filter((tic) => tic.status === status)
            setFilteredTickets([...filTickets])
        }else if (status === "inprogress") {
            filTickets = filteredTickets.slice().filter((tic) => tic.status === status)
            setFilteredTickets([...filTickets])
        }else {
            filTickets = filteredTickets.slice().filter((tic) => tic.status === "pending")
            setFilteredTickets([...filTickets])
        }
    }else {
        console.log(status)
        if (status === "done") {
            filTickets = tickets.slice().filter((tic) => tic.status === status)
            setFilteredTickets([...filTickets])
        }else if (status === "inprogress") {
            filTickets = tickets.slice().filter((tic) => tic.status === status)
            setFilteredTickets([...filTickets])
        }else {
            filTickets = tickets.slice().filter((tic) => tic.status === "pending")
            setFilteredTickets([...filTickets])
        }
    }

    console.log(filTickets)
}