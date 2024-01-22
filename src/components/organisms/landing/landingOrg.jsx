import { styled } from "@mui/material";
import HeroBoard from "../../molecules/landing/hero-board";
import Management from "../../molecules/landing/section3";
import Features from "../../molecules/landing/section4";
import Users from "../../molecules/landing/section5";
import Premium from "../../molecules/landing/section6";
import Faq from "../../molecules/landing/section7";
import NewsLetter from "../../molecules/landing/section8";
import Footer from "../../molecules/landing/footer";
import BGSchedule from "../../../assets/password/bg-schedule.webp";
import { useDispatch, useSelector } from "react-redux";
import { SET_SCHEDULE_TOGGLE } from "../../../state-manager/reducers/password/forgotpassword";
import "./schedule.css";

const LandingOrgWrapper = styled("div")(() => ({
	width: "100%",
	overflow: "hidden",
	
  ".cont": {
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    gap: "100px",
  }
}));


const LandingOrg = () => {
	const dispatch = useDispatch()
	const { scheduleToggle } = useSelector(state => state.forgotPassword)

	return (
		<LandingOrgWrapper>
			<HeroBoard />
				<div className="cont">
					<Management />
					<Features />
					<Users />
					<Premium />
					<Faq />
					<NewsLetter />
					<Footer />
				</div>
				<div className={scheduleToggle ? "schedule-bg active" : "schedule-bg"}>
					<div className="inner">
						<span onClick={() => dispatch(SET_SCHEDULE_TOGGLE(false))} className="material-symbols-outlined">cancel</span>
						<img src={BGSchedule} alt="Schedule BG" />
						<div className="schedule" id="schedule">
							<div className="title-desc">
								<h2 className="schedule-title">Let’s Schedule A Discovery Meeting!</h2>
							</div>
							<div className="iframe">
								<iframe
								className="hubspot"
								title="meeting-form"
								src="https://meetings.hubspot.com/adeshola-bello?embed=true"
								frameBorder={"0"}
								></iframe>
							</div>
						</div>
					</div>
				</div>
		</LandingOrgWrapper>
	);
};

export default LandingOrg;
