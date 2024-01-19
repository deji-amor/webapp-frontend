import { styled, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import "./board.css";
import DecorCircle from "../../atoms/landing/decorCircle";
import Slide from "../../molecules/landing/slide";
import SimplifiedImg from "../../../assets/password/simplified.webp";
import SimplifiedCardImg from "../../../assets/password/simplified-card.webp";
import SimplifiedBottomImg from "../../../assets/password/simplified-bottom-card.webp";


const ManagementWrapper = styled("div")(({query}) => ({
	width: "90%",
	height: "auto",
	position: "relative",
	margin: "0 auto",
	marginBottom: "100px",
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
	gap: "80px",
	padding: "10px",
	flexWrap: "wrap",

	".content": {
		width: "416px",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		gap: "40px",
		zIndex: "10",
		margin: "auto 0",
	},

	".content h1": {
		fontFamily: "poppins",
		fontWeight: "600",
		fontSize: "48px",
		lineHeight: "57.6px",
		letterSpacing: ".5%",
		color: "#2B2E72",
	},

	".content p": {
		fontFamily: "poppins",
		fontWeight: "400",
		fontSize: "16px",
		lineHeight: "21px",
		letterSpacing: ".5%",
		color: "#78787F",
	},

	".content button": {
		color: "#ffffff",
		width: "142px",
		height: "40px",
		borderRadius: "8px",
		cursor: "pointer",
		position: "relative",
		top: "30px",
		zIndex: "20",
		background: "linear-gradient(180deg, #9265E5 0%, #412D66 100%)",
	},

	".tableWrapper": {
		width: "650px",
		position: "relative",
		borderRadius: "10px",
	},

	".simplified-img": {
		width: "100%",
		height: "100%",
	},

	".simplified-img img": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},

	".absolute-slide": {
		position: "absolute",
		top: "75px",
		right: query ? "-50px" : "-120px",
		padding: "0"
	},

	".absolute-slide img": {
		width: "100%",
		height: "100%"
	},

	".relative-slide": {
		position: "absolute",
		bottom: "-160px",
		padding: "0"
	}
}));


const Management = () => {
	let query = useMediaQuery("(max-width: 800px)");

	return (
		<>
		<div className="placeholder">
		</div>
			<ManagementWrapper className="management" query={query}>
				<DecorCircle
					top="40px"
					left="-200px"
					color="rgba(76, 111, 255, 0.12)"
					filter="blur(120.32733917236328px)"
				/>
				<div className="content">
					<h1>Simplify your IT operations with unified management</h1>
					<div className="contBut">
						<p>
						Are you tired of managing your IT operations manually? Our IT Service Management web app is here to help! Our app is designed to help you streamline your IT operations and make your life easier.
						</p>
						<Link to="/super-admin-onboarding">
							<button type="button">Contact Us</button>
						</Link>
					</div>
				</div>
				<div className="tableWrapper">
					<div className="simplified-img">
						<img src={SimplifiedImg} alt="simplified image" />
					</div>
					<Slide>
						<img className="side-card" src={SimplifiedCardImg} alt="simplied card" />
					</Slide>
					<Slide position="relative">
						<img className="bottom-card" src={SimplifiedBottomImg} alt="simplied card" />
					</Slide>
				</div>
			</ManagementWrapper>
		</>
	);
};

export default Management;

// table: {
// 	width: "100%",
// },

// "table thead tr": {
// 	height: "33px",
// 	borderRadius: "10px",
// 	background: "#F9FAFB",
// 	textAlign: "left",
// 	color: "#667085",
// },

// "th, td": {
// 	fontSize: "12px",
// 	fontFamily: "inter",
// 	fontWeight: "500",
// 	lineHeight: "18px",
// },

// th: {
// 	paddingLeft: "20px",
// },

// td: {
// 	padding: "15px",
// },

// h6: {
// 	fontSize: "14px",
// 	fontWeight: "400",
// 	lineHeight: "20px",
// 	color: "#101828",
// },

// p: {
// 	color: "#667085",
// 	fontSize: "12px",
// 	fontWeight: "400",
// 	lineHeight: "20px",
// },

// ".approve": {
// 	background: "#ECFDF3",
// 	textAlign: "center",
// 	padding: "7px",
// 	borderRadius: "20px",
// 	color: "#027A48",
// },

// ".open": {
// 	background: "#F2F4F7",
// 	textAlign: "center",
// 	padding: "7px",
// 	borderRadius: "20px",
// 	color: "#027A48",
// },

// tr: {
// 	borderBottom: "1px solid #EAECF0",
// },


{/* <table>
					<thead>
						<tr>
							<th>Status</th>
							<th>About</th>
							<th>Users</th>
							<th>License use</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<span className="approve">Approved</span>
							</td>
							<td>
								<h6>Content Curating App</h6>
								<p>Brings all your news into one place</p>
							</td>
							<td>
								<img src={Avatar1} alt="Avatar1" />
							</td>
							<td>
								<img src={Range1} alt="range1" />
							</td>
						</tr>
						<tr>
							<td>
								<span className="open">Open</span>
							</td>
							<td>
								<h6>Content Curating App</h6>
								<p>Brings all your news into one place</p>
							</td>
							<td>
								<img src={Avatar2} alt="Avatar1" />
							</td>
							<td>
								<img src={Range2} alt="range1" />
							</td>
						</tr>
						<tr>
							<td>
								<span className="approve">Approved</span>
							</td>
							<td>
								<h6>Content Curating App</h6>
								<p>Brings all your news into one place</p>
							</td>
							<td>
								<img src={Avatar3} alt="Avatar1" />
							</td>
							<td>
								<img src={Range3} alt="range1" />
							</td>
						</tr>
						<tr>
							<td>
								<span className="approve">Approved</span>
							</td>
							<td>
								<h6>Content Curating App</h6>
								<p>Brings all your news into one place</p>
							</td>
							<td>
								<img src={Avatar4} alt="Avatar1" />
							</td>
							<td>
								<img src={Range4} alt="range1" />
							</td>
						</tr>
						<tr>
							<td>
								<span className="open">Open</span>
							</td>
							<td>
								<h6>Content Curating App</h6>
								<p>Brings all your news into one place</p>
							</td>
							<td>
								<img src={Avatar5} alt="Avatar1" />
							</td>
							<td>
								<img src={Range5} alt="range1" />
							</td>
						</tr>
						<tr>
							<td>
								<span className="approve">Approved</span>
							</td>
							<td>
								<h6>Content Curating App</h6>
								<p>Brings all your news into one place</p>
							</td>
							<td>
								<img src={Avatar6} alt="Avatar1" />
							</td>
							<td>
								<img src={Range6} alt="range1" />
							</td>
						</tr>
						<tr>
							<td>
								<span className="approve">Approved</span>
							</td>
							<td>
								<h6>Content Curating App</h6>
								<p>Brings all your news into one place</p>
							</td>
							<td>
								<img src={Avatar7} alt="Avatar1" />
							</td>
							<td>
								<img src={Range7} alt="range1" />
							</td>
						</tr>
						<tr>
							<td>
								<span className="approve">Approved</span>
							</td>
							<td>
								<h6>Content Curating App</h6>
								<p>Brings all your news into one place</p>
							</td>
							<td>
								<img src={Avatar7} alt="Avatar1" />
							</td>
							<td>
								<img src={Range7} alt="range1" />
							</td>
						</tr>
						<tr>
							<td>
								<span className="approve">Approved</span>
							</td>
							<td>
								<h6>Content Curating App</h6>
								<p>Brings all your news into one place</p>
							</td>
							<td>
								<img src={Avatar7} alt="Avatar1" />
							</td>
							<td>
								<img src={Range7} alt="range1" />
							</td>
						</tr>
						<tr>
							<td>
								<span className="approve">Approved</span>
							</td>
							<td>
								<h6>Content Curating App</h6>
								<p>Brings all your news into one place</p>
							</td>
							<td>
								<img src={Avatar7} alt="Avatar1" />
							</td>
							<td>
								<img src={Range7} alt="range1" />
							</td>
						</tr>
						<tr>
							<td>
								<span className="approve">Approved</span>
							</td>
							<td>
								<h6>Content Curating App</h6>
								<p>Brings all your news into one place</p>
							</td>
							<td>
								<img src={Avatar7} alt="Avatar1" />
							</td>
							<td>
								<img src={Range7} alt="range1" />
							</td>
						</tr>
						<tr>
							<td>
								<span className="approve">Approved</span>
							</td>
							<td>
								<h6>Content Curating App</h6>
								<p>Brings all your news into one place</p>
							</td>
							<td>
								<img src={Avatar7} alt="Avatar1" />
							</td>
							<td>
								<img src={Range7} alt="range1" />
							</td>
						</tr>
						<tr>
							<td>Previous</td>
							<td></td>
							<td></td>
							<td>Page 1 of 10</td>
						</tr>
					</tbody>
				</table> */}