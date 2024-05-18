import React, { useRef } from "react";
import {motion, useScroll, useTransform} from "framer-motion"

const Scrolls = ({targetRef}) => {
  const {scrollYProgress} = useScroll({target:targetRef})

  const x = useTransform(scrollYProgress,[0,0.36],["-6%","-70%"])

  const P1y = useTransform(scrollYProgress,[0,0.05],[-1,0])
  const P1s = useTransform(scrollYProgress,[0,0.06],[0.85,1])
  const P2o = useTransform(scrollYProgress,[0,0.06],[0.6,1])
  const P2y = useTransform(scrollYProgress,[0,0.06],[120,0])
  const P3s = useTransform(scrollYProgress,[0,0.06],[1.5,1])
  const P3y = useTransform(scrollYProgress,[0,0.06],[120,0])



  return (
    <section className="relative h-fit overflow-hidden">
      <div className=" flex items-center overflow-hidden">
        <motion.div initial={{opacity:0}} animate={{opacity:1,}} transition={{duration:1,delay:0.1}} style={{x,scale:P1s,y:P1y}} className="flex *:rounded-lg space-x-6 *:-z-10">
          <motion.div initial={{x:-25}} animate={{x:0}} transition={{duration:1,delay:0.1}} className='w-[40vw] -translate-y- bg-[url("https://source.unsplash.com/random/career")] '>
            <p>Phone 1</p>
          </motion.div>

          <motion.div style={{opacity:P2o,y:P2y}} className='w-[40vw] h-96 bg-[url("https://source.unsplash.com/random/career")] '>
            <p>Phone 2</p>
          </motion.div>

          <motion.div initial={{x:20}} animate={{x:0}} transition={{duration:1,delay:0.1}} style={{scale:P3s,y:P3y}} className='w-[60vw] h-96 bg-[url("https://source.unsplash.com/random/car")] '>
            <p>Phone 3</p>
          </motion.div>

          <motion.div style={{}} className='w-[40vw] h-96 bg-[url("https://source.unsplash.com/random/kiss")] '>
            <p>Phone 4</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Scrolls;
