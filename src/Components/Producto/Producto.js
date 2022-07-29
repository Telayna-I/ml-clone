import React from 'react'
import { Container, Panel, Column, Column1, Galeria, ContainerProducto } from './Styles'
import  Info  from './Info.js'
import OpcionesDeCompra from '../OpcionesDeCompra/OpcionesDeCompra'
import InfoVendedor from '../InfoVendedor/InfoVendedor.js'
import ProductoVenta from '../ProductoVenta/ProductoVenta'
import InfoProducto from '../InfoProducto/InfoProducto.js'


const Producto = () => {
    return (
        <Container>
            <Panel>
                <Column1>
                    <ContainerProducto>
                        <Galeria>
                            <img src='https://http2.mlstatic.com/D_NQ_NP_665357-MLA46237938567_062021-O.webp' alt='producto' />
                        </Galeria>
                        <InfoProducto/>
                    </ContainerProducto>
                    <Info/>
                </Column1>
                <Column>
                    <ProductoVenta/>
                    <InfoVendedor/>
                    <OpcionesDeCompra/>
                </Column>
            </Panel>
        </Container>
    )
}



export default Producto

