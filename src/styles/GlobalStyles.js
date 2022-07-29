import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
:root{
    --fondo: #edededed;
    --black: #000;
    --white: #fff;

    --text1: rgba(0,0,0,.8);
    --text2: rgba(0,0,0,.45);
    --text3: #666;

    --green: #00a650;
    --blue1: #1e6dff;
    --blue2: #2968c8;
    --blue3: #3483fa;
    --blue4: #D9E7FA;
    --yellow: #fff159;

    --border: #ddd;
    --etiqueta: #f5f5f5;
    --reputacion1: #fff0f0;
    --reputacion2: #fff5e8;
    --reputacion3: #fffcda;
    --reputacion4: #f1fdd7;
    --reputacion5: #39b54a;

    --family: 'Roboto', sans-serif;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

@media (prefers-reduced-motion: reduce) {
    * {
    animation: none;
    transition: none;
    }
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video , button, button {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  /* vertical-align: baseline; */
}

img , picture , video , iframe , figure{
    max-width: 100%;
    ${'' /* width: 100%; */}
    display: block;
    /* opcional */ object-fit: cover;        
    /* opcional */ object-position: center center;
}

a {
    ${'' /* display: block; */}
}
/* ... excepto los que se encuentran en párrafos */
p a {
    display: inline;
}

/* Quitamos los puntos de los <li> */
li {
    list-style-type: none;
}

/* Configuramos anclas suaves */
html {
    scroll-behavior: smooth;
    min-height: 100%;
    background-color: var(--fondo)
}

h1 , h2 , h3 , h4 , h5 , h6 , p ,span , a , strong , blockquote  , b , u , em {
    font-size: 1em;
    font-weight: inherit;
    font-style: inherit;
    text-decoration: none;
    color:inherit;
}

h1 , h2 , h3 , h4 , h5 , h6{
    color: var(--text1)
}

blockquote:before, blockquote:after, q:before, q:after {
	content: '';
	content: none;
}

form , input, textarea, select , button , label{
    font-family: var(--family);
    font-size: inherit;
    hyphens: auto;
    background-color: transparent;
    display: block;
    color:black;
    border: none;
    /* appearance: none; opcional  */
}

body {
    min-height  : 100vh;
    font-size   : 100%;
    font-family: var(--family);
    /* padding-top: 7.5rem;  */
    /* opcional */ line-height: 1.4em;
    /* opcional */ hyphens: auto;
    /* opcional */ font-smooth: always;
    /* opcional */ -webkit-font-smoothing: antialiased;
    /* opcional */ -moz-osx-font-smoothing: grayscale;
}


`