import { Container } from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


export const TeacherCard = () => {
    return(
        <Container>
            <header className='top-bar'>
                <img src="https://avatars.githubusercontent.com/u/97265791?v=4" alt="Guilherme Matosoli" />
                <div>
                    <strong>Guilherme Matosoli</strong>
                    <span>Física</span>
                </div>
            </header>

            <p className='content'>
            Entusiasta das melhores tecnologias de química avançada.
            <br/> <br/> 
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer className='bottom-bar'>
                <p>
                    Preço/hora:
                    <strong>R$20,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </Container>
    )
}