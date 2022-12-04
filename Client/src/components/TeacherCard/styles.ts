import styled from "styled-components";

export const Container = styled.article`
    background-color: var(--color-box-base);
    border: 1px solid var(--color-line-in-white);
    border-radius: .8rem;

    margin-top: 2.4rem;
    overflow: hidden;

    .top-bar{
        display: flex;
        align-items: center;

        padding: 3.2rem 2rem;

        img{
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
        }

        div{
            display: flex;
            flex-direction: column;

            margin-left: 2.4rem;

            strong{
                font-weight: 700;
                font-size: 2.4rem;
                font-family: 'Archivo', sans-serif;
                color: var(--color-text-title);
            }

            span{
                font-size: 1.6rem;

                margin-top: .4rem;
            }
        }
    }

    & > p {
        padding: 0 2rem;
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
        line-height: 2.7rem;
    }

    .bottom-bar{
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 3.2rem 2rem;
        margin-top: 3.2rem;

        background-color: var(--color-box-footer);
        border-top: 1px solid var(--color-line-in-white);

        p{
            font-family: 'Poppins', sans-serif;

            strong{
                display: block;

                font-family: 'Archivo', sans-serif;
                font-size: 1.6rem;
                color: var(--color-primary);
            }
        }

        #whatsapp{
            text-decoration: none;
        }

        button{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            width: 20rem;
            height: 5.6rem;

            background-color: var(--color-secundary);
            color: var(--color-button-text);

            border: none;
            border-radius: .8rem;
            cursor: pointer;

            font-weight: 700;
            font-size: 1.4rem;
            font-family: 'Archivo', sans-serif;

            transition: background-color .3s;
            &:hover{
                background-color: var(--color-secundary-dark);
            }

            
        }
    }

    @media(min-width: 700px){
        .top-bar,
        .bottom-bar{
            padding: 3.2rem;
        }

        & > p {
            padding: 0 3.2rem;
        }

        .bottom-bar p strong{
            display: inline;
            margin-left: 1.6rem;
        }

        .bottom-bar button{
            width: 24.5rem;

            font-size: 1.6rem;
            justify-content: center;
        }
    }
`;