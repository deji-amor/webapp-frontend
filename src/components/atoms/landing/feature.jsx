import { styled } from "@mui/material";
import PropTypes from "prop-types";
import CommentImage from "../../../assets/password/comment.png"


const FeatureWrapper = styled("div")(({color, background, color2, shadow}) => ({
    width: "296px",
    height: "317px",
    margin: "20px 0",
    border: "1px solid #4C6FFF",
    background: background ? background : "#ffffff",
    borderRadius: "8px",
    padding: "20px 20px",
    paddingTop: "50px",
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
        background: color ? color : "rgba(80, 87, 229, 0.12)",
    },

    img: {
        width: "24px",
        height: "24px",
    },

    h3: {
        width: "100%",
        fontSize: "20px",
        fontFamily: "Poppins",
        fontWeight: "600",
        lineHeight: "125%",
        letterSpacing: ".08%",
        color: color ? color : "#2B2E72"
    },

    p: {
        width: "100%",
        fontSize: "16px",
        fontFamily: "Poppins",
        fontWeight: "400",
        lineHeight: "20px",
        letterSpacing: ".5%",
        color: color2 ? color2 : "#78787F"
    }
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