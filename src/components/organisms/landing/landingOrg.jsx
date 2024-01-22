import { styled } from "@mui/material";
import { createContext, useState, useEffect } from 'react';
import HeroBoard from "../../molecules/landing/hero-board";
import Management from "../../molecules/landing/section3";
import Features from "../../molecules/landing/section4";
import Users from "../../molecules/landing/section5";
import Premium from "../../molecules/landing/section6";
import Faq from "../../molecules/landing/section7";
import NewsLetter from "../../molecules/landing/section8";
import Footer from "../../molecules/landing/footer";
import BGSchedule from "../../../assets/password/bg-schedule.webp"
import "./schedule.css"

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

export const ThemeContext = createContext();

const LandingOrg = () => {
	const [scheduleToggle, setScheduleToggle] = useState(false)

	useEffect(() => {
		if (scheduleToggle) {
			document.body.style.overflow = "hidden"
		}else {
			document.body.style.overflow = "auto"
		}

	}, [scheduleToggle])

	return (
		<LandingOrgWrapper>
			<ThemeContext.Provider value={{setScheduleToggle: setScheduleToggle, scheduleToggle: scheduleToggle}}>
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
			</ThemeContext.Provider>
				<div className={scheduleToggle ? "schedule-bg active" : "schedule-bg"}>
					<div className="inner">
						<span onClick={() => setScheduleToggle(false)} className="material-symbols-outlined">cancel</span>
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
