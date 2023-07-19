import { CustomerBannerWrapper } from "./wrappers";
import BannerImage from "../../../assets/customer.png";

const CustomCustomerBannerImage = () => {
	return (
		<CustomerBannerWrapper img={BannerImage}>
			<img src={BannerImage} alt="Customer Banner Image" />
			<div></div>
		</CustomerBannerWrapper>
	);
};

export default CustomCustomerBannerImage;
