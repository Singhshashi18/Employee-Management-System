import React from 'react'
import Header from '../others/Header'
import TaskListNum from '../others/TaskListNum'
import TaskList from '../Tasklist/TaskList'

const EmpDashboard = ({ data }) => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header data={data}/>
      <TaskListNum data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmpDashboard
