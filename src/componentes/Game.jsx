import React from 'react'
import styles from '../styles/Game.module.css'

function Game() {
  return (
    <section id={styles.fundo}>
      <h2 className={styles.nome}>Meu Game</h2>
      <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/xnmGIzGTWFU?autoplay=1&mute=1" 
      title="YouTube video player" 
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen
      >
    </iframe>
    <div className={styles.tsd}>
      <a href="https://game-1-puce.vercel.app/" target="_blank" rel="noreferrer">
      <button className={styles.tsdgame}>Visitar site</button>
    </a>
    </div>

      
        </section>
  )
}

export default Game
