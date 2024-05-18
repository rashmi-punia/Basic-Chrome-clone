import { useScroll,useTransform,motion,AnimatePresence, animate} from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Screen = ({targetRef,screen4}) => {

    const [showStep,setShowStep] = useState(1)

    useEffect(()=>{
       const interval= setTimeout(()=>{
       setShowStep(prev => prev==3 ? 1 :prev+1)
    },5000)

        return() => clearTimeout(interval)
    },[showStep])

    const {scrollYProgress} = useScroll({target:targetRef})

    const translateB2 = useTransform(scrollYProgress, [0.8,1], ["47%","-300%"]);

  return (
    <motion.div ref={screen4} style={{y:translateB2}} className='group mx-12 px-6 flex justify-start items-start'>
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}}
     className='flex justify-center rounded-2xl items-center w-[40vw] h-[70vh]  overflow-hidden'>
    <motion.img  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,}}
  className='h-[70vh] w-full object-cover object-center'
  src={`https://source.unsplash.com/random/${
    showStep === 1 ? "watch" : showStep === 2 ? "mountain" : "building"
  }`}
  alt="Random Image"
/>

    </motion.div>

    <Right showStep={showStep}  />

    </motion.div>
  )
}

export default Screen

const Right =({showStep}) => {
return(

    <AnimatePresence>
      <div className='mx-auto px-10 py-14 flex-col justify-between space-y-10'>
<div className='flex space-x-3'>
    <div className='w-2 h-18 relative rounded-full bg-slate-200 overflow-hidden'>

    <motion.span initial={{height:0}}
    animate={showStep === 1 ? {height:"100%"} : {height:0}}
    transition={{duration:4}}
     className={` absolute inset-y-0 bottom-0 left-0 w-2 bg-blue-600 rounded-full`}></motion.span>


    </div>
    <div className='flex-col px-4 w-[30vw]'>
        <div className={`font-semibold text-2xl px-2 ${showStep !==1 ? "border-b-2 border-blue-600 border-spacing-9 rounded-xl px-2" : ""} `}>Customise your chrome </div> 
            <motion.div initial={{opacity:0,y:50}}
            animate={showStep === 1 ? {opacity:1 , y:0} : {opacity:0,y:-10}}
            transition={{duration:1,delay:0.2}}
            className={showStep===1? "block px-2" : "hidden delay-100"}>
             Sign in to Chrome on any device to access your bookmarks, saved passwords and more.</motion.div>

    </div>
    </div>

<div className='flex space-x-3'>
    <div className='w-2 h-18 bg-slate-200 relative rounded-full overflow-hidden'>
    <motion.span initial={{height:0}}
    animate={showStep === 2 ? {height:"100%"} : {height:0}}
    transition={{duration:4}}
     className={` absolute inset-y-0 bottom-0 left-0 w-2 bg-blue-600 rounded-full`}></motion.span>

    </div>
    <div className='flex-col px-4 w-[30vw]'>
    <div className={`font-semibold text-2xl px-2 ${showStep !== 2? "border-b-2 border-blue-600 border-spacing-9 rounded-xl px-2" : ""} `}>Customise your chrome </div> 
 
            <motion.div initial={{opacity:0,y:50}}
            animate={showStep === 2 ? {opacity:1 , y:0} : {opacity:0,y:-10}}
            transition={{duration:1,delay:0.2}}
            className={showStep===2? "block px-2" : "hidden delay-100"}>
             Sign in to Chrome on any device to access your bookmarks, saved passwords and more.</motion.div>
    </div>
    </div>


<div className='flex space-x-3'>
    <div className='w-2 h-18 bg-slate-200 rounded-full relative overflow-hidden'>
    <motion.span initial={{height:0}}
    animate={showStep === 3 ? {height:"100%"} : {height:0}}
    transition={{duration:4}}
     className={` absolute inset-y-0 bottom-0 left-0 w-2 bg-blue-600 rounded-full`}></motion.span>

    </div>
    <div className='flex-col px-4 w-[30vw]'>
    <div className={`font-semibold text-2xl px-2 ${showStep !==3 ? "border-b-2 border-blue-600 border-spacing-9 rounded-xl px-2" : ""} `}>Customise your chrome </div> 

            <motion.div initial={{opacity:0,y:50}}
            animate={showStep === 3 ? {opacity:1 , y:0} : {opacity:0,y:-10}}
            transition={{duration:1,delay:0.2}}
            className={showStep===3? "block px-2" : "hidden delay-100"}>
             Sign in to Chrome on any device to access your bookmarks, saved passwords and more.</motion.div>
    </div>
    </div>
    </div>
    </AnimatePresence>
)
}
