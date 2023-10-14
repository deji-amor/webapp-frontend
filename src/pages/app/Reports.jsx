import ReportNavigateButs from "../../components/molecules/Reports/reportNavigateSection";
import { useSelector } from "react-redux";
import TicketReportBody from "../../components/organisms/Reports/ticketReportBody";
import CustomerReportBody from "../../components/organisms/Reports/customerReportBody";
import TechnicianReportBody from "../../components/organisms/Reports/technicianReportBody";

const Reports = () => {
	const { ticketReport, customerReport, technicianReport } = useSelector((state) => state.reports);
	return (
		<>
			<ReportNavigateButs reportTitle={"Reports"} />
			{(ticketReport && <TicketReportBody />) ||
				(customerReport && <CustomerReportBody />) ||
				(technicianReport && <TechnicianReportBody />)}
		</>
	);
};

export default Reports;
