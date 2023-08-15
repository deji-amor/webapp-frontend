import Greeting from '../../components/molecules/Dashboard/Greeting'
import StatsCardGroup from '../../components/organisms/CustomerDashboard/StatsCardGroup'

const CustomerDashboard = () => {
  return (
    <div className='space-y-[1.25rem]'>
      <Greeting />
      <StatsCardGroup />
    </div>
  )
}

export default CustomerDashboard;