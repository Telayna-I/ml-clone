import styled from "styled-components";

export const Section = styled.div`
    padding: 32px 16px;
    margin: 0 16px;
    >h5{
        font-size: 16px;
        font-weight: 500;
        padding: 16px;
        border: 1px solid var(--border);
        border-radius: 8px 8px 0px 0px ;
        border-bottom: none;
    }
    .head{
        display: flex;
        justify-content: space-between;
        padding:  8px 16px;
        border: 1px solid var(--border);
        border-bottom: none;

        .precio{
            font-size: 20px;
            font-weight: bold;
        }
        .etiqueta{
            background-color: var(--etiqueta);
            color: var(--text2);
            font-size: 12px;
            padding: 2px 8px;
            border-radius: 15px;
            font-weight: 500;
        }
    }
    >ul{
        padding: 0 16px;
        border: 1px solid var(--border);
        border-top: none;
        border-bottom: none;
        .cuotas{
            font-size: 14px;
            color: var(--text1);
            margin-bottom: 4px;
        }
        .envio-gratis{
            font-size: 14px;
            font-weight: 500;
            color: var(--green);
            margin-bottom: 12px;
        }
        .seis-cuotas{
            font-size: 14px;
            font-weight: 500;
            color: var(--green);
        }
        .tienda{
            font-size: 12px;
            color: var(--text1);
            .vendedor{
                color: var(--blue1);
                cursor: pointer;
                margin-bottom: 2px;
            }
        }
        .ventas{
            font-size: 12px;
            color: var(--text1);
            margin-bottom: 3px;
        }
        
        .factura-a{
            font-size: 12px;
            color: var(--text2);
            margin-bottom: 16px;

        }
        .buttons{
            display: flex;
            padding-bottom: 16px;
            .comprar{
                margin-right: 8px;
                background-color: var(--blue3);
                width: 133px;
                height: 32px;
                padding: 0 12px;
                line-height: 32px;
                font-weight: 500;
                border-radius: 5px;
                transition: all 300ms ease-in-out;
                cursor: pointer;
                >span{
                    font-size: 12px;
                    color: var(--white);
                    padding: 1px 8px 3px 8px;
                    margin: 0 6px;
                }
            }
            .comprar:hover{
                background-color: var(--blue2) ;
            }
            .add-carrito{
                margin-right: 8px;
                background-color: var(--blue4);
                width: 133px;
                height: 32px;
                padding: 1 12px;
                font-weight: 500;
                line-height: 32px;
                border-radius: 5px;
                transition: all 300ms ease-in-out;
                cursor: pointer;
                >span{
                    font-size: 12px;
                    color: var(--blue1);
                    padding: 1px 8px 3px 8px;
                }
            }
        }

    }
    .mas-opciones{
        padding: 16px;
        font-size: 14px;
        line-height: 18px;
        border: 1px solid var(--border);
        border-radius: 0px 0px 8px 8px;
        /* border-top: none; */
        color: var(--blue1);
        cursor: pointer;
        transition: all 300ms ease-in-out;
    }

    .mas-opciones:hover{
        color: var(--blue2);
    }

`