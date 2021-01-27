import React from 'react';
import { useSpring, animated } from 'react-spring';
import './style.css';

export default function Card({ project, index, setCurrentProduct }) {
  const animation = useSpring({
    from: {
      transform: `translateY(800px)`,
    },
    to: {
      transform: `translateY(0px)`,
    },
    config: {
      tension: Math.floor(Math.random() * (400 - 200) + 200)
    },
    onStart: () => document.body.style.overflow = "hidden",
    onRest: () => document.body.style.overflow = "auto"
  })

  return (
    <animated.div className={`card + card${index}`} key={index} style={animation}>
      <img className="card-img-top" src={project.image} alt={project.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.quick_description}</p>
        <button
          className="btn"
          id={`${project.name}-button`}
          value={index}
          data-toggle="modal"
          data-target="#project-modal"
          onClick={(e) => setCurrentProduct(e.target.value)}
        >
          View Project Info
                      </button>
      </div>
    </animated.div>
  )
}