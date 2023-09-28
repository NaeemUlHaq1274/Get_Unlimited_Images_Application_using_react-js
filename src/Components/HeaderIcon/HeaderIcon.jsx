import React, { useEffect, useState } from 'react'
import {BsFillMoonFill,BsFillSunFill} from 'react-icons/bs';
import "./headericon.css"

function HeaderIcon() {
  const [moonicon, setMoonIcon] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("#333");
  // const [color,setColor]=useState(true)
  // const styleObject = color ? { color: "#fff" } : {};


  useEffect(() => {
    if (backgroundColor === "#333") {
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#333";
    }
  }, [backgroundColor]);


  // OnClick the Header Icon
  const handleClick = () => {
    if (backgroundColor === "#333") {
      setBackgroundColor("#fff");
    } else {
      setBackgroundColor("#333");
    }
    setMoonIcon(!moonicon);
    setColor(!color)
  };
  return (
    <div className='icons-container'>
      <div className='icons' onClick={handleClick}>
        {(moonicon)?<BsFillMoonFill className='moon-icon icon' />:<BsFillSunFill className='sun-icon icon'/>}
      </div>
    </div>
  )
}

export default HeaderIcon