import React from 'react'
import StatsCard from '../../molecules/Dashboard/StatsCard'

const StatsCardGroup = () => {
  const data1 = [
    { name: 'Group A', value: 400, color: "#5057E5"},
    { name: 'Group B', value: 300, color: "#CED0F0"},
  ];
  const data2 = [
    { name: 'Group C', value: 400, color: "#9265E5"},
    { name: 'Group D', value: 300, color: "#CED0F0"},
  ];
  const data3 = [
    { name: 'Group E', value: 400, color: "#0088FE"},
    { name: 'Group F', value: 300, color: "#00C49F"},
  ];

  return (
    <div className='flex gap-[1.8rem] justify-between'>
      <div className='grow'>
        <StatsCard data={data1} backgroundColor={"#B8BAE5"}/>
      </div>
      <div className='grow'>
        <StatsCard data={data2} backgroundColor={"#C8B8E5"}/>
      </div>
      <div className='grow'>
        <StatsCard data={data3} backgroundColor={"#CEE8F5"}/>
      </div>
    </div>
  )
}

export default StatsCardGroup