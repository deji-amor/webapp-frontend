import NavLinks from "../components/molecules/landing/navlinks";
import Footer from "../components/molecules/landing/footer"
import TermsImg from "../assets/password/terms.webp";
import "./privacy-terms.css";
import { useEffect } from "react";

const PrivacyPage = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <>
            <div className="terms-conditions">
                <div className="terms">
                    <NavLinks />
                    <img className="banner" src={TermsImg} alt="Term and Condition" />
                </div>
                <div className="inner">
                    <h1 className="term-title">PRIVACY POLICY</h1>
                    <div className="content">
                        <div className="terms-content">
                            <h4>PRIVACY POLICY</h4>
                            <p className="terms-desc">{'At ProjectInfo, accessible from [https://projectinfo.io/], one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ProjectInfo and how we use it.'}</p>
                            <p className="terms-desc">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at info@projectinfo.com.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PrivacyPage