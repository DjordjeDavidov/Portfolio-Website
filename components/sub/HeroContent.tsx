'use client'

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Spline from '@splinetool/react-spline/next';


export const HeroContent = () => {
  return (
    <motion.div id='about-us' initial="hidden" animate="visible" className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div 
        variants={slideInFromTop} 
        className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] rounded-[15px]'
        >
            <SparklesIcon className='text-[#b49bff] mr-[5px] h-5 w-5' />
            <h1  className='Welcome-text text-[13px]'>Artificial intelligence</h1>
        </motion.div>
        <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col text-4xl md:text-7xl font-bold text-white max-w-[600px] w-auto h-auto'
            >
            <span>
                Elevate Customer Interactions with
                <span className='mt-10 mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Cutting-Edge AI Chatbots </span>
            </span>                             
        </motion.div>


 
        <motion.p
            variants={slideInFromLeft(0.8)}
            className='text-lg text-gray-400 my-5 max-w-[600px] md:max-w-none  md:mx-auto'
            >
            Focus on growing your business, and let us transform your customer engagement with intelligent AI chatbots. Together,
             we will elevate your business to new heights!
        </motion.p>

        <motion.a
        variants={slideInFromLeft(1)}
        href='#kontakt'
        className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]' 
        >
            Contact Us
        </motion.a>
        </div>

        <motion.div
            variants={slideInFromRight(0.8)}
            className="w-full h-full flex justify-center items-center hidden md:flex relative"
            >
            <div className="w-[800px] h-[800px] flex items-center -mt-12">
                <Spline scene="https://prod.spline.design/ABUTbgvfbFjkT3ul/scene.splinecode" />
            </div>
        </motion.div>


    </motion.div>
  )
}