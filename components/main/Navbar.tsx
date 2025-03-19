import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { RxLinkedinLogo } from 'react-icons/rx'

export const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10]'>
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>      
        <a href="#about-us" className='h-auto w-auto flex flex-row items-center'>
            <Image
                src='/Vireon logo.png'
                alt='logo'
                width={70}
                height={70}
                className='cursor-pointer hower:animate-slowspin'
            />

            <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                Vireon
            </span>
        </a>

        <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
            <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
        <a href="#about-uss" className='cursor-pointer'>About Us</a>
        <a href="#skills" className='cursor-pointer'>AI Bots</a>
        <a href="#projects" className='cursor-pointer'>Projects</a>
        <a href="#kontakt" className='cursor-pointer'>Contact Us</a>
            </div>
        </div>

        <div className='flex flex-row gap-5'>
            {Socials.map((social) => (
            <a href={social.link} target="_blank" rel="noopener noreferrer" key={social.name}>
                <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                />
            </a>
            ))}
        </div>

            </div>
    </div>
  )
}
