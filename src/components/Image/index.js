import React from 'react';
import { useSpring, animated } from 'react-spring';
import portfolioImage from "../../assets/portfolio-img/tom-portfolio-photo.jpg";

export default function Image() {

  const imgAnimation = useSpring({
    from: {
      transform: `translateY(800px)`,
    },
    to: {
      transform: `translateY(0px)`,
    },
    config: {
      tension: 200
    },
    onStart: () => document.body.style.overflow = "hidden",
    onRest: () => document.body.style.overflow = "auto"
  })

  return (
    <animated.img className="float-left" id="about-img" src={portfolioImage} alt="portfolio" style={imgAnimation}></animated.img>
  )
}