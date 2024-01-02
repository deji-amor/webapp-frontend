import React from 'react'
import PropTypes from "prop-types";
import { ticketsActions } from "../../../../state-manager/reducers/tickets/tickets";
import ReportTabs from "../../../atoms/Reports/tabs";
import { CustomTab } from "../../../organisms/users/CustomerSuperAdmin/UserTabs";
import { useDispatch, useSelector } from "react-redux";

const SortIcon = ({ascending}) => (
	<svg xmlns="http://www.w3.org/2000/svg" className={ascending ? "rotate-180" : ""} width="20" height="14" viewBox="0 0 20 14" fill="none">
		<path
			d="M19.808 10.331L15.6313 13.842H15.6209C15.6104 13.8596 15.5895 13.8683 15.5687 13.8859L15.5373 13.9034L15.4956 13.9298L15.4642 13.9473L15.4329 13.9649H15.3911L15.3598 13.9824H15.318L15.2763 14H14.796L14.7542 13.9824H14.7124L14.6811 13.9649H14.6393L14.608 13.9473L14.5767 13.9298L14.5349 13.9034L14.5036 13.8859L14.4514 13.842H14.4409L10.2642 10.331C10.131 10.1946 10.063 10.0214 10.0733 9.84511C10.0836 9.66882 10.1715 9.50206 10.32 9.37725C10.4684 9.25245 10.6668 9.17853 10.8765 9.16987C11.0862 9.16121 11.2923 9.21843 11.4546 9.33041L14.2008 11.6476V4.91536C14.2008 4.72913 14.2888 4.55052 14.4454 4.41883C14.6021 4.28715 14.8146 4.21317 15.0361 4.21317C15.2577 4.21317 15.4701 4.28715 15.6268 4.41883C15.7835 4.55052 15.8715 4.72913 15.8715 4.91536V11.6476L18.6176 9.33041C18.7799 9.21843 18.986 9.16121 19.1957 9.16987C19.4054 9.17853 19.6038 9.25245 19.7523 9.37725C19.9007 9.50206 19.9887 9.66882 19.999 9.84511C20.0093 10.0214 19.9412 10.1946 19.808 10.331ZM8.3534 5.61755H0.83534C0.613794 5.61755 0.401322 5.69154 0.244666 5.82322C0.0880089 5.95491 0 6.13352 0 6.31975C0 6.50598 0.0880089 6.68459 0.244666 6.81628C0.401322 6.94796 0.613794 7.02194 0.83534 7.02194H8.3534C8.57495 7.02194 8.78742 6.94796 8.94407 6.81628C9.10073 6.68459 9.18874 6.50598 9.18874 6.31975C9.18874 6.13352 9.10073 5.95491 8.94407 5.82322C8.78742 5.69154 8.57495 5.61755 8.3534 5.61755ZM0.83534 1.40439H15.0361C15.2577 1.40439 15.4701 1.33041 15.6268 1.19872C15.7835 1.06703 15.8715 0.888428 15.8715 0.702194C15.8715 0.515961 15.7835 0.337355 15.6268 0.205668C15.4701 0.0739811 15.2577 0 15.0361 0H0.83534C0.613794 0 0.401322 0.0739811 0.244666 0.205668C0.0880089 0.337355 0 0.515961 0 0.702194C0 0.888428 0.0880089 1.06703 0.244666 1.19872C0.401322 1.33041 0.613794 1.40439 0.83534 1.40439ZM6.68272 11.2351H0.83534C0.613794 11.2351 0.401322 11.3091 0.244666 11.4408C0.0880089 11.5725 0 11.7511 0 11.9373C0 12.1235 0.0880089 12.3021 0.244666 12.4338C0.401322 12.5655 0.613794 12.6395 0.83534 12.6395H6.68272C6.90427 12.6395 7.11674 12.5655 7.27339 12.4338C7.43005 12.3021 7.51806 12.1235 7.51806 11.9373C7.51806 11.7511 7.43005 11.5725 7.27339 11.4408C7.11674 11.3091 6.90427 11.2351 6.68272 11.2351Z"
			fill="black"
		/>
	</svg>
);

const TicketsTableHead = () => {
	const dispatch = useDispatch();
	const { ticketTabIndex, sortByAscending } = useSelector((state) => state.tickets);

	const handleChange = (ind) => {
		dispatch(ticketsActions.updateField({ key: "ticketTabIndex", value: ind }));
		dispatch(ticketsActions.updateField({ key: "currentPage", value: 1 }));
	};

  const handleSorting = () => {
    dispatch(ticketsActions.updateField({ key: "sortByAscending", value: !sortByAscending }));
  }

	const a11yProps = (ind) => {
		return {
			id: `simple-tab-${ind}`,
			"aria-controls": `simple-tabpanel-${ind}`,
		};
	};

	return (
		<div className="w-full bg-white rounded-[0.75rem_0.75rem_0rem_0rem] border-b-2 border-b-[#ECECEC] flex items-center justify-between pr-[1.5rem]">
			<ReportTabs index={ticketTabIndex} handleChange={() => handleChange(ticketTabIndex)}>
				<CustomTab label="Service Tickets" {...a11yProps(0)} onClick={() => handleChange(0)} />
				<CustomTab label="Project Tickets" {...a11yProps(1)} onClick={() => handleChange(1)} />
			</ReportTabs>

			<button onClick={handleSorting} className="flex items-center gap-[0.5rem]">
				<span className="text-black text-sm not-italic font-bold leading-5">Sort by</span>
				<SortIcon ascending={sortByAscending} />
			</button>
		</div>
	);
}

export default TicketsTableHead

SortIcon.propTypes = {
	ascending: PropTypes.bool,
};