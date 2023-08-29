import React, { useEffect, useMemo } from 'react'
import HistoryItem from './HistoryItem'
import { useSelector } from 'react-redux';

const HistoryItemList = () => {
  const { editLogs, sortByAscending } = useSelector((state) => state.ticketHistory);
  console.log(editLogs);

  const orderedLogs = useMemo(() => {
    let list = editLogs.slice()
    if(!sortByAscending){
      return list.reverse()
    }else {
      return list
    }
  }, [sortByAscending, editLogs])

  return (
		<div className="space-y-[0.75rem]">
			{orderedLogs.map((log) => (
				<HistoryItem key={log.id} log={log}/>
			))}
		</div>
	);
}

export default HistoryItemList
