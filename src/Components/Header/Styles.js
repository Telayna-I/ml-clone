import styled from "styled-components";
import { BsSearch, BsCart2 } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'


export const Container = styled.header`
    width: 100vw;
    background-color: var(--yellow);
    height:100px;

`
export const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    padding: 11px 10px;
    margin: 0 auto;
    height: 56px;
    >.logo{
        width: 134px;
        height: 33px;
    }
    >.disney{
        width: 340px;
        height: 39px;
    }
`
export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
    width: 50%;
    height: 40px;
    background-color: var(--white);
    border-radius: 2px;
    >input{
        width: 100%;
        height: 40px;
        
    }
    >input::placeholder{
        padding: 1rem;
        color: var(--text2);

    }
`
export const Lupa = styled(BsSearch)`
    margin-left: 1rem;
    width: 40px;
    margin: 1rem;
    border: 1px solid var(--border);
    padding-left: 1rem ;
    cursor: pointer;
    border-top: none;
    border-right: none;
    border-bottom: none;
`

export const Nav = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    justify-content: space-between;
    >div{
        display: flex;
        align-items: center;
        padding: 0.3rem;
        border: 1px solid transparent;
        border-radius:4px ;
        cursor: pointer;
        >div{
            display: flex;
            flex-direction: column;
            >.envio{
                font-size: 12px;
                line-height: 10px;
                margin-bottom: 2px;
                color: var(--text2);
            }
            >span{
                font-size: 14px;
                line-height: 13px;
            }
        }
    }
    >div:hover{
        border: 1px solid var(--border);
    }
    >ul{
        align-self: flex-end;
        display: flex;
        align-items: center;
        >li{
            margin: 0.5rem;
            font-size: 14px;
            line-height: 22px;
            color: var(--text2);
            cursor: pointer;
        }
    }
    >.strong{
        >li{
            color: var(--text1);
        }
    }
`
export const Cart = styled(BsCart2)`

`
export const Location = styled(HiOutlineLocationMarker)`
    width: 2rem;
    height: 2rem;
    color: var(--text2);
`