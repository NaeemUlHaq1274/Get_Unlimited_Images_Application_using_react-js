import React, { useContext } from 'react'
import "./images.css"
import MyContext from '../../Context/ThemeContext';



function Images() {
  const { data } = useContext(MyContext);
  // console.log(data)
  return (
    <div className='images-container'>
      {data?data.map((singleData,index)=>(
        <div key ={index} className="image-container">
          <img src={singleData.urls.regular} alt="" />
          <h2>{(singleData.alt_description.split(' ')).slice(0, 3).join(' ')}</h2>
        </div>
      )):
      null
      }
    </div>
  )
}

export default Images




  // <img src={image2} alt="2" />
  // <img src={image3} alt="3" />
  // <img src={image4} alt="4" />
  // <img src={image5} alt="5" />