import { styled, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom"

const HeroMessageWrapper = styled("div")(({query, query2}) => ({
    width: query2 ? "100%" : "688.17px",
	color: "#FEFEFE",
	textAlign: "center",
	fontFamily: "Poppins",
	display: "flex",
	flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
	margin: "0 auto",

	h1: {
		fontSize: query2 ? "40px" : query ? "50px" : "60px",
		fontStyle: "normal",
		fontWeight: "600",
		lineHeight: "120%",
		letterSpacing: "0.18px",
	},

	p: {
		fontSize: query2 ? "16px" : "18px",
		fontWeight: "400",
		lineHeight: "125%",
		letterSpacing: "0.09px",
	},

    button: {
        color: "#ffffff",
        height: "56px",
        borderRadius: "8px",
        cursor: "pointer",
        position: "relative",
		top: query ? "10px" : "",
        zIndex: "500",
        width: "200px",
        marginTop: "10px",
        background: "linear-gradient(180deg, #9265E5 0%, rgba(146, 101, 229, 0.00) 100%, rgba(65, 45, 102, 0.90) 100%)",
    }
}));

const HeroMessage = () => {
	let query = useMediaQuery("(max-width: 1000px)");
	let query2 = useMediaQuery("(max-width: 850px)");

	return (
		<HeroMessageWrapper query={query} query2={query2}>
			<h1>Streamlined IT Service Management</h1>
			<p>
				Our robust solution is built and optimized specifically for IT teams and workflows,
				influenced by feedback, and centred around end-user and endpoint support.
			</p>
			<Link to="/super-admin-onboarding">
				<button style={{cursor: "pointer", position: "relative", zIndex: "30"}} type="button">Get Started For Free</button>
			</Link>
		</HeroMessageWrapper>
	);
};

export default HeroMessage;
