import PropTypes from "prop-types";
import { CustomerHeadingWrapper } from "./wrappers";

const CustomCustomerBannerHeader = ({ title, description }) => {
	return (
		<CustomerHeadingWrapper>
			<div>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
		</CustomerHeadingWrapper>
	);
};

CustomCustomerBannerHeader.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};

export default CustomCustomerBannerHeader;
