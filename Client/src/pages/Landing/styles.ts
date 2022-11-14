import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: var(--color-background);
    padding: 1rem;
`;

export const Content = styled.main`
    width: 100%;
    height: auto;

    margin-top: 5rem;

    .container{
        display: flex;
        align-items: center;
        gap: 14rem;
    }

    .info{
        width: 43.5rem;
        height: 23rem;

        margin-left: 14.5rem;

        .logo{
        width: 43.5rem;
        }

        .desc{
            color: var(--color-text-in-primary);
            font-size: 3.6rem;
        }
    
    }

    .LandingImage{
        width: 60rem;
    }

`;

export const ButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: auto;

    margin-top: 5rem;

    .buttonContainer{
        display: flex;
        gap: 1.6rem;

        /* background-color: blue; */
        margin-left: 14.5rem;
        width: auto;
    }

    .study{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.4rem;

        text-decoration: none;
        font-size: 2.4rem;
        color: var(--color-button-text);

        background-color: var(--color-primary-lighter);
        width: 30rem;
        padding: 3.2rem 6.4rem;
        border-radius: .8rem;

        transition: background-color .3s;
        &:hover{
            background-color: var(--color-primary-light);
        }

        .study-icon{
            width: 4rem;
        }
    }

    .give-classes{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.4rem;

        text-decoration: none;
        font-size: 2.4rem;
        color: var(--color-button-text);

        background-color: var(--color-secundary);
        width: 30rem;
        padding: 3.2rem 6.4rem;
        border-radius: .8rem;

        transition: background-color .3s;
        &:hover{
            background-color: var(--color-secundary-dark);
        }

        .give-classes-icon{
            width: 4rem;
        }

    }

    .connectionsInfo{
        display: flex;
        align-items: center;
        gap: .5rem;

        color: var(--color-text-in-primary);
        font-size: 1.2rem;

        margin-right: 10rem;
    }
`;