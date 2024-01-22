import React, { useEffect, useMemo } from 'react'
import HistoryItem from './HistoryItem'
import { useSelector } from 'react-redux';
import HistoryItemStatus from './HistoryItemStatus';
import HistoryItemTicketEdit from './HistoryItemTicketEdit';

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
			<HistoryItemStatus />
			<HistoryItemTicketEdit />
			{/* {orderedLogs.map((log) => (
				<HistoryItem key={log.id} log={log}/>
			))} */}
		</div>
	);
}

export default HistoryItemList
