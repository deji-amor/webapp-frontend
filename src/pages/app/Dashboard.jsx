import Greeting from '../../components/molecules/Dashboard/Greeting'
// STATS import StatsCardGroup from '../../components/organisms/Dashboard/StatsCardGroup'
import RecentTickets from '../../components/organisms/Dashboard/RecentTickets'
import RecentTicketTable from '../../components/organisms/Dashboard/RecentTicketTable'

const Dashboard = () => {
  return (
    <div className='space-y-[1.25rem]'>
      <Greeting />
      <StatsCardGroup />
      <RecentTickets />
      <RecentTicketTable />
    </div>
  )
}

export default Dashboard;