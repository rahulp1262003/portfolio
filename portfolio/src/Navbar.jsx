import React, { useState } from 'react'
import { FaCode } from "react-icons/fa6";
import { Ancors, Button } from './Button';



function Navbar() {

    const [isClick, setIsClick] = useState(false);


    return (
        <header>
            <nav className={`w-full ${isClick ? 'max-md:h-[20rem] max-md:item-end max-md:rounded-b-[40px] max-md:p-8 max-md:transition-all  ' : 'max-md:h-4rem max-md:transition-all '} h-[4rem] bg-b p-4 flex justify-around items-center max-md:justify-between max-md:px-8 fixed z-50 bg-black max-md:items-end `}>

                {/* icon */}
                <FaCode className='size-[1.6rem] z-40 text-white text-[1.5rem] font-semibold' />

                {/* buttons */}
                <div className={`ancers flex justify-center items-center  ${isClick ? 'max-md:block' : 'max-md:hidden'}`}>
                    {/* Ancors */}
                    <Ancors show={''} />
                </div>

                {/* special button */}
                <Button hide={'max-md:hidden'} />

                {/* hamburger menu */}
                <div
                    onClick={() => setIsClick(!isClick)}
                    className={`size-8 hamburger flex items-center flex-col justify-evenly md:hidden cursor-pointer `}>
                    <div className={`w-[1.5rem] h-[3px] bg-white rounded-md transition-transform ${isClick && 'transition-transform origin-bottom rotate-[45deg] translate-x-[-1px] translate-y-[5px]'}`}></div>
                    <div className={`w-[1.5rem] h-[3px] bg-white rounded-md transition-transform  ${isClick && 'transition-transform   origin-bottom rotate-[-45deg] translate-x-[1px] translate-y-[-6px]'}`}></div>
                </div>
            </nav>

            {/* menu */}
        </header>

    )
}

export default Navbar
