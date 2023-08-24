import React from 'react'
import PropTypes from 'prop-types'
import HistoryTicketMessage from './HistoryTicketMessage'
import HistoryTicketDate from './HistoryTicketDate'
import HistoryTicketValueChange from './HistoryTicketValueChange'

const HistoryItem = props => {
  return (
    <div>
      <HistoryTicketMessage></HistoryTicketMessage>
      <HistoryTicketDate></HistoryTicketDate>
      <HistoryTicketValueChange></HistoryTicketValueChange>
    </div>
  )
}

HistoryItem.propTypes = {}

export default HistoryItem