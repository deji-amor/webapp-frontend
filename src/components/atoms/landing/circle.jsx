import { styled } from "@mui/material";
import PropTypes from "prop-types";


const CircleWrapper = styled("div")(({width, height, top}) => ({
    border: "3px dashed #FEFEFE",
    padding: "20px",
    borderRadius: "50%",
    opacity: ".20",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: "5",
    top: top ? top : "1000px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width ? width: "2280px",
    height: height ? height: "2280px",
}))

const Circle = ({width, height, top}) => {
  return (
    <CircleWrapper width={width} height={height} top={top}>
    </CircleWrapper>
  )
}

Circle.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    top: PropTypes.string,
}

export default Circle