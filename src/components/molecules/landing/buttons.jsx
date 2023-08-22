// import CustomButton from "../../atoms/Password/customButton"
import { Link } from "react-router-dom";
import { styled } from "@mui/material";

const NavigationButtonWrapper = styled("div")(() => ({
	display: "flex",
	gap: "20px",

    button: {
        color: "#ffffff",
        height: "40px",
        borderRadius: "8px",
        cursor: "pointer",
        position: "relative",
        zIndex: "20",
    },

    ".try": {
        width: "142px",
        background: "linear-gradient(180deg, #9265E5 0%, rgba(146, 101, 229, 0.00) 100%, rgba(65, 45, 102, 0.90) 100%)",
    },

    ".login": {
        width: "96px",
        border: "2px solid #ffffff",
    }
}));

const NavigateButtons = () => {
	return (
		<NavigationButtonWrapper>
            <Link to="/super-admin-onboarding">  
                <button className="try" type="button">Try For Free</button>
            </Link>
            <Link to="/login-admin">
                <button className="login" type="button">Log In</button>
            </Link>
		</NavigationButtonWrapper>
	);
};

export default NavigateButtons;
