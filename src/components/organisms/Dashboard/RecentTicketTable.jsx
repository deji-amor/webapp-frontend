import React from 'react'
import RecentTicketTableHeadRow from '../../molecules/Dashboard/RecentTicketTableHeadRow'
import RecentTicketTableList from '../../molecules/Dashboard/RecentTicketTableList'
import RecentTicketTablePagination from '../../molecules/Dashboard/RecentTicketTablePagination'
import { styled } from '@mui/material'

const RecentTicketTable = () => {
  const Wrapper = styled("div")`
  position: relative;
  overflow-x: auto;

  table {
    border-bottom: 1px solid #828282;
    background: #FFF;
    width: 100%;
    text-align: left;
    padding: 0.8rem;
    border-radius: 0.75rem 0.75rem 0rem 0rem;
  }
  `

  return (
    <Wrapper className="">
      <table className="">
        <RecentTicketTableHeadRow/>
        <tbody>
          <RecentTicketTableList/>
          <RecentTicketTableList/>
          <RecentTicketTableList/>
          <RecentTicketTableList/>
          <RecentTicketTableList/>
        </tbody>
      </table>
    </Wrapper>
  )
}

export default RecentTicketTable