import React from 'react'
import Greeting from '../../components/molecules/CustomerDashboard/Greeting'
import Placeholder from '../../components/molecules/general/Placeholder';
import StatsCardGroup from '../../components/organisms/CustomerDashboard/StatsCardGroup'
import CustomerDashboard from '../../components/organisms/CustomerDashboard/CustomerDashboard';

const Dashboard = () => {
  return (
    <div className='space-y-[1.25rem]'>
      <Greeting />
      {/* <StatsCardGroup /> */}
      <CustomerDashboard />
      <Placeholder messageHeader="seems you don’t have anything here yet!" messageParagraph="Once a ticket has been created for you, you will be able to view the data here." />
    </div>
  )
}

export default Dashboard