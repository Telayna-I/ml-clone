import React from 'react'
import { Container, Wrapper, Row, Lupa, Nav, Cart, Location } from './Styles'

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <img className='logo' src='https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.1/mercadolibre/logo__large_plus.png' alt='logo' />
                <Row>
                    <input placeholder='Buscar productos, marcas y más...'/>
                    <Lupa/>
                </Row>
                <img  className='disney' src='https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp' alt='lvl6'/>
            </Wrapper>
            <Nav>
                <div className='enviar'>
                    <Location/>
                    <div>
                        <span className='envio'>Enviar a</span>
                        <span>Capital Federal</span>
                    </div>
                </div>
                <ul>
                    <li>Categorías</li>
                    <li>Ofertas</li>
                    <li>Historial</li>
                    <li>Supermercado</li>
                    <li>Moda</li>
                    <li>Vender</li>
                    <li>Ayuda</li>
                </ul>
                <ul className='strong'>
                    <li>Creá tu cuenta</li>
                    <li>Ingresá</li>
                    <li>Mis compras</li>
                    <li><Cart/></li>
                </ul>
            </Nav>
        </Container>
    )
}

export default Header