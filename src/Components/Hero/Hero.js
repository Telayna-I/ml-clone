import React from 'react'
import { Container, Row } from './Styles'

const Hero = () => {
    return (
        <Container>
            <Row>
                <a href='#' className='volver' >Volver al Listado</a>
                <a href='#'>Consolas y Videojuegos | Gamepads y Joysticks</a>
                <a href='#'>Accesorios para Consolas</a>
                <a href='#'>Para PlayStation</a>
                <a href='#'>PS5 - PlayStation 5</a>
            </Row>
            <Row>
                <a href='#'>Compartir</a>
                <a href='#'>Vender uno igual</a>
            </Row>
        </Container>
    )
}

export default Hero