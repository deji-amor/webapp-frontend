import Greeting from '../../components/molecules/Dashboard/Greeting'
import StatsCardGroup from '../../components/organisms/Dashboard/StatsCardGroup'
import RecentTicketTable from '../../components/organisms/Dashboard/RecentTicketTable'
import { Breakdown } from '../../components/organisms/Dashboard/Breakdown'

const Dashboard = () => {

  return (
    <div className='space-y-[1.25rem]'>
      <Greeting />
      <StatsCardGroup />
      <Breakdown />
      <RecentTicketTable />
      
    </div>
  )
}

export default Dashboard;