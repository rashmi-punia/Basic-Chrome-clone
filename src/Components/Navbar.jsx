import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import "tippy.js/animations/perspective.css";
import {motion,AnimatePresence, useAnimation} from "framer-motion"

import { FaChrome } from "react-icons/fa6";

const Navbar = ({screen1,screen2,screen3,screen4}) => {

    const [scrollLength,setScrollLength] = useState(false)
    useEffect(()=>{
        const handleScroll = () =>{
            
                setScrollLength(window.scrollY>600)
        }
        window.addEventListener('scroll',handleScroll)
        return() => {
            window.removeEventListener('scroll',handleScroll)
        }
    },[])

  return (
    <>
    <AnimatePresence>

      <motion.nav  exit={ {top:"-100%"}}
 transition={{type:"spring",stiffness:"65",delay:0.3,duration:1}} className={`${scrollLength ? "" : "fixed top-0 left-0 right-0" } w-full z-50 text-greyish font-fw font-googleFont flex items-center space-x-20 px-8 py-5 bg-white shadow`}>

        <Tippy
          content="Icon chrome logo"
          theme="material"
          delay={100}
          animation="perspective"
          placement="bottom"
          //   offset={[0, 12]}
        >
          <div className="flex items-center space-x-2">
            <FaChrome className="size-8 inline-flex text-neutral-600" />
            <p className="">Chrome</p>
          </div>
        </Tippy>
        <div className="flex items-center space-x-8 *:rounded *:p-1.5">
          <a className="hover:bg-slate-200 hover:delay-100 hover:text-black">Feature</a>
          <a className="hover:bg-slate-200 hover:delay-100 hover:text-black">Safety</a>
          <a className="hover:bg-slate-200 hover:delay-100 hover:text-black">By Google</a>
          <a className="hover:bg-slate-200 hover:delay-100 hover:text-black">Feature</a>
        </div>
      </motion.nav>
    </AnimatePresence>

      <Header scrollLength={scrollLength} screen1={screen1} screen2={screen2} screen3={screen3} screen4={screen4} />
    </>
  );
};

export default Navbar;

const Header = ({scrollLength,screen1,screen2,screen3,screen4}) => {
    const scrollToTarget = (ref) =>{
        ref.current.scrollIntoView({behavior: 'smooth',top:0})
    }
  return (
    <div className="w-screen mt-24 h-[55vh] flex justify-center items-center">
      <div className="w-1/3 p-6 flex-col *:my-4  *:mx-auto text-center">
        <FaChrome className="size-16" />
        <p className="text-5xl capitalize font-bold ">
          the browser built to be yours
        </p>
        <motion.div  animate={scrollLength ? { position: "fixed", top: 0, zIndex: 50 } : {top:"-100%"}}
 transition={{type:"spring",stiffness:"70",delay:0.5,duration:1}} className="flex p-3 space-x-4 *:rounded-2xl *:text-greyish *:p-1.5 rounded-full justify-between shadow border bg-white border-slate-200 items-center">
          <a onClick={()=> scrollToTarget(screen1)} className="hover:bg-slate-200 hover:delay-100 hover:text-black">updates</a>
          <a  onClick={()=> scrollToTarget(screen2)} className="hover:bg-slate-200 hover:delay-100 hover:text-black">ai</a>
          <a  onClick={()=> scrollToTarget(screen3)} className="hover:bg-slate-200 hover:delay-100 hover:text-black">yours</a>
          <a  onClick={()=> scrollToTarget(screen4)} className="hover:bg-slate-200 hover:delay-100 hover:text-black">safe</a>
          <a className="hover:bg-slate-200 hover:delay-100 hover:text-black">fast</a>
          <a className="hover:bg-slate-200 hover:delay-100 hover:text-black">By Google</a>
        </motion.div>
        <div className="">Need the Chrome installer ? <span className="text-blue-500 hover:underline"> Download here</span></div>
      </div>
    </div>
  );
};
