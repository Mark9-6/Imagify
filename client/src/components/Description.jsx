import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

function Description() {
  return (
    <motion.div 
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create ai image</h1>
        <p className='text-gray-500 mb-8'>Visualize</p>
        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img className='w-80 xl:w-96 rounded-lg' src={assets.sample_img_1}/>
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>AI Lorem ipsum dolor sit amet consectetur</h2>
                <p className='text-gray-600 mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum temporibus voluptate repudiandae. Iusto voluptate repudiandae id blanditiis quis necessitatibus, iure ipsa quo esse dignissimos, veniam est laborum laudantium excepturi in.</p>
                <p className='text-gray-600 mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum temporibus voluptate repudiandae. Iusto voluptate repudiandae id blanditiis quis necessitatibus, iure ipsa quo esse dignissimos, veniam est laborum laudantium excepturi in.</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Description