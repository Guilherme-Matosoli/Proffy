import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    label{
        font-size: 1.4rem;
        font-family: 'Poppins', sans-serif;

        color: var(--color-text-complement);
    }

    textarea{
        width: 100%;
        height: 16rem;
        min-height: 8rem;

        margin-top: .8rem;
        border-radius: .8rem;
        background-color: var(--color-input-background);
        resize: vertical;

        border: 1px solid var(--color-line-in-white);
        outline: 0;
        padding: 1.2rem 1.6rem;

        font-size: 1.6rem;
        font-family: 'Archivo', sans-serif;
    }

    & + &{
        margin-top: 1.4rem;
    }

    &:focus-within::after{
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 6px;

        width: calc(100% - 3.2rem);
        height: 2px;

        content: '';
        background-color: var(--color-primary-light);

    }

    @media(min-width: 700px){
        & + & {
            margin-top: 0;
        }
    }
`;