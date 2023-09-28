import React, { useState, useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchbar.css";
import MyContext from "../../Context/ThemeContext";
import { throttle } from "lodash";


function SearchBar() {
  const { setData } = useContext(MyContext);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1); // Initialize the page variable using useState.
  

//////////////////////////
  //////////////////
  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };
  //////////////
//////////////////////////
  async function fetchImagesData() {
    const Access_Key = "vGKCvSdUyVza8CEddxVdY5f1xIeyQ5_wmCTTTaCQ5UM";
    const api = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${Access_Key}`;
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error("Data Not Found", 404);
      }
      const data = await response.json();
      setData((prevData)=>[...prevData,...data.results])
    } catch (error) {
      console.log(error);
    }
  }
  ////////////////////////////
  //////////////////////
  function handleSearchClick() {
    setData([])
    setPage(1);
    const newData = fetchImagesData(page,query);
    
  }
  ///////////////////////
  /////////////////////////
  











  
  
  
  const handleScroll =  throttle(async() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollY > previousScrollY && scrollY + windowHeight >= documentHeight - 500) {
      setPage((prevPage) =>  prevPage + 1);
    }
    
    previousScrollY = scrollY; // Update the previousScrollY at the end of the handler.
  }, 1000);

  let previousScrollY = 0;



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    fetchImagesData()
  }, [page]);








  return (
    <div className="search-container">
      <div>
        <h1>Unsplash Images</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={()=>handleSearchClick()}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
