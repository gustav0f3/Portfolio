import React from 'react'
import { Link } from 'react-router-dom'

function ProjectsContainer() {
  return (
    <section>
        <h2>Projetos</h2>
        <p>Meus principais projetos</p>
        <Link to="/projetos" className="btn-projects">Ver Projetos</Link>
    </section>
  )
}

export default ProjectsContainer
