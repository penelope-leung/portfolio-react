import React from 'react'
import Project from '../components/Project'
import {portfolioList} from '../utils/PortfolioListHelper'

import "../styles/Portfolio.css"

function Portfolio() {
  return (
    <div className='portfolio'>
      <h1> My Portfolio </h1>
      <div className='portfolioList'>
        {portfolioList.map((project) => {
          return <Project name={project.name} image = {project.image} />;
        })}
      </div>
    </div>
  )
}

export default Portfolio