import { styled } from "@mui/material";
import HeroBoard from '../../molecules/landing/hero-board'
import Organizations from "../../molecules/landing/section2";
import Management from "../../molecules/landing/section3";
import Features from "../../molecules/landing/section4";
import Users from "../../molecules/landing/section5";
import Premium from "../../molecules/landing/section6";
import Faq from "../../molecules/landing/section7";
import NewsLetter from "../../molecules/landing/section8";
import Footer from "../../molecules/landing/section9";

const LandingOrgWrapper = styled("div")(() => ({
}));

const LandingOrg = () => {
  return (
    <LandingOrgWrapper>
        <HeroBoard />
        <Organizations />
        <Management />
        <Features />
        <Users />
        <Premium />
        <Faq />
        <NewsLetter />
        <Footer />
    </LandingOrgWrapper>
  )
}

export default LandingOrg