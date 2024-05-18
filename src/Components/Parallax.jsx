import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Parallax = ({screen3}) => {
  const { scrollYProgress } = useScroll({
target:screen3
  });
  const scale = useTransform(scrollYProgress, [0, 0.1], [1.3, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1,0]);
  const translateY = useTransform(scrollYProgress, [0, 0.3], [-0, 100]);
  const translateBig = useTransform(scrollYProgress, [0, 0.3,0.5], ["-90%", "-160%","-250%"]);
  const translateB = useTransform(scrollYProgress, [0, 0.5,0.6,1], ["0%", "35%","60%","80%"]);
  const translateB1 = useTransform(scrollYProgress, [0.6,0.8], ["0%","-100%"]);
  const BorderRadiusB1 = useTransform(scrollYProgress, [0.6,0.61], [0,12]);

  const translateB2 = useTransform(scrollYProgress, [0.8,1], ["10%","-100%"]);



  return (
    <div ref={screen3} className="text-center h-[200vh]">
      <motion.p
        style={{ scale: scale, y: translateY, opacity: opacity }}
        className="text-5xl leading-relaxed m-10 text-wrap capitalize font-bold "
      >
        make it {""}
        <span className="bg-blue-200 text-blue-700 px-4 py-2 rounded-full">
          yours
        </span>{" "}
        and take <br />
        it with you
      </motion.p>
      <div className="flex-col">
      <motion.div style={{y:translateB}}  className="bg-red-20 *:rounded-2xl overflow-hidden">
        <motion.div style={{y:translateB1 ,borderRadius:BorderRadiusB1}}  className='w-[60vw] relative bg-cover bg-center bg-no-repeat h-[80vh] mx-auto bg-[url("https://source.unsplash.com/random/beauty")] '></motion.div>

        <motion.div 
        style={{y:translateB2}} 
         className='w-[60vw] absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat h-[70vh] mx-auto bg-[url("https://source.unsplash.com/random/world")] '
        >

         </motion.div>

      </motion.div>
      <motion.div style={{y:translateBig}} className='flex-1 w-[80vw] rounded-2xl relative bg-cover bg-center bg-no-repeat h-[90vh] mx-auto bg-[url("https://source.unsplash.com/random/beauty")] '></motion.div>

      </div>
    </div>
  );
};

export default Parallax;
