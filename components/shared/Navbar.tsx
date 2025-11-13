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

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {

    const iconsSize = 25
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <>
            <NavigationMenu className="hidden md:flex w-full h-[150px] max-w-none justify-between bg-neutral-900 px-16">
                <NavigationMenuList className='flex gap-8'>
                    <NavigationMenuItem className='flex-shrink-0'>
                        <NavigationMenuLink>
                            <Image src={'/logo.PNG'} alt='logo' width={150} height={150} />
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink>INÍCIO</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>SOBRE</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>CONTATO</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>

                <NavigationMenuList className='flex gap-2'>
                    <NavigationMenuItem className='flex-shrink-0'>

                        <Link href="https://www.instagram.com/ecleziasthe/" target='_blank'>
                            <img
                                src="/icons/instagram.svg"
                                alt="Instagram"
                                width={iconsSize}
                                height={iconsSize}
                            />
                        </Link>

                    </NavigationMenuItem>
                    <NavigationMenuItem className='flex-shrink-0'>

                        <Link href="https://www.facebook.com/ecleziasthe/" target='_blank'>
                            <img
                                src="/icons/facebook.svg"
                                alt="Facebook"
                                width={iconsSize}
                                height={iconsSize}
                            />
                        </Link>

                    </NavigationMenuItem>
                    <NavigationMenuItem className='flex-shrink-0'>

                        <Link href="https://open.spotify.com/artist/15pwfW0zij0q420DXAIPBZ" target='_blank'>
                            <img
                                src="/icons/spotify.svg"
                                alt="Spotify"
                                width={iconsSize}
                                height={iconsSize}
                            />
                        </Link>

                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

            <div className='md:hidden flex w-full h-[130px] justify-between px-8 align-center'>

                <div className='relative w-[100px] h-[100px] flex-shrink-0'>
                <Image src={'/logo.PNG'} alt='logo' fill className='object-contain object-center' />
                </div>
                <Sheet>
                    <SheetTrigger className='flex-shrink-0'>
                        <img
                            src="/icons/menu.svg"
                            alt="Spotify"
                            width={30}
                            height={30}
                        />
                    </SheetTrigger>
                    <SheetContent className='border-neutral-700'>

                        <SheetHeader>
                            <Image src={'/logo.PNG'} alt='logo' width={150} height={150} className='flex-shrink-0' />
                        </SheetHeader>

                        <div className='px-10 flex flex-col gap-4'>

                        <p className='text-white text-2xl font-bold'>INÍCIO</p>
                        <p className='text-white text-2xl font-bold'>SOBRE</p>
                        <p className='text-white text-2xl font-bold'>CONTATO</p>

                        <div className='flex gap-2 mt-16'>
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
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>

    )
}

export default Navbar