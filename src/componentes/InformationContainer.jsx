import React from 'react'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import '../styles/informationcontainer.css'

function InformationContainer() {
  return (
    <section id='information'>
        <div className="info-card">
                <AiFillPhone id="phone-icon" />
                <div>
                    <h3>Telefone</h3>
                    <p>(67) 98135-2831</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                <div>
                    <h3>E-mail</h3>
                    <p>gustavo.fdh11@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    <p>Campo Grande - MS</p>
                </div>
            </div>
    </section>
  )
}

export default InformationContainer
