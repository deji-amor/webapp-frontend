import Greeting from '../../components/molecules/CustomerDashboard/Greeting'
import Placeholder from '../../components/molecules/general/Placeholder';
import CustomerStatsCardGroup from '../../components/organisms/CustomerDashboard/CustomerStatsCardGroup';

const Dashboard = () => {
  return (
    <div className='space-y-[1.25rem]'>
      <Greeting />
      <CustomerStatsCardGroup />
      <Placeholder messageHeader="seems you don’t have anything here yet!" messageParagraph="Once a ticket has been created for you, you will be able to view the data here." />
    </div>
  )
}

export default Dashboard;