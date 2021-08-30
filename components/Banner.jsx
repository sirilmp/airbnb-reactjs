import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[670px] xl:h-[770] 2xl:h-[860] '>
            <Image 
            src="/banner.webp"
            layout='fill'
            objectFit='cover'
            />
            <div className='absolute top-1/2 w-full flex justify-center items-center flex-col'>
                <p className='text-sm sm:text-lg font-semibold'>Not sure where to go? Perfect.</p>
                <div className='bg-white rounded-full shadow-md hover:shadow-xl my-3 active:scale-90 transition duration-150 py-4 px-12 max-w-[200px] cursor-pointer'><a className='gradient-text font-bold' href="#">I'm flexible</a></div>
            </div>
        </div>
    )
}

export default Banner
