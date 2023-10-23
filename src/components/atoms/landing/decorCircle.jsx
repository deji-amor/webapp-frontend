import { styled } from "@mui/material";
import PropTypes from "prop-types";

const CirWrapper = styled("div")(({top, left, right, color, filter, zIndex}) => ({
    width: "442px",
    height: "442px",
    background: color ? color : "#D9E0FF",
    filter: filter ? filter : "blur(96.69942474365234px)",
    // --webkit-filter: "blur(96.69942474365234px)",
    borderRadius: "50%",
    position: "absolute",
    zIndex: zIndex ? zIndex : "2",
    top: top,
    left: left,
    right: right,
}))

const DecorCircle = ({top, left, right, color, filter, zIndex}) => {
  return (
    <CirWrapper top={top} left={left} right={right} color={color} filter={filter} zIndex={zIndex}></CirWrapper>
  )
}

DecorCircle.propTypes = {
    top: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    color: PropTypes.string,
    filter: PropTypes.string,
    zIndex: PropTypes.string,
}

export default DecorCircle