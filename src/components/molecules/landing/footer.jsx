import {
	features,
	company,
} from "../../atoms/landing/dropdownObjects";
import { Link } from "react-router-dom";
import FooterItem from "../../atoms/landing/footerItem";
import "./board.css"
import Logo from "../../../assets/password/ProjectInfo.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="inner">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                    <p>Copyright 2023</p>
                </div>
                <div className="links">
                    <FooterItem title="features" items={features} type="" to="features" />
                    <FooterItem title="company" items={company} type="navigate" to="features" />
                </div>
            </div>
            <p className="powered">
                Powered by {" "}
                <Link className="solutions" to="https://amorservsolutions.com/" target="_blank">Amorsev Solutions</Link>
            </p>
        </footer>
    )
}

export default Footer;