import Greeting from '../../components/molecules/Dashboard/Greeting'
import StatsCardGroup from '../../components/organisms/Dashboard/StatsCardGroup'
import RecentTicketTable from '../../components/organisms/Dashboard/RecentTicketTable'
import { useSelector } from 'react-redux'
import { Breakdown } from '../../components/organisms/Dashboard/Breakdown'

const Dashboard = () => {
  const authUser = useSelector(state => state.authUser.data)
  console.log(authUser);

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