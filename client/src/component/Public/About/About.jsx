import React from 'react'
import PublicNavBar from '../PublicNavBar'
import './About.css'

const About = () => {
    return (
        <div className='aboutContainer'>
            <PublicNavBar />
            <h1>Hola!</h1>

            <h3>Bienvenid@ a mi app Chat-It</h3>
            <div className='presentacion'>
                <p>Hola, mi nombre es Lucas Montero, desarrollador Full-Stack, esta es mi app de chat desarrollada por mi, el propósito es practicar y mejorar mis habilidades de desarrollo y programación.</p>

                <p>Esta app cumple la función de poder conectarse con otras personas y poder conversar, nada nuevo la verdad, pero para mi fue muy emocionante y divertido desarrollar esto completamente desde cero, por ahora esta es una versión beta de prueba con funciones limitadas, por lo que sigo trabajando en mejorarla e implementar más funcionalidades que permitan estar a la altura de cualquier otra red social.</p>

                <p>
                    Te invito a que te crees una cuenta, aunque no te encariñes con ella, porque al ser de prueba esta versión, voy a estar borrando la base de datos, cada cierto tiempo, por lo que todas las cuentas registradas se eliminaran. Puedes buscarme y agregarme como Lucas Montero y escribirme si gustas.
                </p>

                <p>
                    Tambien te invito a visitar mis perfiles de <a href="https://www.linkedin.com/in/lucas-emanuel-montero-a293b6230/">LinkedIn</a> y de <a href="https://www.instagram.com/lucasmontero.wk/">Instagram</a>.
                </p>
            </div>

            <footer>
                <p className='lucasMontero'>Lucas Montero © 2022.
                    Todos los derechos reservados.
                </p>
            </footer>
        </div>
    )
}

export default About