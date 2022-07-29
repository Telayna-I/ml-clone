import React from 'react'
import { Container, Row, Estado, HeartIcon, Title, Rate, StarsContainer, Star, Top, Price, Color, Info } from './Styles'

const InfoProducto = () => {
    return (
        <Container>
            <Row>
                <Estado> Nuevo  |  3631 vendidos </Estado>
                <HeartIcon/>
            </Row>
            <Title>Joystick inalámbrico Sony PlayStation DualSense CFI-ZCT1 cosmic red</Title>
            <Rate>
                <StarsContainer>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <span>(762)</span>
                </StarsContainer>
                <Top>
                    <a href='#'>MÁS VENDIDO</a>
                    <span> 12° en Gamepads y Joysticks</span>
                </Top>
            </Rate>
            <Price>
                $ 23.999
            </Price>
            <p className='precio-cuotas' >en 12x $3544</p>
            <a className='medio-pago' href='#'>Ver los medios de pago</a>
            <Color>
                <h5>Color:</h5>
                <div>
                    <img src='https://http2.mlstatic.com/D_Q_NP_665357-MLA46237938567_062021-R.webp' alt='joystick'/>
                    <img src='https://http2.mlstatic.com/D_NQ_NP_928381-MLA49023008644_022022-O.webp' alt='joystick'/>
                    <img src='https://http2.mlstatic.com/D_Q_NP_621951-MLA46237882917_062021-R.webp' alt='joystick'/>
                    <img src='https://http2.mlstatic.com/D_Q_NP_632612-MLA48992336216_022022-R.webp' alt='joystick'/>
                    <img src='https://http2.mlstatic.com/D_Q_NP_970762-MLA48992207501_022022-R.webp' alt='joystick'/>
                    <img src='https://http2.mlstatic.com/D_Q_NP_991801-MLA44330912940_122020-R.webp' alt='joystick'/>
                    
                </div>
            </Color>
            <Info>
                <h5>Lo que tenés que saber de este producto</h5>
                <ul>
                    <li>Cuenta con Bluetooth.</li>
                    <li>Pantalla táctil.</li>
                    <li>Mando inalámbrico.</li>
                    <li>Compatible con: PlayStation 5 y Televisores y iPadOS 14.5.</li>
                    <li>Incluye un control.</li>
                    <li>Con sistema de vibración incorporado.</li>
                    <li>Compatible con: Android 12, iOS 14.5, MacOS Big Sur 11.3.</li>
                    <li>Diversión garantizada con tu joystick PlayStation.</li>
                    <li>Diseño ergonómico.</li>
                </ul>
            </Info>
            <p className='azul'>Ver características</p>
            <p className='opciones-compra'>Opciones de compra:</p>
            <p className='azul'>26 productos nuevos desde $23.999</p>
        </Container>
    )
}

export default InfoProducto