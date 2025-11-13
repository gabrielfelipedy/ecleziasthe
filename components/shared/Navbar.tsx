"use client"

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const Navbar = () => {

    const iconsSize = 35

    return (

        <NavigationMenu className="w-full max-w-none flex justify-between bg-neutral-900 px-16">
            <NavigationMenuList className='flex gap-14'>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <Image src={'/logo.PNG'} alt='logo' width={200} height={200} />
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink>INÍCIO</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>SOBRE</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>INTEGRANTES</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>CONTATO</NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                    <Link href="https://www.instagram.com/ecleziasthe/" target='_blank'>
                    <img
                        src="/icons/instagram.svg"
                        alt="Instagram"
                        width={iconsSize}
                        height={iconsSize}
                    />
                </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                    <Link href="https://www.facebook.com/ecleziasthe/" target='_blank'>
                    <img
                        src="/icons/facebook.svg"
                        alt="Facebook"
                        width={iconsSize}
                        height={iconsSize}
                    />
                </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                    <Link href="https://open.spotify.com/artist/15pwfW0zij0q420DXAIPBZ" target='_blank'>
                    <img
                        src="/icons/spotify.svg"
                        alt="Spotify"
                        width={iconsSize}
                        height={iconsSize}
                    />
                </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>

    )
}

export default Navbar