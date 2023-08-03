import { styled } from "@mui/material";
import PropTypes from "prop-types";


const HeadingWrapper = styled("div")(({width}) => ({
    width: "80%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",

    h2: {
        width: width ? width : "312px",
        color: "#2B2E72",
        fontFamily: "Poppins",
        fontSize: "48px",
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: "120%",
        letterSpacing: ".24px"
    },

    p: {
        width: "400px",
        color: "#78787F",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: "125%",
        letterSpacing: ".08px",
        position: "relative",
        top: "30px",
        right: "100px"
    }
}))

const Header = ({title, description, width}) => {
  return (
    <HeadingWrapper width={width}>
        <h2>{title}</h2>
        <p>{description}</p>
    </HeadingWrapper>
  )
}

Header.propTypes = {
    width: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Header