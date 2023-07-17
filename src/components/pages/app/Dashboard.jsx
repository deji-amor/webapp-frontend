import React from 'react'
import Greeting from '../../molecules/Dashboard/Greeting'
import StatsCardGroup from '../../organisms/Dashboard/StatsCardGroup'

const Dashboard = () => {
  return (
    <div>
      <Greeting/>
      <StatsCardGroup/>
    </div>
  )
}

export default Dashboard