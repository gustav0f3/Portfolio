import React from 'react'
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/socialnetworks.css'

const socialNetworks = [ 
    {name: "linkedin", link: "https://www.linkedin.com/in/gustavo-felipe-544b55240/", icon: <FaLinkedinIn/>},
    {name: "github", link: "https://github.com/gustav0f3" ,icon: <FaGithub/>},
    {name: "instagram", link: "https://www.instagram.com/gustav0f3/", icon: <FaInstagram/>}
]


function SocialNetworks() {

  return (
    <section id='social-networks'>
            {socialNetworks.map((network) => (
                <a href={network.link} target="_blank" className='social-btn' id={network.name} key={network.name} rel="noreferrer">
                    {network.icon}
                </a>
            ))}
        </section>
  )
}

export default SocialNetworks
