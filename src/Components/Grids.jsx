import React from 'react'
import {motion} from "framer-motion"

const Grids = ({screen2}) => {
  return (
    <div ref={screen2} className="text-center">
      <div className="py-1 px-24 *:p-5">
        <p className="text-5xl leading-relaxed m-10 text-wrap capitalize font-bold ">
        Supercharge your
          <br/>
          browser with {" "}
          <span className="bg-blue-200 text-blue-700 px-8 py-2 rounded-full">
            AI
          </span>{" "}
          built <br/> right in 
        </p>
        <div className="grid grid-cols-2 gap-5">
        <div className='h-[75vh]'>
            <Box />
        </div>
        <div className='h-[65vh]'>
            <Box />
        </div>
        <div className='h-[65vh]'>
            <Box />
        </div>
        <div className='h-[75vh] -translate-y-20'>
            <Box />
        </div>

        </div>
      </div>
    </div>
  )
}

export default Grids

const Box =() =>{
    return(
        <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{duration:0.6}}} className="bg-purple-200 relative group rounded-3xl space-y-12 text-start w-[40vw] h-full flex-col overflow-hidden">
        <div className="p-12 space-y-3">
          <p>Updates</p>
          <h2 className="text-4xl capitalize font-bold">Automatic updates</h2>
          <p>
            There’s a new Chrome release every four weeks, making it easy to have
            the newest features and a faster, safer web browser.
          </p>
          <a>Learn about automatic updates</a>
    
        </div>
          <div className="group-hover:scale-105 transition-all duration-500 rounded-r-xl w-full -translate-x-28 h-full bg-[url('https://source.unsplash.com/random/cr')]"></div>
          <div className='bg-blue-600 group-hover:bg-blue-800 group-hover:scale-105 transition-all duration-500 text-white rounded-full text-center py-3 px-5 text-3xl absolute bottom-4 right-4 z-10'>+</div>
        </motion.div>
    )
}