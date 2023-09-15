import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    width: 100vw;

    color: var(--color-text-in-primary);
    background-color: var(--color-primary);

    .logo-box{
        text-align: center;
        margin-bottom: 0rem;
    }

    .logo-box img{
        width: 30rem;
    }

    .logo-box h2{
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 4.6rem;
    }

    .landingImg{
        width: 100%;
        max-width: 50rem;
    }

    .button-box{
        display: flex;
        justify-content: center;
        margin: 3.2rem 0;
    }

    .button-box .buttons{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 20rem;
        height: 10.4rem;
        border-radius: 0.8rem;
       
        font-family: 'Archivo', sans-serif;
        font-weight: 700;
        text-decoration: none;
        color: var(--color-button-text);
    }

    .button-box .buttons:first-child{
        margin-right: 1.6rem;
    }

    .button-box .study{
        background-color: var(--color-primary-lighter);

        transition: background-color .3s;
        &:hover{
            background-color: var(--color-primary-light);
        }
    }

    .button-box .give-classes{
        background-color: var(--color-secundary);

        transition: background-color .3s;
        &:hover{
            background-color: var(--color-secundary-dark);
        }
    }

    .total-conections{
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.4rem;

        img{
            margin-left: 0.8rem;
        }
    }

    @media(max-width: 700px){
        .button-box .buttons{
            max-width: 15rem;
        }
    }

    @media(min-width: 700px){
        .page-content{
            display: grid;
        grid-template-rows: 350px 1fr;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-areas:
         'logo landing landing'
         'buttons buttons total'
        ;

        .logo-box{
            grid-area: logo;
            text-align: left;
            align-self: center;
            margin: 0;
        }

        .logo-box img{
            height: 100%;
        }

        .logo-box h2{
            text-align: initial;
            font-size: 3.6rem;
        }
        
        .landingImg{
            grid-area: landing;
            justify-self: end;
        }

        .button-box{
            grid-area: buttons;
            justify-self: flex-start;
        }

        .button-box .buttons{
            font-size: 2rem;
            gap: 2rem;
        }

        .total-conections{
            grid-area: total;

            justify-self: end;
        }
        }
        
    }
`;