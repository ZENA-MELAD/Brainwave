import React from 'react'
import GetStartedButton from '../GetStartedButton/GetStartedButton'

const NextProject = ({color,title,font}) => {
  return (
   <div className="flex flex-col justify-center items-center text-center md:w-full md:flex md:flex-row   md:items-start md:text-left ">
        <div className="md:w-3/4">
          <h3 className={`${title} ${font} font-questrial text-lg md:text-xl lg:text-2xl`}>
            Ready to launch your next project?
          </h3>
          <p className={`${color}  mt-4 font-questrial max-w-xs sm:max-w-sm md:max-w-lg xl:w-1/2 text-balance lg:mt-0`}>
            with lots of unique blocks,you can easily build a page without
            coding.build your next landing page.
          </p>
        </div>
        <div className="mt-5 md:mt-0">
          <GetStartedButton />
        </div>
      </div>
  )
}

export default NextProject