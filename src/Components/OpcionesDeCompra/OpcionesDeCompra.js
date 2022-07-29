import React from 'react'
import { Section } from './Styles'

const OpcionesDeCompra = () => {
    return (
        <Section>
            <h5>Otras opciones de compra</h5>
            <div className='head'>
                <span className='precio'>$27.999</span>
                <span className='etiqueta'>Tienda oficial</span>
            </div>
            <ul>
                <p className='cuotas'>Pagá hasta en 12 cuotas</p>
                <p className='envio-gratis'>Envío gratis a todo el país</p>
                <span className='tienda'>Tienda oficial <span className='vendedor'>Castillo</span></span>
                <p className='ventas'>6.180 ventas</p>
                <div className='buttons'>
                    <button className='comprar'><span>Comprar ahora</span></button>
                    <button className='add-carrito'><span>Agregar al carrito</span></button>
                </div>
            </ul>
            <div className='head'>
                <span className='precio'>$24.799</span>
                <span className='etiqueta'>Llega mañana</span>
            </div>
            <ul>
                <p className='cuotas'>Pagá hasta en 12 cuotas</p>
                <p className='envio-gratis'>Envio gratis a todo el país</p>
                <span className='tienda'>Vendido por <span className='vendedor'>COMPUGAMES SRL</span></span>
                <p className='ventas'>411 ventas</p>
                <p className='factura-a'>Hace factura A</p>
                <div className='buttons'>
                    <button className='comprar'><span>Comprar ahora</span></button>
                    <button className='add-carrito'><span>Agregar al carrito</span></button>
                </div>
            </ul>
            <div className='head'>
                <span className='precio'>$29.999</span>
                <span className='etiqueta'>Llega mañana</span>
            </div>
            <ul>
                <p className='seis-cuotas'>Pagá hasta en 6 cuotas sin interés</p>
                <p className='envio-gratis'>Envio gratis a todo el país</p>
                <span className='tienda'>Vendido por <span className='vendedor'>MAKKASAR</span></span>
                <p className='ventas'>2.090 ventas</p>
                <p className='factura-a'>Hace factura A</p>
                <div className='buttons'>
                    <button className='comprar'><span>Comprar ahora</span></button>
                    <button className='add-carrito'><span>Agregar al carrito</span></button>
                </div>
            </ul>
            <h5 className='mas-opciones'>Ver más opciones desde $ 23.999</h5>
        </Section>
    )
}

export default OpcionesDeCompra