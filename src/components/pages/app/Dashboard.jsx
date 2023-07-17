import React from 'react'
import Greeting from '../../molecules/Dashboard/Greeting'
import StatsCardGroup from '../../organisms/Dashboard/StatsCardGroup'
import RecentTickets from '../../organisms/Dashboard/RecentTickets'
import RecentTicketTable from '../../organisms/Dashboard/RecentTicketTable'

const Dashboard = () => {
  return (
    <div className='space-y-[1.25rem]'>
      <Greeting/>
      <StatsCardGroup/>
      <RecentTickets/>
      <RecentTicketTable/>
    </div>
  )
}

export default Dashboard