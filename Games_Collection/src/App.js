import React from "react";

import images from "./data/images";

import CustomSlider from "./components/customslider";
import {Link} from "react-router-dom"
import "./styles.css";
import  {useContext} from "react";
import {DataContext} from "./AppContext/dataContext";
export default function App() {
  const {gameName,gameLink}=useContext(DataContext);
  return (
    <div className="App">
      <div class="wrapper">
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
    </div>
     <div className="appbottom2">
       <span className="fancy">Click To Play Games...</span>
      </div>
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} name={image.name} link={image.link}/>;
        })}
      </CustomSlider>
      <div className="appbottom">
        <a href={gameLink} rel="noopener" target="_blank" className="subAppBottom button1">{gameName}</a>
      </div>
    </div>
  );
}
