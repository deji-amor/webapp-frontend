import Greeting from '../../components/molecules/Dashboard/Greeting'
import StatsCardGroup from '../../components/organisms/Dashboard/StatsCardGroup'
import RecentTickets from '../../components/organisms/Dashboard/RecentTickets'
import RecentTicketTable from '../../components/organisms/Dashboard/RecentTicketTable'
import CustomerDashboard from '../customer/CustomerDashboard'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const authUser = useSelector(state => state.authUser.data)
  console.log(authUser);

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