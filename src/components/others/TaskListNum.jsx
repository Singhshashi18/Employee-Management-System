import React from 'react'

const TaskListNum = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 '>
      <div className='rounded-xl py-6 px-10 w-[45%] bg-red-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h2 className='text-xl font-medium'>New Task</h2>
      </div>

      <div className='rounded-xl py-6 px-10 w-[45%] bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data?.taskCounts?.completed ?? 0}</h2>
        <h2 className='text-xl font-medium'></h2>
      </div>

      <div className='rounded-xl py-6 px-10 w-[45%] bg-blue-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h2 className='text-xl font-medium'>Accepted Task</h2>
      </div>
      <div className='rounded-xl py-6 px-10 w-[45%] bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h2 className='text-xl font-medium'>Failed Task</h2>
      </div>

    </div>
  )
}

export default TaskListNum
