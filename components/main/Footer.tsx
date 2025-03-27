import React from 'react'
import{
    RxInstagramLogo,
    RxLinkedinLogo
    
} from 'react-icons/rx';
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[21]'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
            <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>

            <div className='min-w-[200px] h-auto flex flex-col items-center justify-start z-[21]'>
        <div className='font-bold text-[16px] z-[21]'>Social media</div>
            <p className='flex dlex-row items-center my-[15px] cursor-pointer z-[21]'>
                <RxInstagramLogo />
                <a href="https://www.instagram.com/vireonglobal/" target="_blank" rel="noopener noreferrer"><span className='text-[15px] ml-[6px] z-[21]'>Instagram</span></a>
            </p>
            <p className='flex dlex-row items-center my-[15px] cursor-pointer'>
                <RxLinkedinLogo />
                <a href="https://www.linkedin.com/in/flow-site-5a6b46304/" target="_blank" rel="noopener noreferrer"><span className='text-[15px] ml-[6px] z-[21]'>Linked In</span>
                </a>
            </p>
        </div>


                <div id='contact-us' className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px] z-[21]'>Contact Us</div>
                    <p className='flex dlex-row items-center my-[15px] cursor-pointer'>
                        <MdEmail />
                        <span className='text-[15px] ml-[6px] z-[21]'>Email: <a href="mailto:vireonglobal@gmail.com">vireonglobal@gmail.com</a></span>
                    </p>
                </div>
            </div>

            <div className='mb-[20px] text-[15px] text-center z-[21]'>
                &copy; Vireon 2024 Inc.All rights resetved
            </div>

        </div>
    </div>
  )
}
