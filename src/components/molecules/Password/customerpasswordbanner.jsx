import { CustomerBannerContainerWrapper } from "../../atoms/Password/wrappers";
import chatImage from "../../../assets/chat.png";
import PropTypes from "prop-types";
import CustomCustomerBannerImage from "../../atoms/Password/customCustomerImage";
import CustomCustomerBannerHeader from "../../atoms/Password/customCustomerHeading";

const CustomerBanner = ({ title, description }) => {
	return (
		<CustomerBannerContainerWrapper>
			<img className="chat" src={chatImage} alt="Chat Image" />
			<CustomCustomerBannerHeader title={title} description={description} />
			<CustomCustomerBannerImage />
		</CustomerBannerContainerWrapper>
	);
};

CustomerBanner.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};

export default CustomerBanner;
