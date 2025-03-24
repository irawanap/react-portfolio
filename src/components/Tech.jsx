import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress } from "react-icons/si";
import { SiMongodb } from 'react-icons/si'
import { RiFirebaseFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import { animate, motion } from 'framer-motion';


const iconVariants = (duration) => ({
    initial :{ y: -10 },
    animate: {
        y: [ 10, -10 ],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});


const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
        whileInView={{ opacity:1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">Tech
        <motion.span 
        whileInView={{ opacity:1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-neutral-500"> Stack</motion.span>
        </motion.h1>
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-5xl ' />
                </motion.div>
                <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className='text-5xl ' />
                </motion.div>
                <motion.div 
                variants={iconVariants(5.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className='text-5xl ' />
                </motion.div>
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className='text-5xl ' />
                </motion.div>
                <motion.div 
                variants={iconVariants(6.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiFirebaseFill className='text-5xl ' />
                </motion.div>
                <motion.div 
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className='text-5xl ' />
                </motion.div>
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiGooglecloud className='text-5xl ' />
                </motion.div>
            </motion.div>
    </div>
  )
}

export default Tech;