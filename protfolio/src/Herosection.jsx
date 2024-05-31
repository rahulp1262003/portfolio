import React from 'react'
import { motion  } from 'framer-motion';

function Herosection() {
  return (
    <section className='w-full h-screen bg-black '>
      {/* main div with grid lines */}
      <div className="main-bg w-full h-screen flex justify-center items-center flex-row ">

        {/* for radial-gradient */}
        <div className={`sub-mai w-full h-screen flex justify-center items-center p-4 `} >

          {/* part-1 */}
          <div className='w-[28rem] h-[28rem] bg-white/5  flex justify-center items-center text-white rounded-[50%] backdrop-blur-[2px] '>

            <motion.div 
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}

            className='w-[26rem] h-[26rem] flex justify-center items-center text-white rounded-[50%] bg-white/5 cursor-pointer ' >

              <div className='flex justify-center items-start flex-col'>
                <span className='font-poppins text-3xl font-semibold text-blue-500 '>I'm</span>
                <motion.span
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  className='font-poppins text-[5rem] font-semibold italic bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text text-transparent animate-text cursor-pointer '>
                  Devloper
                </motion.span>
              </div>
            </motion.div>

          </div>
        </div>



        {/* part-2 */}


      </div>
    </section>
  )
}

export default Herosection