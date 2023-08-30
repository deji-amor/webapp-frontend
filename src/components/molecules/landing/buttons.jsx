// import CustomButton from "../../atoms/Password/customButton"
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import { useState } from "react";

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
		background:
			"linear-gradient(180deg, #9265E5 0%, rgba(146, 101, 229, 0.00) 100%, rgba(65, 45, 102, 0.90) 100%)",
	},

	".login": {
		width: "96px",
		border: "2px solid #ffffff",
	},

	".logins": {
		position: "relative",
	},

	".drop": {
		width: "150px",
		background: "white",
		padding: "5px",
		borderRadius: "8px",
		position: "absolute",
		top: "45px",
		right: "0",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        justifyContent: "center",

	},

	".login-customer, .login-admin": {
		color: "#2B2E72",
		width: "100%",
        padding: "10px 0px 10px 0px",
        fontSize: "14px",
        textAlign: "center",
		border: "2px solid #2B2E72",
	},

    ".login-customer:hover, .login-admin:hover": {
        background: "#2B2E72",
        color: "white"
    }
}));

const NavigateButtons = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<NavigationButtonWrapper>
			<Link to="/super-admin-onboarding">
				<button className="try" type="button">
					Try For Free
				</button>
			</Link>
			<div className="logins">
				<button className="login" onClick={() => setToggle((prev) => !prev)} type="button">
					Log In
				</button>
				{toggle &&
				(
					<div className="drop">
						<Link to="/login-admin">
							<button
								className="login-admin"
								type="button"
							>
								Admin Login
							</button>
						</Link>
						<Link to="/login-customer">
							<button
								className="login-customer"
								type="button"
							>
								Customer Login
							</button>
						</Link>
					</div>
				)}
			</div>
		</NavigationButtonWrapper>
	);
};

export default NavigateButtons;
