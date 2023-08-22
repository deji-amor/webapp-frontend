import { styled } from "@mui/material";
import {
	features,
	resources,
	community,
	support,
	company,
} from "../../atoms/landing/dropdownObjects";
import FooterItem from "../../atoms/landing/footerItem";
import CustomLogo from "../../atoms/Password/customLogo";

const FooterWrapper = styled("div")(() => ({
	width: "90%",
	position: "relative",
	margin: "0 auto",
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-evenly",
}));

const Footer = () => {
	return (
		<div style={{width: "100%"}}>
			<FooterWrapper>
				<FooterItem title="features" items={features} />
				<FooterItem title="resources" items={resources} />
				<FooterItem title="community" items={community} />
				<FooterItem title="support" items={support} />
				<FooterItem title="company" items={company} />
			</FooterWrapper>
			<div
				style={{
					width: "90%",
					position: "relative",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					margin: "auto",
				}}
			>
				<CustomLogo color="#2B2E72" style={{ position: "relative", top: "0" }} />
				<span>Copyright 2023</span>
			</div>
			<div style={{ width: "100%", height: "50px", position: "relative" }}></div>
		</div>
	);
};

export default Footer;
