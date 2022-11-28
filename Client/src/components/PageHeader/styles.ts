import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-direction: column;

    background-color: var(--color-primary);


    .top-bar-container{
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin: 0 auto;

        width: 90%;
        color: var(--color-text-in-primary);
        padding: 1.4rem 0;

        & > img{
            width: 6rem;
        }

        .back{
        height: 3.2rem;
        transition: opacity .3s;

            &:hover{
                opacity: 0.5;
            }
        }
    }

    .content{
        position: relative;

        width: 90%;
        margin: 0 auto;
        margin: 3.2rem auto;

        strong{
            font-weight: 700;
            font-size: 3.6rem;
            font-family: 'Archivo', sans-serif;
            line-height: 4.2rem;
            color: var(--color-title-in-primary);
        }
    }

    .description{
        max-width: 30rem;
        margin-top: 2.4rem;

        line-height: 2.6rem;
        font-size: 1.6rem;
        color: var(--color-text-in-primary);
        font-family: 'Poppins', sans-serif;
    }

    @media(min-width: 700px){
        height: 250px;

        .top-bar-container{
            max-width: 1100px;
        }

        .content{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            flex: 1;
            margin: 0 auto;

            max-width: 740px;
            padding-bottom: 48px;

            strong{
                max-width: 350px;
            }
        }
    }
`;