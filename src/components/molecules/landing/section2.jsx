import { styled, useMediaQuery } from "@mui/material";
import "./board.css";
import Logo1 from "../../../assets/password/logo1.png"
import Logo2 from "../../../assets/password/logo2.png"
import Logo3 from "../../../assets/password/logo3.png"
import Logo4 from "../../../assets/password/logo4.png"
import Logo5 from "../../../assets/password/logo5.png"

const OrganizationWrapper = styled("div")(({query}) => ({
    width: "100%",
    margin: "auto",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "40px",

    // ".placeholder": {
    //     width: "100%",
    //     height: "100px",
    // },

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
        width: "75%",
        listStyle: "none",
        display: "flex",
        justifyContent: "space-around",
        alightItems: "center",
        gap: "20px",
    }
}));

const Organizations = () => {
	let query = useMediaQuery("(max-width: 1200px)");

	return (
		<OrganizationWrapper query={query}>
            {/* <div className="placeholder">
                
            </div> */}
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
