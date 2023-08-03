import { styled } from "@mui/material";
import Logo1 from "../../../assets/password/logo1.png"
import Logo2 from "../../../assets/password/logo2.png"
import Logo3 from "../../../assets/password/logo3.png"
import Logo4 from "../../../assets/password/logo4.png"
import Logo5 from "../../../assets/password/logo5.png"

const OrganizationWrapper = styled("div")(() => ({
    width: "927px",
    margin: "auto",
    position: "relative",
    top: "450px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",

	h4: {
		color: "#324A52",
		textAlign: "center",
		fontFamily: "Poppins",
		fontSize: "16px",
		fontStyle: "normal",
		fontWeight: "700",
		lineHeight: "120%",
		letterSpacing: "0.8px",
		textTransform: "uppercase",
	},

    ".orgs": {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-around",
        alightItems: "center"

    }
}));

const Organizations = () => {
	return (
		<OrganizationWrapper>
			<h4>Used by 1000+ organizations across the world</h4>
            <div className="orgs">
                <div>
                    <img src={Logo1} alt="Organization Logo" />
                </div>
                <div>
                    <img src={Logo2} alt="Organization Logo" />
                </div>
                <div>
                    <img src={Logo3} alt="Organization Logo" />
                </div>
                <div>
                    <img src={Logo4} alt="Organization Logo" />
                </div>
                <div>
                    <img src={Logo5} alt="Organization Logo" />
                </div>
            </div>
		</OrganizationWrapper>
	);
};

export default Organizations;
