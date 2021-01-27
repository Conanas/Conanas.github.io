import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Heading({ children }) {

  const heading = useSpring({
    from: {
      transform: `translate(-600px)`,
    },
    to: {
      transform: `translate(0px)`,
    },
    config: {
      tension: 200
    },
    onStart: () => document.body.style.overflow = "hidden",
    onRest: () => document.body.style.overflow = "auto"
  })

  return (
    <animated.h1 className="section-heading" style={heading}>{children}</animated.h1>
  )
}