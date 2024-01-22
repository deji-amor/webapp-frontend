import NavLinks from "../components/molecules/landing/navlinks";
import Footer from "../components/molecules/landing/footer"
import TermsImg from "../assets/password/terms.webp";
import "./privacy-terms.css";
import {useEffect} from "react";

const TermsPage = () => {

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
                    <h1 className="term-title">TERMS AND CONDITIONS</h1>
                    <div className="content">
                        <div className="terms-content">
                            <h4>Terms and Conditions</h4>
                            <p className="terms-desc">Welcome to ProjectInfo!</p>
                            <p className="terms-desc">These terms and conditions outline the rules and regulations for the use of ProjectInfo product, located at [https://projectinfo.io/]</p>
                            <p className="terms-desc last">By accessing this application, we assume you accept these terms and conditions. Do not continue to use the website if you do not agree to take all of the terms and conditions stated on this page.</p>

                            
                        </div>
                        <div className="terms-content">
                                <h4>Terminologies</h4>
                                <p className="terms-desc">{'The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of the United States.'}</p>
                            </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TermsPage