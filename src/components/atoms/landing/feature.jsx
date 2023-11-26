import { styled } from "@mui/material";
import PropTypes from "prop-types";
import CommentImage from "../../../assets/password/comment.png"


const FeatureWrapper = styled("div")(({color, background, color2, shadow}) => ({
    width: "296px",
    height: "317px",
    margin: "20px 0",
    border: "1px solid #4C6FFF",
    background: "#ffffff",
    borderRadius: "8px",
    padding: "20px 20px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: "30px",
    boxShadow: shadow,

    ".commentContainer": {
        width: "56px",
        height: "56px",
        textAlign: "center",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(80, 87, 229, 0.12)",
    },

    ":hover": {
        background: background,
    },

    ":hover .commentContainer": {
        background: "#fff",
    },

    img: {
        width: "24px",
        height: "24px",
        color: "#fff"
    },

    h3: {
        width: "100%",
        fontSize: "20px",
        fontFamily: "Poppins",
        fontWeight: "600",
        lineHeight: "125%",
        letterSpacing: ".08%",
        color: "#2B2E72"
    },

    ":hover h3": {
        color: color,
    },

    p: {
        width: "100%",
        fontSize: "16px",
        fontFamily: "Poppins",
        fontWeight: "400",
        lineHeight: "20px",
        letterSpacing: ".5%",
        color: "#78787F"
    },

    ":hover p": {
        color: color2,
    },
}))

const Feature = ({color, color2, background, title, description, shadow}) => {
  return (
    <FeatureWrapper color={color} background={background} color2={color2} shadow={shadow}>
        <div className="commentContainer">
            <img src={CommentImage} alt="Comment" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </FeatureWrapper>
  )
}

Feature.propTypes = {
    color: PropTypes.string,
    background: PropTypes.string,
    title: PropTypes.string,
    color2: PropTypes.string,
    shadow: PropTypes.string,
    description: PropTypes.string,
}

export default Feature