import { styled } from "@mui/material";
import DecorCircle from "../../atoms/landing/decorCircle";
import Avatar1 from "../../../assets/password/avatar1.png";
import Range1 from "../../../assets/password/range1.png";
import Avatar2 from "../../../assets/password/avatar2.png";
import Range2 from "../../../assets/password/range2.png";
import Avatar3 from "../../../assets/password/avatar3.png";
import Range3 from "../../../assets/password/range3.png";
import Avatar4 from "../../../assets/password/avatar4.png";
import Range4 from "../../../assets/password/range4.png";
import Avatar5 from "../../../assets/password/avatar5.png";
import Range5 from "../../../assets/password/range5.png";
import Avatar6 from "../../../assets/password/avatar6.png";
import Range6 from "../../../assets/password/range6.png";
import Avatar7 from "../../../assets/password/avatar7.png";
import Range7 from "../../../assets/password/range7.png";

const ManagementWrapper = styled("div")(() => ({
    width: "80%",
    height: "auto",
	position: "relative",
	top: "570px",
	margin: "0 auto",
    display: "flex",
    alignItems: "center",
    
    ".content": {
        width: "416px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        position: "absolute",
        top: "50%",
        transform: "translate(0, 30%)",
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
        lineHeight: "20px",
        letterSpacing: ".5%",
        color: "#78787F",
    },

    ".content button": {
        color: "#ffffff",
        height: "40px",
        borderRadius: "8px",
        cursor: "pointer",
        position: "relative",
        top: "30px",
        zIndex: "20",
        width: "142px",
        background: "linear-gradient(180deg, #9265E5 0%, #412D66 100%)",
    }
}));

const TableWrapper = styled("div")(() => ({
	width: "650px",
	margin: "auto",
	borderRadius: "10px",
	border: "1px solid #EAECF0",
    position: "absolute",
    top: "0",
    right: "0",

	table: {
		width: "100%",
	},

	"table thead tr": {
		height: "33px",
		borderRadius: "10px",
		background: "#F9FAFB",
		textAlign: "left",
		color: "#667085",
	},

	"th, td": {
		fontSize: "12px",
		fontFamily: "inter",
		fontWeight: "500",
		lineHeight: "18px",
	},

	th: {
		paddingLeft: "20px",
	},

	td: {
		padding: "15px",
	},

	h6: {
		fontSize: "14px",
		fontWeight: "400",
		lineHeight: "20px",
		color: "#101828",
	},

	p: {
		color: "#667085",
		fontSize: "12px",
		fontWeight: "400",
		lineHeight: "20px",
	},

	".approve": {
		background: "#ECFDF3",
		textAlign: "center",
		padding: "7px",
		borderRadius: "20px",
		color: "#027A48",
	},

	".open": {
		background: "#F2F4F7",
		textAlign: "center",
		padding: "7px",
		borderRadius: "20px",
		color: "#027A48",
	},

	tr: {
		borderBottom: "1px solid #EAECF0",
	},
}));

const Management = () => {
	return (
		<ManagementWrapper>
            <DecorCircle top="40px" left="-200px" color="rgba(76, 111, 255, 0.12)" filter="blur(120.32733917236328px)" />
			<div className="content">
				<h1>Streamline IT operations with unified management</h1>
				<p>
					Develop a website by finding a product identity that has value and branding to become a
					characteristic of a company. We will also facilitate the business marketing of these
					products with our SEO experts so that they become a ready-to-use website and help sell a
					product from the company.
				</p>
                <button type="button">Try For Free</button>
			</div>
			<TableWrapper>
				<table>
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
				</table>
			</TableWrapper>
			<br />
			<br />
			<br />
			<br />
			<br />
		</ManagementWrapper>
	);
};

export default Management;
