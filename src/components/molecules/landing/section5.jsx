import { styled, useMediaQuery } from "@mui/material";
import Header from "../../atoms/landing/headings";
import Hear from "../../atoms/landing/hear";
import CEO1 from "../../../assets/password/ceo1.png";
import CEO2 from "../../../assets/password/ceo2.png";
import CEO3 from "../../../assets/password/ceo3.png";
import CEO4 from "../../../assets/password/ceo4.png";
import CEO5 from "../../../assets/password/ceo5.png";
import CEO6 from "../../../assets/password/ceo6.png";

const HearWrapper = styled("div")(({ width }) => ({
	width: "100%",
	position: "relative",
	margin: "auto",
	display: "flex",
	flexDirection: "column",
	gap: "64px",

    ".users": {
        width: "90%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        gap: "25px",
    }
}));

const Users = () => {
	return (
		<HearWrapper>
			<Header
				title="Hear From Our Users"
				description="Don’t just take our word for it - here’s what our customers have to say:"
			/>

			<div className="users">
				<Hear
					description="“Our IT operations have never been smoother since we started using ProjectInfo IT Service Management web app. It’s a game-changer!.”"
					img={CEO1}
					name="Guy Hawkins"
					position="CEO, Armitage"
				/>
                <Hear
					description="“ProjectInfo web app has helped us save time and money. We couldn’t be happier with the results!”"
					img={CEO2}
					name="Esther Howard"
					position="PM, Acers "
				/>
                <Hear
					description="“The attention to detail applied to the ProjectInfo field management tool is second to none, the impact the application has made to our day to day operations within our IT Service department is simply remarkable.”"
					img={CEO3}
					name="Leslie Alexander"
					position="Product Manager, Texcap "
				/>
                {/* <Hear
					description="“We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.”"
					img={CEO4}
					name="Arlene McCoy"
					position="Founder, WeOwnService"
				/>
                <Hear
					description="“We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.”"
					img={CEO5}
					name="Jacob Jones"
					position="CEO, JustPM"
				/>
                <Hear
					description="“We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.”"
					img={CEO6}
					name="Devon Lane"
					position="CSM Manager, Deloxxe "
				/> */}
			</div>
		</HearWrapper>
	);
};

export default Users;
