import React from 'react'
import THead1 from '../../components/atoms/Tickets/Typography/Headers/TicketHeading'
import Button from '../../components/atoms/Tickets/Button/TBut1'

const Tickets = () => {
	return (
		<div>
			<THead1>Heading</THead1>
			<Button size="medium" intent="primary">Hey</Button>
			<hr />
			<Button size="small" intent="secondary">Hey</Button>
		</div>
	)
}

export default Tickets