import React from 'react'
import '../styles/maincontent.css'
import AboutContainer from './AboutContainer'
import TechnologiesContainer from './TechnologiesContainer'
import ProjectsContainer from './ProjectsContainer'

function MainContent() {
  return (
    <main  id='main-content'>
      <AboutContainer/>
      <TechnologiesContainer/>
      <ProjectsContainer/>
    </main>
  )
}

export default MainContent
