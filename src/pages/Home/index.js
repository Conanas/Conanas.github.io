import React from 'react';
import { useSpring, animated } from 'react-spring';
import Heading from '../../components/Heading/';
import './style.css';

export default function Home() {

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

  // const heading = useSpring({
  //   from: {
  //     transform: `translate(-600px)`,
  //   },
  //   to: {
  //     transform: `translate(0px)`,
  //   },
  //   config: {
  //     tension: 200
  //   }
  // })

  return (
    <section className="container">
      <div className="row">
        <div className="col d-flex flex-column">
          <Heading>Thomas Haigh</Heading>
          {/* <animated.h1 className="section-heading" style={heading}>Thomas Haigh</animated.h1> */}
          <animated.p className="brand-statement" style={statement}>
            Full-stack web developer with JavaScript, HTML, CSS, React.js, Express.js,
            Node.js, MongoDB, MySQL, ORM, Web API and responsive web design skills
            dedicated to making the web a more accessible and user friendly experience.
            A retail management background has developed my strengths in problem solving,
            teamwork, meeting deadlines and successfully grew a retail store project
            into a profitable asset. Obtained a degree in Computer Science at the University
            of Nottingham giving a solid understanding of coding fundamentals and the Monash
            University Full Stack Coding Bootcamp has built my skills in web development.
            Led a team of four to develop a product that helps users to save money on food
            and cooking during the Covid-19 2020 lockdown in Victoria with a recipe budgeting
            application. I am motivated to contribute my full-stack web skills and computer
            science background to build better experiences on the web in a fast paced
            environment with a professional team.
          </animated.p>
        </div>
      </div>
    </section>
  )
}