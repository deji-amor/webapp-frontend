import React from 'react'
import PropTypes from 'prop-types'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RecentTicketTableText from '../../atoms/Dashboard/RecentTicketTableText'

const RecentTicketTableList = props => {
  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <RecentTicketTableText isID={true}>OlA0123</RecentTicketTableText>
      <RecentTicketTableText>Project Request</RecentTicketTableText>
      <RecentTicketTableText>Project Management</RecentTicketTableText>
      <RecentTicketTableText>Nov 26 2022</RecentTicketTableText>
      <RecentTicketTableText>Done <CheckCircleIcon className='text-[green]'/></RecentTicketTableText>
    </tr>
  )
}

RecentTicketTableList.propTypes = {}

export default RecentTicketTableList