import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress } from "react-icons/si";
import { SiMongodb } from 'react-icons/si'
import { RiFirebaseFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiPython } from 'react-icons/si';
import { SiGooglecloud } from "react-icons/si";


const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className="my-20 text-center text-4xl">Tech
        <span className="text-neutral-500"> Stack</span>
        </h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-7xl ' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className='text-7xl ' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className='text-7xl ' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className='text-7xl ' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className='text-7xl ' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiFirebaseFill className='text-7xl ' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className='text-7xl ' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiGooglecloud className='text-7xl ' />
                </div>
            </div>
    </div>
  )
}

export default Tech