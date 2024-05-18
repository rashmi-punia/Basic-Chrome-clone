import { useScroll, useTransform,motion } from 'framer-motion'
import React from 'react'
import { FaPerson } from "react-icons/fa6";


const Circles = ({targetRef2}) => {

    const {scrollYProgress} = useScroll({target:targetRef2})

    const x= useTransform(scrollYProgress,[0,1],[200,-90])
    const y= useTransform(scrollYProgress,[0,1],[100,45])

    const x2= useTransform(scrollYProgress,[0,1],[100,-250])
    const y2= useTransform(scrollYProgress,[0,1],[80,-90])

    const o= useTransform(scrollYProgress,[0,0.6],[0,1])



  return (
    <>
    <div className='flex verflow-hidden -mt-14 items-start px-16 *:px-4 justify-between'>
      <div className='-mt-12 w-1/2  *:mt-10'> <p className="text-5xl text-wrap capitalize font-bold ">
        extend your <br/> experience
        </p>
        <p className='text-wrap'>
        From shopping and entertainment to productivity, find extensions to improve your experience in the Chrome Web Store.
        </p>
        <button className='bg-blue-200 p-3 rounded-full'>Explore extention</button>
        <motion.div style={{x:x2,y:y2 ,opacity:o}}>
      <FaPerson className='size-16 float-right bg-blue-200 p-2 rounded-full text-white' />

        </motion.div>
        </div>
        <motion.div style={{x,y,opacity:o}}>
      <FaPerson   className='size-16 bg-blue-200 p-2 rounded-full text-white' />

        </motion.div>

      <div className='w-[40vw] bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden h-[55vh] bg-[url("https://source.unsplash.com/random/world")] '></div>
    </div>

    </>
  )
}

export default Circles
