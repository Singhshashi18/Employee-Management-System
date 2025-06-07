import React from 'react'

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className='h-[55%] w-full flex items-center justify-start 
    gap-6  py-5 mt-10 flex-nowrap overflow-x-auto'>
      <div className=' flex-shrink-0 h-full w-[300px] p-5  bg-red-400 rounded-xl'>

        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600  text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>7 march 2025</h4>
        </div>
     <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
     <p className='text-md mt-2'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Veritatis, doloribus iusto animi quisquam soluta ex.
     </p>
      </div>
      
      <div className=' flex-shrink-0 h-full w-[300px] p-5  bg-green-400 rounded-xl'>

<div className='flex justify-between items-center'>
    <h3 className='bg-red-600  text-sm px-3 py-1 rounded'>High</h3>
    <h4 className='text-sm'>7 march 2025</h4>
</div>
<h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
<p className='text-md mt-2'>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Veritatis, doloribus iusto animi quisquam soluta ex.
</p>
</div>

<div className=' flex-shrink-0 h-full w-[300px] p-5  bg-blue-400 rounded-xl'>

        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600  text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>7 march 2025</h4>
        </div>
     <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
     <p className='text-md mt-2'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Veritatis, doloribus iusto animi quisquam soluta ex.
     </p>
      </div>
      
      <div className=' flex-shrink-0 h-full w-[300px] p-5  bg-yellow-400 rounded-xl'>

<div className='flex justify-between items-center'>
    <h3 className='bg-red-600  text-sm px-3 py-1 rounded'>High</h3>
    <h4 className='text-sm'>7 march 2025</h4>
</div>
<h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
<p className='text-md mt-2'>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Veritatis, doloribus iusto animi quisquam soluta ex.
</p>
</div>



    </div>
  )
}

export default TaskList
