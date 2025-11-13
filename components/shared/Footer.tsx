import React from 'react'
import Link from 'next/link'
import image from 'next/image'

const Footer = () => {

    const iconsSize = 35

    return (
        <footer className="bg-neutral-950 w-full pt-16 pb-8">
            <h3 className='text-center text-xl'>SIGA-NOS</h3>


            <div className="flex justify-center gap-4 mt-8">
                <Link href="https://www.instagram.com/ecleziasthe/" target='_blank'>
                    <img
                        src="/icons/instagram.svg"
                        alt="Instagram"
                        width={iconsSize}
                        height={iconsSize}
                    />
                </Link>

                <Link href="https://www.facebook.com/ecleziasthe/" target='_blank'>
                    <img
                        src="/icons/facebook.svg"
                        alt="Facebook"
                        width={iconsSize}
                        height={iconsSize}
                    />
                </Link>

                <Link href="https://open.spotify.com/artist/15pwfW0zij0q420DXAIPBZ" target='_blank'>
                    <img
                        src="/icons/spotify.svg"
                        alt="Spotify"
                        width={iconsSize}
                        height={iconsSize}
                    />
                </Link>
            </div>


            <p className='text-center text-sm text-neutral-400 mt-20'>© Todos os direitos reservados - 2025</p>

        </footer>
    )
}

export default Footer