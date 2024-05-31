import React from 'react'
import { motion } from 'framer-motion';

function Herosection() {
  return (
    <section className='w-full h-screen bg-black '>
      {/* main div */}
      <div className="w-full h-screen p-4 flex justify-center items-center flex-row">

        {/* part-1 */}
        <div className='w-full flex justify-center items-center text-white'>
          <div className='flex justify-center items-start flex-col'>
            <span className='font-poppins text-3xl font-semibold text-blue-500'>I'm</span>
            <motion.span
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              className='font-poppins text-[5rem] font-semibold italic bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text text-transparent animate-text cursor-pointer'>
              Devloper
            </motion.span>
          </div>

        </div>

        {/* part-2 */}
        
        
      </div>
    </section>
  )
}

export default Herosection