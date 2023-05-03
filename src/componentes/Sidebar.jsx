import React from 'react'
import Avatar from '../img/foto.jpeg'
import '../styles/sidebar.css'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

function Sidebar() {
  return (
    <aside id='sidebar'>
        <img src={Avatar} alt='Gustavo Hipólito'></img>
        <p className='title'>Desenvolvedor</p>
        <SocialNetworks/>
        <InformationContainer/>


        <a href="./public/Profile.pdf" download className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar
