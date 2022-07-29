import React from 'react'
import { Container, Card, Title, Reputacion, Caja, Row, PlatinumIcon, LocationIcon, SupportIcon, ClockIcon, Link  } from './Styles'

const InfoVendedor = () => {
    return (
        <Container>
            <Title>
                Informacion del vendedor
            </Title>
            <Card>
                <LocationIcon/>
                <div>
                    <p>Ubicación</p>
                    <strong>Monte Castro, Capital Federal</strong>
                </div>
            </Card>
            <Card>
                <PlatinumIcon/>
                <div>
                    <p className='platinum'>MercadoLíder Platinum</p>
                    <strong>¡Es uno de los mejores del sitio!</strong>
                </div>
            </Card>
            <Reputacion>
                <Caja>
                    <li/>
                    <li/>
                    <li/>
                    <li/>
                    <li className='avtive' />
                </Caja>
            </Reputacion>
            <Row>
                <div>
                    <strong>438</strong>
                    <span>Ventas en los últimos 60 días</span>
                </div>
                <div>
                    <strong>
                        <SupportIcon/>
                    </strong>
                    <span>Brinda buena atención</span>
                </div>
                <div>
                    <strong>
                        <ClockIcon/>
                    </strong>
                    <span>Despacha sus productos a tiempo</span>
                </div>
            </Row>

            <Link>Ver más datos de este vendedor</Link>
        </Container>
    )
}

export default InfoVendedor