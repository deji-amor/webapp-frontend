import { styled } from "@mui/material";

const HeroMessageWrapper = styled("div")(() => ({
    width: "688.17px",
	color: "#FEFEFE",
	textAlign: "center",
	fontFamily: "Poppins",
	display: "flex",
	flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",

	h1: {
		fontSize: "60px",
		fontStyle: "normal",
		fontWeight: "600",
		lineHeight: "120%",
		letterSpacing: "0.18px",
	},

	p: {
		fontSize: "18px",
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
        zIndex: "10",
        width: "200px",
        marginTop: "10px",
        background: "linear-gradient(180deg, #9265E5 0%, rgba(146, 101, 229, 0.00) 100%, rgba(65, 45, 102, 0.90) 100%)",
    }
}));

const HeroMessage = () => {
	return (
		<HeroMessageWrapper>
			<h1>Streamlined IT Service Management</h1>
			<p>
				Our robust solution is built and optimized specifically for IT teams and workflows,
				influenced by feedback, and centred around end-user and endpoint support.
			</p>
			<button type="button">Get Started For Free</button>
		</HeroMessageWrapper>
	);
};

export default HeroMessage;
