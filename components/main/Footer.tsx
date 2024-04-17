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
        <div className='font-bold text-[16px] z-[21]'>Drustvene mreze</div>
            <p className='flex dlex-row items-center my-[15px] cursor-pointer z-[21]'>
                <RxInstagramLogo />
                <a href="https://www.instagram.com/davidov.dj/" target="_blank" rel="noopener noreferrer"><span className='text-[15px] ml-[6px] z-[21]'>Instagram</span></a>
            </p>
            <p className='flex dlex-row items-center my-[15px] cursor-pointer'>
                <RxLinkedinLogo />
                <a href="https://www.linkedin.com/your_linkedin_username" target="_blank" rel="noopener noreferrer"><span className='text-[15px] ml-[6px] z-[21]'>Linked In</span>
                </a>
            </p>
        </div>


                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px] z-[21]'>Kontakt</div>
                    <p className='flex dlex-row items-center my-[15px] cursor-pointer'>
                        <MdEmail />
                        <span className='text-[15px] ml-[6px] z-[21]'>Email: <a href="mailto:nasaemailadresa@gmail.com">nasaemailadresa@gmail.com</a></span>
                    </p>
                </div>
            </div>

            <div className='mb-[20px] text-[15px] text-center z-[21]'>
                &copy; FlowSite 2024 Inc.All rights resetved
            </div>

        </div>
    </div>
  )
}
