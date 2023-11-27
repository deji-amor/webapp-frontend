import logoImage from "../../../assets/login/dark.png"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LogoWrapper } from "./wrappers"

const CustomLogo = ({color, style}) => {
  return (
    <Link to="/">
      <LogoWrapper color={color} style={style}>
          <img src={logoImage} alt="Logo" />
          <span>CUSMITS</span>
      </LogoWrapper>
    </Link>
  )
}

CustomLogo.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
}

export default CustomLogo