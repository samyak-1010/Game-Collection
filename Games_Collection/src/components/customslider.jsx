import React, { useState, useEffect } from "react";
import leftarrow from "./leftarow.png";
import rightarrow from "./rightarrow.png";
import "./customslider.css";
import  {useContext} from "react";
import {DataContext} from "../AppContext/dataContext";
function CustomCarousel({ children }) {
  const {gameName,gameLink,setGameName,setGameLink}=useContext(DataContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);
  // const [gameName,setGameName]=useState("");
  useEffect(()=>{
    console.log(activeIndex);
    let name=children[activeIndex]?.props?.name;
    let link=children[activeIndex]?.props?.link;
    setGameName(name);
    setGameLink(link);
  },[activeIndex]);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div className="upperContainer">
    <div
      className="container__slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
    {children.map((item, index) => {
        return (
          <div
            className={"slider__item slider__item-active-" + (activeIndex + 1)}
            key={index}
          >
            {item}
          </div>
        );
      })}

      <div className="container__slider__links">
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? "container__slider__links-small container__slider__links-small-active"
                  : "container__slider__links-small"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>
      <button
        className="slider__btn-prev"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        <img src={leftarrow} className="arrows"></img>
      </button>
      <button
        className="slider__btn-next"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        <img src={rightarrow} className="arrows"></img>
      </button>
    </div>
    </div>
  );
}

export default CustomCarousel;
