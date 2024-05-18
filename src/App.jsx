import { useState, useRef } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Scrolls from "./Components/Scrolls";
import Navbar from "./Components/Navbar";
import Updates from "./Components/Updates";
import Parallax from "./Components/Parallax";
import Screen from "./Components/Screen";
import Grids from "./Components/Grids";
import Circles from "./Components/Circles";

function App() {
  const targetRef = useRef();
  const targetRef2 = useRef();
  // const targetRef3 = useRef();

  

  const screen1 = useRef(null)
  const screen2 = useRef(null)

  const screen3 = useRef(null)
  const screen4 = useRef(null)



  return (
    <>
      <div ref={targetRef} className="h-[300vh] font-googleFont">
        <Navbar screen1={screen1} screen2={screen2} screen3={screen3} screen4={screen4} />
        <Scrolls targetRef={targetRef} />
        <Updates screen1={screen1} />
        <Grids screen2={screen2} />
        <Parallax screen3={screen3} />
        <Screen targetRef={targetRef}  screen4={screen4}/>
      </div>

      <div ref={targetRef2} className="mt-[374vh] py-7 font-googleFont">
        <Circles targetRef2={targetRef2} />
      </div>
    </>
  );
}

export default App;
