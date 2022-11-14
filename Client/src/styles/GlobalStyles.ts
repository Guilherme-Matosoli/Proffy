import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 10px;
    }

    a,
    button,
    h1,
    h3,
    strong{
        font-family: 'Archivo', sans-serif;
    }

    h2,
    label,
    p,
    span{
        font-family: 'Poppins', sans-serif
    }

    :root {
  --color-background: #8257E5;
  --color-primary-lighter: #9871F5;
  --color-primary-light: #916BEA;
  --color-primary: #F0F0F7;
  --color-primary-dark: #774DD6;
  --color-primary-darker: #6842C2;
  --color-secundary: #04D361;
  --color-secundary-dark: #04BF58;
  --color-title-in-primary: #FFFFFF;
  --color-text-in-primary: #D4C2FF;
  --color-text-title: #32264D;
  --color-text-complement: #9C98A6;
  --color-text-base: #6A6180;
  --color-line-in-white: #E6E6F0;
  --color-input-background: #F8F8FC;
  --color-button-text: #FFFFFF;
  --color-box-base: #FFFFFF;
  --color-box-footer: #FAFAFC;

  font-size: 60%;
}
`;

