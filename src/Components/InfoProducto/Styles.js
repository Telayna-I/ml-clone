import styled from "styled-components";
import { AiOutlineHeart, AiFillStar } from 'react-icons/ai'










export const Container = styled.div`
    padding: 32px 0;
    margin: 40px 0;
    width: 40%;

    >.precio-cuotas{
        font-size: 18px;
        line-height: 18px;
        color: var(--text1);
    }
    >.medio-pago{
        font-size: 14px;
        line-height: 18.9px;
        color: var(--blue1);
        font-weight: 500;
    }
    >.azul{
        font-size: 14px;
        line-height: 21.6px;
        color: var(--blue3);
        cursor: pointer;
    }
    >.opciones-compra{
        margin-top: 2rem;
        margin-bottom: .5rem;
        font-size: 14px;
        line-height: 17.5px;
    }
`
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Estado = styled.p`
    font-size: 14px;
    line-height: 18.9px;
    color: var(--text2);
    margin-bottom: 8px;
`
export const HeartIcon = styled(AiOutlineHeart)`
    width: 25px;
    height: 25px;
    color: var(--blue3);
    margin-top: -0.5rem;
    cursor: pointer;
`
export const Title = styled.div`
    font-size: 22px;
    line-height: 25.96px;
    margin-bottom: 8px;
`
export const Rate = styled.div`
    display: flex;
    flex-direction: column;
`
export const StarsContainer = styled.div`
    display: flex;
    align-items: center;
    >span{
        margin-left: 8px;
        color: var(--blue3);
    }
`
export const Star = styled(AiFillStar)`
    font-size: 22px;
    color: var(--blue3);
`
export const Top = styled.div`
    margin-top: 10px;
    >a{
        font-size: 12px;
        line-height: 12px;
        padding: 4px 3px;
        background-color: #ff7733;
        color: var(--white);
        font-weight: 500;
        border-radius: 3px;
    }
    >span{
        font-size: 12px;
        line-height: 12px;
        color: var(--blue3);
    }
`
export const Price = styled.p`
    margin-top: 16px;
    font-size: 36px;
    line-height: 36px;
    
`
export const Color = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6px;
    >h5{
        margin-bottom: 5px;
        font-size: 16px;
        line-height: 21.6px;
    }
    >div{
        display: flex;
        justify-content: center;
        >img{
            width: 50px;
            height: 50px;
            padding: 2px;
            border: 1px solid var(--border);
            border-radius: 6px;
            object-fit: scale-down;
            margin: 1.5px;
            cursor: pointer;

            &:nth-child(1){
                border: 2px solid var(--blue3);
            }
        }
        
        >img:hover{
            border: 1px solid var(--blue3);
        }
    }
`
export const Info = styled.div`
    >h5{
        font-size: 14px;
        line-height: 17.5px;
        font-weight: 500;
        margin-top: 24px;
    }
    >ul{
        display: flex;
        flex-direction: column;
        padding: 12px 16px;
        /* border: 1px solid red; */
        >li{
            font-size: 14px;
            line-height: 20.2px;
            list-style: disc;
        }
    }
`