import { Link } from 'react-router-dom'
import { styled } from "@mui/material";
import LandingOrg from '../components/organisms/landing/landingOrg'

const HomeWrapper = styled("div")(() => ({
  width: '100%',
  height: '100vh',
}))

const Home = () => {
  return (
    <HomeWrapper>
      <LandingOrg />
    </HomeWrapper>
  )
}

export default Home