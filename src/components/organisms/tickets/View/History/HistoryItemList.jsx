import React from 'react'
import HistoryItem from './HistoryItem'
import { useSelector } from 'react-redux';

const HistoryItemList = () => {
  const { editLogs, ticketData } = useSelector((state) => state.ticketHistory);

  // console.log(editLogs);
  const one = editLogs[0]
  console.log(one);
  const o = JSON.parse(one.old_details)
  const n = JSON.parse(one.new_details)
  console.log({o,n});

  return (
		<div className="space-y-[0.75rem]">
			{editLogs.map((log) => (
				<HistoryItem key={log.id} log={log}/>
			))}
		</div>
	);
}

export default HistoryItemList
