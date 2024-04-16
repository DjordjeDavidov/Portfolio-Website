import React from 'react'
import{
    RxInstagramLogo,
    RxLinkedinLogo
    
} from 'react-icons/rx';
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
            <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>

                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Drustvene mreze</div>
                    <p className='flex dlex-row items-center my-[15px] cursor-pointer'>
                        <RxInstagramLogo />
                        <span className='text-[15px] ml-[6px]'>Instagram</span>
                    </p>
                    <p className='flex dlex-row items-center my-[15px] cursor-pointer'>
                        <RxLinkedinLogo />
                        <span className='text-[15px] ml-[6px]'>Linked In</span>
                    </p>
                </div>
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Kontakt</div>
                    <p className='flex dlex-row items-center my-[15px] cursor-pointer'>
                        <MdEmail />
                        <span className='text-[15px] ml-[6px]'>Email: <a href="mailto:nasaemailadresa@gmail.com">mailto:nasaemailadresa@gmail.com</a></span>
                    </p>
                </div>
            </div>

            <div className='mb-[20px] text-[15px] text-center'>
                &copy; FlowSite 2024 Inc.All rights resetved
            </div>

        </div>
    </div>
  )
}
