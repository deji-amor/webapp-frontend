import { styled } from "@mui/material";
import LandingOrg from '../components/organisms/landing/landingOrg'
import { useEffect } from 'react';
import { useSelector } from "react-redux";

const HomeWrapper = styled("div")(() => ({
  width: '100%',
  height: '100vh',
}))

const Home = () => {
  const { scheduleToggle } = useSelector(state => state.forgotPassword)

  useEffect(() => {
		if (scheduleToggle) {
			document.body.style.overflow = "hidden"
		}else {
			document.body.style.overflow = "auto"
		}

	}, [scheduleToggle])

  return (
    <HomeWrapper>
        <LandingOrg />
    </HomeWrapper>
  )
}

export default Home