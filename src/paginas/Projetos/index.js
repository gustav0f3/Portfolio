import React from 'react'
import styles from '../../styles/Projetos.module.css'
import Projetos from '../../componentes/projetos'
function Projeto() {
  return (
    <div id={styles.id}>
      <h1 className={styles.h1}>Projetos</h1>
      <div className={styles.cards}>
      <Projetos/>
      </div>
    </div>

      
  )
}

export default Projeto
