import React, { useState } from 'react'
import { FaCode } from "react-icons/fa6";
import { Ancors, Button } from './Button';
import { motion } from 'framer-motion';

const variants = {
    open: { opacity: 1, x: "0%" },
    closed: { opacity: 0, y: "-400%" },
}

function Navbar() {

    const [isClick, setIsClick] = useState(false);


    return (
        <header>
            <nav className='w-full h-[4rem] bg-black/30 p-4 flex justify-around items-center max-md:justify-between max-md:px-8 fixed z-10 backdrop-blur-sm '>

                {/* icon */}
                <FaCode className='size-[1.6rem] z-40 text-white text-[1.5rem] font-semibold' />

                {/* buttons */}
                <div className="ancers flex justify-center items-center max-md:hidden">
                    {/* Ancors */}
                    <Ancors />
                </div>

                {/* special button */}
                <Button hide={'max-md:hidden'} />

                {/* hamburger menu */}
                <div
                    onClick={() => setIsClick(!isClick)}
                    className={`size-8 hamburger flex items-center flex-col justify-evenly md:hidden cursor-pointer z-10 `}>
                    <div className={`w-[1.5rem] h-[3px] bg-white rounded-md transition-transform ${isClick && 'transition-transform origin-bottom rotate-[45deg] translate-x-[-1px] translate-y-[5px]'}`}></div>
                    <div className={`w-[1.5rem] h-[3px] bg-white rounded-md transition-transform  ${isClick && 'transition-transform   origin-bottom rotate-[-45deg] translate-x-[1px] translate-y-[-6px]'}`}></div>
                </div>
            </nav>

            {/* menu */}
            <motion.div

                className={`md:hidden absolute top-0 pl-[5rem] flex justify-start items-center w-full ${isClick ? 'h-screen ' : 'h-0 transition-all'} bg-zinc-900 overflow-hidden `}>

                <motion.div

                    animate={isClick ? "open" : "closed"}
                    variants={variants}
                    transition={{ type: "spring" }}
                    className={`absolute flex flex-col justify-center items-start  ${isClick ? 'relative top-0 ' : 'relative -top-[15rem] transition-all duration-700  z-40'}`}>

                    {/* Ancors */}
                    <Ancors itemStart={'max-md:items-start'} />

                    {/* buttons */}
                    {isClick && <Button itemStart={'max-md:items-start'} block={isClick ? 'max-md:block' : 'max-md:hidden'} />}

                    <div className=" absolute left-[-15rem] -top-[10rem] size-[18rem] rounded-[50%] bg-purple-600 blur-3xl -z-40"></div>

                    <div className=" absolute right-[-30rem] top-[11rem] size-[18rem] rounded-[50%] bg-pink-700 blur-3xl -z-40"></div>
                </motion.div>

            </motion.div>
        </header>

    )
}

export default Navbar
