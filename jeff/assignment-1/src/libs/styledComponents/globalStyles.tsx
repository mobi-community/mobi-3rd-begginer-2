import { createGlobalStyle } from 'styled-components'
import { FONT_SIZE } from './tokens'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    html {
        font-size: 62.5%;

        @media screen and (max-width:820px) {
            font-size: 50%;
        }
    }

    ul, li {
        list-style: none;
    }

    h1 {
        font-size:${FONT_SIZE.huge};
    }

    h2 {
        font-size:${FONT_SIZE.big};
        font-weight: bold;
    }

    h2 {
        font-size:${FONT_SIZE.large};
        font-weight: bold;
    }

    h3 {
        font-size:${FONT_SIZE.medium};
        font-weight: bold;
    }

    h4 {
        font-size:${FONT_SIZE.small};
        font-weight: bold;
    }

    button {
        border: none;
        outline: none;
    }

    input {
        outline: none;
    }

    textarea {
        font-size:${FONT_SIZE.small};
    }

    p, div, span {
        font-size:${FONT_SIZE.small};
    }
`