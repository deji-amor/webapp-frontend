import { styled } from "@mui/material";
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
				description="We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company"
			/>

			<div className="users">
				<Hear
					description="“We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.”"
					img={CEO1}
					name="Guy Hawkins"
					position="CEO, Armitage"
				/>
                <Hear
					description="“We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.”"
					img={CEO2}
					name="Esther Howard"
					position="PM, Acers "
				/>
                <Hear
					description="“We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.”"
					img={CEO3}
					name="Leslie Alexander"
					position="Product Designer, Texcap "
				/>
                <Hear
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
				/>
			</div>
		</HearWrapper>
	);
};

export default Users;
