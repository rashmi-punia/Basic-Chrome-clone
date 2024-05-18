import React from "react";
import { FaChrome } from "react-icons/fa6";
import {motion,useAnimation} from "framer-motion"
// import { useInView } from 'react-intersection-observer';


const Updates = ({screen1}) => {
  return (
    <div ref={screen1} className="text-center">
      <div className="py-1 px-24 *:p-5">
        <p className="text-5xl leading-relaxed m-10 text-wrap capitalize font-bold ">
          Discover the latest{" "}
          <br/>
          <span className="bg-blue-200 text-blue-700 px-4 py-2 rounded-full">
            updates
          </span>{" "}
          from chrome
        </p>
        <div className="flex items-center justify-between">
            <LeftBox />
            <RightBox />

        </div>
      </div>
    </div>
  );
};

export default Updates;

const LeftBox = () => {
  return (
    <div className="bg-purple-200 rounded-3xl space-y-12 text-start w-[40vw] h-[75vh] flex-col overflow-hidden">
    <div className="p-12 space-y-3">
      <p>Updates</p>
      <h2 className="text-4xl capitalize font-bold">Automatic updates</h2>
      <p>
        There’s a new Chrome release every four weeks, making it easy to have
        the newest features and a faster, safer web browser.
      </p>
      <a>Learn about automatic updates</a>

    </div>
      <div className="rounded-r-xl w-full -translate-x-14 h-full bg-[url('https://source.unsplash.com/random/cr')]"></div>
    </div>
  );
};

const RightBox = () => {
    return (
      <div className="bg-purple-200 rounded-3xl space-y-12 text-start w-[40vw] h-[75vh] flex-col overflow-hidden">
      <div className="p-12 space-y-3">
        <p>latest</p>
        <h2 className="text-4xl capitalize font-bold">new from chrome</h2>
        <p>
        Chrome regularly updates with tools and features that make it faster and easier to use.
        </p>
        <a className="text-blue-700">Learn about automatic updates</a>
  
      </div>
      
      <motion.div
      initial={{
      }}
      whileInView={{
        x:[-100,250,430],
        y:[-50,100,110],
        transition:{
          // type:"spring",
          // stiffness:100,
          ease:"easeInOut",
        duration:2.5,
        delay:0.4}

        }
      

      } >
      <FaChrome className="size-24" />

      </motion.div>
      </div>
    );
  };
