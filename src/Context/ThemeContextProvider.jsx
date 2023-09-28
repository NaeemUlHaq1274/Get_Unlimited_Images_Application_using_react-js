import React, { useState } from 'react';
import MyContext from './ThemeContext';

function ThemeContextProvider({children}) {
const [data,setData]=useState([])

  return (
    <MyContext.Provider value={{data,setData}}>
        {children}
    </MyContext.Provider>
  )
}

export default ThemeContextProvider