import Greeting from '../../components/molecules/Dashboard/Greeting'
import Placeholder from '../../components/molecules/general/Placeholder';
import StatsCardGroup from '../../components/organisms/CustomerDashboard/StatsCardGroup'

const CustomerDashboard = () => {
  return (
    <div className='space-y-[1.25rem]'>
      <Greeting />
      <StatsCardGroup />
      <Placeholder messageHeader="seems you don’t have anything here yet!" messageParagraph="Once a ticket has been created for you, you will be able to view the data here." />
    </div>
  )
}

export default CustomerDashboard;