import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useState } from "react";

const MobileLinkWrapper = styled("div")(() => ({
	position: "relative",
	zIndex: "3000",

	".mobileL": {
		display: "flex",
		flexDirection: "column",
		padding: "10px 10px",
		gap: "10px",
	},

	button: {
		color: "#2B2E72",
		height: "40px",
		borderRadius: "8px",
		cursor: "pointer",
		position: "relative",
		zIndex: "200",
	},

	".but": {
		margin: "0 auto",
	},

	".li": {
		textAlign: "left",
		width: "100%",
		padding: "0 10px",
		borderRadius: "8px",
	},

	".li:hover": {
		color: "#ffffff",
		background: "#2B2E72",
	},

	".try": {
		width: "142px",
		color: "#ffffff",
		background: "linear-gradient(180deg, #9265E5 0%, #412D66 100%)",
	},

	".login": {
		width: "96px",
		border: "2px solid #2B2E72",
	},

	".logins": {
		position: "relative",
		width: "100%",
		height: "50px"
	},

	".drop": {
		width: "220px",
		background: "white",
		padding: "5px",
		borderRadius: "8px",
		position: "absolute",
		top: "38px",
		right: "50%",
		transform: "translateX(50%)",
		display: "none",
		flexDirection: "column",
		gap: "5px",
		justifyContent: "center",
		marginTop: "5px",
	},

	".logins:hover .drop": {
		display: "flex"
	},

	".login-customer, .login-admin": {
		color: "#2B2E72",
		width: "100%",
		padding: "10px 10px 10px 10px",
		fontSize: "16px",
		textAlign: "left",
		fontWeight: "600",
		position: "relative",
		zIndex: "1000",
		// border: "2px solid #2B2E72",
	},

	".login-customer:hover, .login-admin:hover": {
		background: "#2B2E72",
		color: "white",
	},
}));

const MobileLink = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<MobileLinkWrapper>
			<ul className="mobileL">
				{/* <li className="li">
					<NavLink>Home</NavLink>
				</li> */}
				{/* <li className="serv li">
					<ChevronLeftIcon />
					<NavLink>Products</NavLink>
				</li>
				<li className="sol li">
					<ChevronLeftIcon />
					<NavLink>Solutions</NavLink>
				</li>
				<li className="li">
					<NavLink>Pricing</NavLink>
				</li>
				<li className="li">
					<NavLink>Contact</NavLink>
				</li> */}
				<li className="li">
					<NavLink>About</NavLink>
				</li>
				<li className="li">
					<NavLink>Features</NavLink>
				</li>
				<hr />
				<li className="but">
					<NavLink to="/super-admin-onboarding">
						<button className="try">Contact Us</button>
					</NavLink>
				</li>
				<li className="but">
					<div className="logins">
						<button className="login" onClick={() => setToggle((prev) => !prev)} type="button">
							Log In
						</button>
						{/* {toggle && ( */}
							<div className="drop">
								<NavLink to="/login-customer">
									<button className="login-customer" type="button">
										Login as a Customer
									</button>
								</NavLink>
								<NavLink to="/login-admin">
									<button className="login-admin" type="button">
										Login as an Admin
									</button>
								</NavLink>
							</div>
						{/* )} */}
					</div>
				</li>
			</ul>
		</MobileLinkWrapper>
	);
};

export default MobileLink;
