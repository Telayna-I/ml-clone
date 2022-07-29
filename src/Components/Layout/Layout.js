import React from 'react'
import Header from '../Header/Header.js'
import Hero from '../Hero/Hero.js'
import Producto from '../Producto/Producto.js'
import { Container, Wrapper } from './Styles.js'

const Layout = () => {
    return (
        <Container>
            <Header/>
            <Wrapper>
                <Hero/>
                <Producto/>
            </Wrapper>
        </Container>
    )
}

export default Layout