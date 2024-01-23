import React, { useEffect, useMemo } from 'react'
import HistoryItem from './HistoryItem'
import { useSelector } from 'react-redux';
import TicketStatus from './EditType/TicketStatus';
import TicketEdit from "./EditType/TicketEdit"

const HistoryItemList = () => {
  const { editLogs, sortByAscending } = useSelector((state) => state.ticketHistory);

  const orderedLogs = useMemo(() => {
    let list = editLogs.slice()
    if(!sortByAscending){
      return list.reverse()
    }else {
      return list
    }
  }, [sortByAscending, editLogs])

  console.log(editLogs);

  return (
		<div className="space-y-[0.75rem] w-full max-w-full">
			{orderedLogs.map((log) => {
				if (log.edit_type === "ticket-status") {
					return <TicketStatus key={log.id} log={log} />;
				}
				if (log.edit_type === "ticket-edit") {
					return <TicketEdit key={log.id} log={log} />;
				}
			})}
		</div>
	);
}

export default HistoryItemList
