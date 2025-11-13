import React from 'react'

import Image from 'next/image'

const Biography = ({ image, text, orientation, title }: { image: string, text: string, orientation: 'img-left' | 'img-right', title: string }) => {
    return (
        <div className="grid grid-cols-2">

            {orientation === 'img-left' && (
                <>
                    <div className='relative w-full aspect-[4/3]'>
                        <Image
                            src={image}
                            alt='banner'
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                    <div className='p-10 overflow-hidden'>
                        <h2 className='text-2xl font-bold'>{title}</h2>
                        <p className='mt-8'>{text}</p>
                    </div>
                </>
            )}

            {orientation === 'img-right' && (
                <>

                    <div className='p-10 overflow-hidden'>
                        <h2 className='text-2xl font-bold'>{title}</h2>
                        <p className='mt-8'>{text}</p>
                    </div>

                    <div className='relative w-full aspect-[4/3]'>
                        <Image
                            src={image}
                            alt='banner'
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default Biography