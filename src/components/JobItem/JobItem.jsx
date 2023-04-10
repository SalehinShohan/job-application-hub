import React from 'react'

const JobItem = ({ job, handleRemoveItem }) => {
  const { name, picture, title, salary, location } = job
  return (
    <li className='flex flex-col py-6 sm:flex-row sm:justify-between'>  
      <div className='flex w-full h-full space-x-2 sm:space-x-4'>
        <img
          className='flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500'
          src={picture}
          alt='Polaroid camera'
        />
        <div className='flex flex-col justify-between w-full pb-4'>
          <div className='flex justify-between w-full pb-2 space-x-2'>
            <div className='space-y-1'>
              <h3 className='text-lg font-semibold leading-snug sm:pr-8'>
                {title}
              </h3>
              <h3 className='text-lg font-semibold leading-snug sm:pr-8'>
                {name}
              </h3>
              <h3 className='text-lg font-semibold leading-snug sm:pr-8'>
                {location}
              </h3>
              <h3 className='text-lg font-semibold leading-snug sm:pr-8'>
                Salary: {salary}
              </h3>
            </div>
            
          </div>
        </div>
      </div>
    </li>
  )
}

export default JobItem
