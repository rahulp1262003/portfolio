import React from 'react'
import { motion  } from 'framer-motion';

function Herosection() {
  return (
    <section className='w-full h-screen bg-black '>
      {/* main div with grid lines */}
      <div className="main-bg w-full h-screen flex justify-center items-center flex-row overflow-hidden">

        {/* for radial-gradient */}
        <div className={`sub-main w-full h-screen flex justify-center items-center p-4 `} >

          {/* part-1 */}
          <div className='max-sm:w-[85vw] max-sm:h-[85vw] w-[28rem] h-[28rem] bg-white/5  flex justify-center items-center text-white rounded-[50%] backdrop-blur-[2px] '>

            <motion.div 
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}

            className='max-sm:w-[80vw] max-sm:h-[80vw] w-[26rem] h-[26rem] flex justify-center items-center text-white rounded-[50%] bg-white/5 cursor-pointer ' >

              <div className='flex justify-center items-start flex-col'>
                <span className='font-poppins max-sm:text-[5vw] text-3xl font-semibold text-blue-500 pl-4'>I'm</span>
                <motion.span
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  className='font-poppins max-sm:text-[15vw] text-[5rem] font-semibold italic bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text text-transparent animate-text cursor-pointer '>
                  Devloper
                </motion.span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection