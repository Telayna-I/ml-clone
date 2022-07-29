import styled from "styled-components";
import { HiOutlineShieldCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlineTrophy } from 'react-icons/ai'
import { BsTruck } from 'react-icons/bs'
import { TbArrowBack } from 'react-icons/tb'

export const Container = styled.div`
    padding: 32px 16px;
    margin: 1.2rem 16px;
    >.vendedor{
        padding: 0 16px;
        font-size: 14px;
        line-height: 14px;
        border: 1px solid var(--border);
        border-top: none;
        border-bottom: none;
        >span{
            color: var(--blue3);
        }
    }
    >.ventas{
        border: 1px solid var(--border);
        padding: 4px 16px;
        font-size: 14px;
        line-height: 14px;
        border-top: none;
        border-bottom: none;
    }
    >.factura{
        border: 1px solid var(--border);
        padding: 6px 16px;
        font-size: 12px;
        line-height: 14px;
        color: var(--text2);
        border-top: none;
        border-bottom: none;
    }
    >h5{
        padding: 24px 16px;
        font-size: 16px;
        line-height: 21.6px;
        font-weight: 500;
        border: 1px solid var(--border);
        border-top: none;
        border-bottom: none;
    }
    >.cantidad{
        border: 1px solid var(--border);
        padding: 0 16px;
        font-size: 16px;
        line-height: 48px;
        border-top: none;
        border-bottom: none;
        >.unidad{
            font-size: 16px;
            line-height: 48px;
            font-weight: 500;
        }
        >.disponible{
            font-size: 14px;
            line-height: 48px;
            color: var(--text2);
            margin-left: 6px;
        }
    }
    >.buttons{
        border: 1px solid var(--border);
        padding: 8px 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* margin-top: 8px; */
        border-top: none;
        border-bottom: none;
        >button{
            display: flex;
            width: 100%;
            margin-bottom: 12px;
            cursor: pointer;
            >span{
                font-size: 16px;
                border-radius: 6px;
                line-height: 48px;
                padding: 0 24px;
                color: var(--white);
                background-color: var(--blue3);
                width: 100%;
                font-weight: 500;
            }
        }
        >.carrito{
            >span{
                background-color: #D9E7FA;
                color: var(--blue3);
            }
        }
        
    }
    `
export const Caja = styled.div`
    padding: 16px;
    border: 1px solid var(--border);
    border-radius: 8px 8px 0px 0px;
    border-bottom: none;
    >.envio{
        display: flex;
        font-size: 16px;
        line-height: 20.8px;
        align-items: center;
        font-weight: 500;
        margin-bottom: 2px;
        color: var(--green);
    }
    >p{
        font-size: 14px;
        line-height: 18.06px;
        padding-left: 30px;
        color: var(--text2);
    }
    >.llegada{
        display: flex;
        align-items: center;
        padding-left: 30px;
        font-size: 14px;
        line-height: 18.9px;
        color: var(--blue3);
        cursor: pointer;
    }
    
    `
export const CamionIcon = styled(BsTruck)`
    font-size: 20px;
    margin-top: -3px;
    margin-right: 10px;
    color: var(--green);
    `
export const LocationIcon = styled(HiOutlineLocationMarker)`
    font-size: 17px;
    margin-top: -3px;
    margin-right: 6px ;
    `
export const Beneficios = styled.div`
    border: 1px solid var(--border);
    padding: 1rem 16px;
    border-radius: 0px 0px 8px 8px;
    border-top: none;
    >li{
        margin-bottom: 16px;
        &:nth-child(1){
            >span{
            display: flex;
            align-items: center;
            font-size: 14px;
            line-height: 18.2px;
            color: var(--blue3);
            }
            >p{
            font-size: 14px;
            line-height: 18.2px;
            color: var(--text2);
            margin-left: 30px;
            }
        }
        &:nth-child(2){
            display: flex;
            align-items: center;
            >p{
                font-size: 14px;
                line-height: 18.2px;
                color: var(--blue3);
                >span{
                    color: var(--text2);
                }
            }
        }
        &:nth-child(3){
            >span{
                display: flex;
                font-size: 14px;
                line-height: 18.2px;
                color: var(--blue3);
                >span{
                    color: var(--text2);
                }
            }
        }        
    }
`
export const ArrowIcon = styled(TbArrowBack)`
    font-size: 20px;
    line-height: 18.9px;
    color: var(--text2);
    margin-right: 10px;
    
`
export const ShieldIcon = styled(HiOutlineShieldCheck)`
    font-size: 35px;
    line-height: 18.9px;
    color: var(--text2);
    margin-top: -1rem;
    margin-right: 10px;
`
export const CupIcon = styled(AiOutlineTrophy)`
    font-size: 20px;
    line-height: 18.9px;
    color: var(--text2);
    margin-top: -3px;
    margin-right: 10px;
`

