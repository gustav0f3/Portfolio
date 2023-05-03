import React from 'react'
import styles from '../styles/ClinicaOuse.module.css'
function ClinicaOuse() {
  return (
    <section id={styles.fundo}>
    <h2 className={styles.nome}>Clínica OUSE</h2>
        <iframe
         width="560" 
        height="315" 
        src="https://www.youtube.com/embed/v0s0oi2KryU?autoplay=1&mute=1&controls=0" 
        title="Ouse" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
        >
      </iframe>
      
        <div className={styles.tsd}>
          <a href="https://clinica-ouse.vercel.app/" target="_blank" rel="noreferrer" >
          <button className={styles.tsdouse}>Visitar site</button>
          </a>
      </div>
      </section>
  )
}

export default ClinicaOuse
