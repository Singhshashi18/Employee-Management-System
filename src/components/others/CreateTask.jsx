import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded '>
        <form className='flex flex-wrap  w-full items-start justify-between'>

          <div className='w-1/2'>

          <div>          
              <h3 className='text-lg text-gray-300'>Task Title</h3>
          <input  className='text-sm py-1 px-2 w-4/5 rounded 
          outline-none bg-transparent border-[1px] border-gray-400' type='text' placeholder='make a UI design'/>
          </div>


          <div>
<h3 className='text-lg text-gray-300  '>Date</h3>
<input   className='text-sm py-1 px-2 w-4/5 rounded 
          outline-none bg-transparent border-[1px] border-gray-400' type='date'/>
</div>
       
       <div>
       <h3 className='text-lg text-gray-300'>Assign to</h3>
       <input className='text-sm py-1 px-2 w-4/5 rounded 
          outline-none bg-transparent border-[1px] border-gray-400' type='text' placeholder='employee name'/>
       </div>

            <div>
            <h3 className='text-lg text-gray-300'>Category</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded 
            outline-none bg-transparent border-[1px] border-gray-400 ' type='text'placeholder='design,dev,etc'/>
            </div>

          </div>


            <div className='w-2/5 flex flex-col items-start rounded-lg shadow-lg '>
            <h3 className='text-lg text-gray-300'>Description</h3>
            <textarea className='w-full h-44 text-sm py-2 px-4 
            rounded outline-none  border-1
            border-l-black ' name="" id=""></textarea>
            
            <button className='w-full mt-4 text-sm rounded px-5 py-3 hover:bg-emerald-600
             bg-emerald-500'>Create Task</button>
             </div>
        </form>
      </div>
  )
}

export default CreateTask
