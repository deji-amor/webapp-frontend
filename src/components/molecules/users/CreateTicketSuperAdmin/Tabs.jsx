import React from 'react'
import Tab from '../../../atoms/users/CreateTicketSuperAdmin/Tab';
import BlueThemedMediumText from '../../../atoms/users/CreateTicketSuperAdmin/BlueThemedMediumText'
import MultiplePathButton from '../../../atoms/users/CreateTicketSuperAdmin/MultiplePathButton'
import AddIcon from "@mui/icons-material/Add";

const Tabs = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex gap-[1.5rem]'>
        <div className=''>
          <Tab isActive>Service Requests</Tab>
        </div>
        <div className=''>
          <Tab>Projects</Tab>
        </div>
      </div>
      <div className=''>
        <MultiplePathButton> <AddIcon/> Add Ticket </MultiplePathButton>
      </div>
    </div>
  )
}

export default Tabs