import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:12px ;
`
export const Panel = styled.div`
    background-color: var(--white);
    box-shadow: var(--panel);
    display: grid;
    grid-template-columns: 80fr 20fr;
`
export const Column1 = styled.div`
    display: flex;
    flex-direction: column;
`
export const Column = styled.div`
    
`
export const ContainerProducto = styled.div`
    display: flex;
`
export const Galeria = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 530px;

    >img{
        height: 55%;
    }
`
export const Infor = styled.div`

`
export const Description = styled.div`
    border-top: 1px solid var(--border);
    width: 88%;
    margin: 0 auto;
    padding: 40px 0;

    >h4{
        color: var(--text1);
        font-size: 24px;
        margin-bottom: 32px;
        line-height: 30px;
    }
    
    >p{
        line-height: 27px;
        font-size: 20px;
        color: var(--text3);
    }

`
export const ProductoVenta = styled.div`

`
export const InfoVendedor = styled.div`

`
