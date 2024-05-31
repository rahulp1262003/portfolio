import React from 'react'

import { motion } from 'framer-motion';

export function Ancors({itemStart}) {
  return (
    <div className={`flex max-md:flex-col max-md:text-3xl max-md:font-semibold font-poppins ${itemStart} justify-center items-center text-white transition-all duration-100 delay-200 gap-[1rem] max-md:gap-0 `}>

      <motion.a whileHover={{scale:1.3}} whileTap={{ scale: 0.8 }}
        className='p-2 ' href="#">Home</motion.a>
      <motion.a whileHover={{scale:1.3}} whileTap={{ scale: 0.8 }}
        className='p-2' href="#">About</motion.a>
      <motion.a whileHover={{scale:1.3}} whileTap={{ scale: 0.8 }}
        className='p-2' href="#">Projects</motion.a>
      <motion.a whileHover={{scale:1.3}} whileTap={{ scale: 0.8 }}
        className='p-2' href="#">Skills</motion.a>
      <motion.a whileHover={{scale:1.3}} whileTap={{ scale: 0.8 }}
        className='p-2' href="#">Contact</motion.a>

    </div>
  )
}

export function Button({ block, hide, itemStart }) {
  return (
    <>
      <motion.a
        whileTap={{ scale: 0.8 }}
        href="#" className={`${block} ${hide} ${itemStart} flex justify-center items-start py-[.4rem] px-[.8rem] text-center bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg font-semibold font-poppins max-md:my-4 ml-2`}>Hire me</motion.a>
    </>
  )
}
