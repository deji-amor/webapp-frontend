import logoImage from "../../../assets/login/dark.png"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LogoWrapper } from "./wrappers"

const CustomLogo = ({color}) => {
  return (
    <Link to="/">
      <LogoWrapper color={color}>
          <img src={logoImage} alt="Logo" />
          <span>LogoIpsum</span>
      </LogoWrapper>
    </Link>
  )
}

CustomLogo.propTypes = {
  color: PropTypes.string
}

export default CustomLogo