import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Statement({ children }) {
  const statement = useSpring({
    from: {
      transform: `translate(1400px)`,
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
    <animated.p style={statement}>{children}</animated.p>
  )
}