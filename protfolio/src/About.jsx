import React from 'react'

function About() {
    return (
        <>
            <section>

                <div className='relative text-blcak flex justify-center items-center'>
                    <span className='number absolute top-[3rem] left-[5rem] font-poppins text-[7rem] font-semibold text-white'>01</span>
                </div>
                <div className='w-full h-screen flex justify-around items-center  bg-black' >
                    <div className='w-[30rem] h-[30rem] bg-zinc-900 flex justify-around items-center rounded-[4rem]' >
                        <div className='w-[29rem] h-[29rem] bg-zinc-950 flex justify-center items-start flex-col rounded-[3.5rem] text-white px-8' >
                            <span className='text-[3rem] font-poppins'>HI</span>

                            <span className='text-[3rem] font-poppins font-semibold'>I am <span className='bg-gradient-to-r from-zinc-900 via-violet-600 to-zinc-900  bg-clip-text text-transparent animate-text'>RAHUL</span> </span>

                            <span className='text-[1.5rem] font-medium' >As a <span className='bg-gradient-to-r from-pink-500 via-violet-600 to-red-500  bg-clip-text text-transparent animate-text font-bold ' >Frontend Developer</span> </span>

                            <span className='py-4'>I’m a Web Developer with extensive experience for 4 years. My expertise is to create and Website design and many more...</span>
                        </div>
                    </div>
                    <div className='w-[30rem] h-[30rem] bg-zinc-950 rounded-[50%]' ></div>
                </div>
            </section>
        </>
    )
}

export default About