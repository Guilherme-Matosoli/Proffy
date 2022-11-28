import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    div.content{
        margin-bottom: 6.4rem;
    }

    main.content{
        width: 100%;
        max-width: 74rem;
        background-color: var(--color-box-base);
        border-radius: .8rem;

        margin: -2.5rem auto 2.5rem;
        padding-top: 6.4rem;
        overflow: hidden;

        fieldset{
            display: flex;
            flex-direction: column;
            gap: 2.4rem;

            border: none;
            padding: 0 2.4rem;

            legend{
                display: flex;
                align-items: center;
                justify-content: space-between;

                font-weight: 700;
                font-family: 'Archivo', sans-serif;
                font-size: 2.4rem;
                color: var(--color-text-title);

                margin-bottom: 2.4rem;
                width: 100%;

                border-bottom: 1px solid var(--color-line-in-white);

                button{
                    background: none;
                    border: none;

                    color: var(--color-primary);
                    font-family: 'Archivo', sans-serif;
                    font-size: 1.6rem;
                    font-weight: 700;

                    cursor: pointer;
                    transition: color .3s;

                    &:hover{
                        color: var(--color-primary-dark);
                    }
                }
            }
            
        }

        fieldset + fieldset {
            margin-top: 6.4rem;
        }

        footer{
            padding: 4rem 2.3rem;
            margin-top: 6.4rem;

            background-color: var(--color-border-footer);
            border-top: 1px solid var(--color-line-in-white);

            p{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2rem;

                font-family: 'Poppins', sans-serif;
                font-size: 1.4rem;
                line-height: 2.4rem;
                color: var(--color-text-component);
            }

            button{
                display: flex;
                align-items: center;
                justify-content: center;

                width: 100%;
                height: 5.6rem;

                background-color: var(--color-secundary);
                border: none;
                border-radius: .8rem;

                font-family: 'Archivo', sans-serif;
                font-weight: 700;
                font-size: 1.6rem;
                color: var(--color-background);

                cursor: pointer;
                transition: background-color .3s;
                &:hover{
                    background-color: var(--color-secundary-dark);
                }
            }
        }
    }

    @media(min-width: 700px){
        max-width: 100vw;

        main.content{
            fieldset{
                padding: 0 6.4rem;
            }

            .schedule-item{
                display: grid;
                grid-template-columns: 2fr 1fr 1fr;
                column-gap: 1.6rem;
            }

            footer{
                display: flex;
                align-items: center;
                justify-content: space-between;

                padding: 4rem 6.4rem;

                p{
                    justify-content: space-between;
                }

                button{
                    width: 20rem;

                    margin-top: 0;
                }
            }
        }
    }
`;