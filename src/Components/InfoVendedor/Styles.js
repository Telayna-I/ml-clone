import styled, { css } from "styled-components";
import { IoMdRibbon } from 'react-icons/io'
import { HiOutlineLocationMarker, HiOutlineChatAlt2, HiOutlineClock  } from 'react-icons/hi'


export const Container = styled.div`
    padding: 32px 16px;
    margin: 0 16px;
    display: flex;
    flex-direction: column;
`
export const Title = styled.h5`
    padding:16px;
    font-size: 18px;
    line-height: 22.5px;
    color: var(--text1);
    border: 1px solid var(--border);
    border-bottom: none;
    border-radius: 8px 8px 0px 0px;
`
export const Card = styled.div`
    padding: 0 16px;
    display: flex;
    align-items: center;
    border: 1px solid var(--border);
    border-bottom: none;
    border-top: none;
    >div{
        margin-left: 8px;
        margin-top: 28px;
        >p{
            font-size: 16px;
            line-height: 21.6px;
            color: var(--text1);
        }
        >strong{
            font-size: 14px;
            color: var(--text2);
            font-weight: normal;
        }
        >.platinum{
            color: var(--green);
            font-weight: 600;
        }
    }
    
`
const iconsCss = css`
    width: 25px;
    height: 25px;
    opacity: 0.8;
`
export const LocationIcon = styled(HiOutlineLocationMarker)`
    ${iconsCss}
`
export const PlatinumIcon = styled(IoMdRibbon)`
    color: var(--green);
    ${iconsCss}
`
export const Reputacion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--border);
    border-bottom: none;
    border-top: none;

`
export const Caja = styled.ul`
    margin-top: 33px;
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 7px;
    padding: 0 4px;
    
    >li{
        width: 100%;
        height: 8px;

        &:nth-child(1){
        background-color: var(--reputacion1);
        }
        &:nth-child(2){
            background-color: var(--reputacion2);

        }
        &:nth-child(3){
            background-color: var(--reputacion3);

        }
        &:nth-child(4){
            background-color: var(--reputacion4);

        }
        &:nth-child(5){
            background-color: var(--reputacion5);
            height: 12px;

        }
    }
    
`
export const Row = styled.div`
    padding: 0 16px;
    display: flex;
    align-items: flex-start;
    border: 1px solid var(--border);
    border-bottom: none;
    border-top: none;
    >div{
        &:nth-child(1){
            margin-top: 10px;
            width: 35% ;
        }
        &:nth-child(2){
            margin-top: 10px;
            width: 25%;
        }
        &:nth-child(3){
            margin-top: 10px;
            width: 40%;
        }
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        text-align: center;
        >strong{
            font-size: 24px;
            font-weight: normal;
            height: 30px;
        }
        >span{
            font-size: 12px;
            line-height: 13px;
            color: var(--text1);
        }
        position: relative;
        & + div{
            &::before{
                content: "";
                position: absolute;
                top: 40%;
                transform: translate(-160%);
                height: 36px;
                border-left: 1px solid var(--border);
                padding: 2px;
            }
        }
    }
`
export const SupportIcon = styled(HiOutlineChatAlt2)`
    ${iconsCss}
`
export const ClockIcon = styled(HiOutlineClock)`
    ${iconsCss}
`
export const Link = styled.h5`
    padding: 16px;
    padding-top: 24px;
    color: var(--blue3);
    font-size: 14px;
    line-height: 18.9px;
    cursor: pointer;
    border: 1px solid var(--border);
    border-radius: 0px 0px 8px 8px;
    border-top: none;

`

