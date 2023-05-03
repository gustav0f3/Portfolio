/* eslint-disable jsx-a11y/alt-text */
import yoda from '../img/yoda.webp'

function AboutContainer() {
  return (
    <section className="about-container">
    <h2>Sobre</h2>
    <p>Programador você deve ser, hmmmm <img className="yoda" src={yoda}></img></p>
    <p>Meu nome é Gustavo Hipólito e sou desenvolvedor web. Tenho 6 meses de experiência em programação e web-design, estou preparado para criar soluções eficiente e personalizadas para suas necessidades na web. <br/> Atualmente, estou cursando Engenharia de Software na Unigran, Operador de Computador no IFMS e sou aluno do Alura.  </p>
</section>
  )
}

export default AboutContainer
