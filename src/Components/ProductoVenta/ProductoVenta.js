import React from 'react'
import { Container, Caja, CamionIcon, LocationIcon, ArrowIcon, Beneficios, CupIcon, ShieldIcon } from './Styles'

const ProductoVenta = () => {
    return (
        <Container>
            <Caja>
                <span className='envio'><CamionIcon/>Envío gratis a todo el país</span>
                <p>Conocé los tiempos y las formas de envío.</p>
                <span className='llegada'><LocationIcon/>Calcular cuándo llega</span>
            </Caja>
            <p className='vendedor'>Vendido por <span>ANDINA HOGAR</span></p>
            <p className='ventas'>MercadoLíder | 246 ventas</p>
            <p className='factura'>Hace Factura A</p>
            <h5>Stock disponible</h5>
            <p className='cantidad'>Cantidad: <span className='unidad'>1 unidad</span><span className='disponible'>(25 disponibles)</span></p>
            <div className='buttons'>
                <button className='comprar'><span>Comprar ahora</span></button>
                <button className='carrito'><span>Agregar al carrito</span></button>
            </div>
            <Beneficios>
                <li>
                    <span><ArrowIcon/> Devolución gratis.</span>
                    <p>Tenés 30 días desde que lo recibís.</p>
                </li>
                <li>
                    <ShieldIcon/>
                    <p>Compra Protegida<span>, recibí el producto que esperabas o te devolvemos tu dinero.</span></p>
                </li>
                <li>
                    <span><CupIcon/>Mercado Puntos<span className='resto'>. Sumas 178 puntos.</span></span>
                </li>
            </Beneficios>
        </Container>
    )
}

export default ProductoVenta