import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    #search-teachers{
        margin-top: 3.2rem;

        label{
            font-family: 'Poppins', sans-serif;
            color: var(--color-text-in-primary);
        }
        
        .inputBlock{
            position: relative;

            label{
                font-size: 1.4rem;
            }

            input{
                width: 100%;
                height: 5.6rem;

                margin-top: .8rem;
                border-radius: .8rem;
                background-color: var(--color-input-background);

                border: 1px solid var(--color-line-in-white);
                outline: 0;
                padding: 1.6rem;

                font-size: 1.6rem;
                font-family: 'Archivo', sans-serif;
            }
        }

        .inputBlock + .inputBlock{
            margin-top: 1.4rem;
        }

        #submitButton{
            visibility: hidden;
            opacity: 0;
            pointer-events: none;
            position: absolute;
        }

        .inputBlock:focus-within::after{
            position: absolute;
            left: 1.6rem;
            right: 1.6rem;
            bottom: 0;

            width: calc(100% - 3.2rem);
            height: 2px;

            content: '';
            background-color: var(--color-primary-light);
        }
    }

    .content{
        margin: 3.2rem auto;
        width: 90%;
    }

    @media(min-width: 700px){
        width: 100%;

        #search-teachers{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 16px;
            
            position: absolute;
            bottom: -38px;
        }

        #search-teachers .inputBlock + .inputBlock{
            margin-top: 0;
        }

        .content{
            padding: 3.2rem 0;
            max-width: 740px;
            margin: 0 auto;
        }
    }
`;