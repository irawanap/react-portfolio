/* eslint-disable no-unused-vars */
import React from 'react'
import ava from '../assets/aboutPic1.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
import TiltedCard from './TitltedCard/TiltedCard';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
        whileInView={{ opacity:1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>About 
            <motion.span 
            whileInView={{ opacity:1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className='text-neutral-500'> Me</motion.span>    
        </motion.h1>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial= {{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-8"
            >
                <div className="flex items-center justify-center">
                <TiltedCard
                    imageSrc={ava}
                    altText="Irawan Aji - Album Cover"
                    captionText="Irawan Aji"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="">
                        
                        </p>
                    }
                    />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial= {{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
            >
                    <div className="flex justify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-3'>{ABOUT_TEXT}</p>
                    </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About;