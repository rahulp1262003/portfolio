import React from 'react'

function About() {
    return (
        <div className='bg-black'>
            <section className=''>

                <div className='w-full h-screen flex justify-around items-center  bg-black' >
                    <div className='w-[30rem] h-[30rem] max-md:w-[85%] mac-md:h-[70%] bg-zinc-900 flex justify-around items-center rounded-[4rem]' >

                        <div className='w-[29rem] h-[29rem] max-md:w-[97%] bg-zinc-950 flex justify-center items-start flex-col rounded-[3.5rem] text-white px-8 ' >

                            <div className="flex justify-center items-start flex-col ">
                                <span className='text-[3rem] max-md:text-[7vw] font-poppins'>HI</span>

                                <span className='text-[3rem] max-md:text-[9vw] font-poppins font-semibold'>I am <span className='bg-gradient-to-r from-zinc-900 via-violet-600 to-zinc-900  bg-clip-text text-transparent animate-text max-md:text-[9vw] '>RAHUL</span> </span>

                                <span className='text-[1.5rem] font-medium max-md:text-[4vw] ' >As a <span className='bg-gradient-to-r from-pink-500 via-violet-600 to-red-500  bg-clip-text text-transparent animate-text font-bold ' >Frontend Developer</span> </span>

                                <span className='py-4 max-md:text-[3vw] '>I’m a Web Developer with extensive experience for 4 years. My expertise is to create and Website design and many more...</span>
                            </div>
                           
                        </div>
                    </div>
                    <div className='w-[30rem] h-[30rem] bg-zinc-950 max-xl:w-[40vw] max-xl:h-[40vw] max-lg:absolute max-lg:right-[6%] max-lg:w-[30vw] max-lg:h-[30vw] max-lg:bottom-[-37%] rounded-[50%] max-lg:bg-white'></div>
                </div>
            </section>
        </div>
    )
}

export default About