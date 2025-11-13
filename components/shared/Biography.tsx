import React from 'react'

import Image from 'next/image'

const Biography = ({ image, text, orientation, title }: { image: string, text: string, orientation: 'img-left' | 'img-right', title: string }) => {
    return (
        <>
            <div className="hidden lg:grid grid-cols-2">

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
                            <p className='mt-8' style={{ fontSize: 'calc(2px + (20 - 2) * ((100vw - 300px) / (1600 - 300)))' }}>{text}</p>
                        </div>
                    </>
                )}

                {orientation === 'img-right' && (
                    <>

                        <div className='p-10 overflow-hidden'>
                            <h2 className='text-2xl font-bold'>{title}</h2>
                            <p className='mt-8' style={{ fontSize: 'calc(2px + (20 - 2) * ((100vw - 300px) / (1600 - 300)))' }}>{text}</p>
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

            <div className="lg:hidden grid grid-cols-1">


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
                    <p className='mt-8' style={{ fontSize: 'calc(10px + (20 - 10) * ((100vw - 100px) / (1600 - 100)))' }}>{text}</p>
                </div>



            </div>

        </>
    )
}

export default Biography