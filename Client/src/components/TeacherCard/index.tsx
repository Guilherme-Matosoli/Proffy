import { Container } from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import { api } from '../../services/api';

interface TeacherCardProps{
    avatar?: string,
    bio: string,
    cost: number,
    id?: number,
    name: string,
    subject: string,
    user_id?: number,
    whatsapp: string
}

export const TeacherCard: React.FC<TeacherCardProps> = (props) => {
    function handleCreateConnection(){
        api.post('/connections', {
            user_id: props.id
        })
    }

    return(
        <Container>
            <header className='top-bar'>
                <img crossOrigin="anonymous" src={props.avatar} alt={props.name} />
                <div>
                    <strong>{props.name}</strong>
                    <span>{props.subject}</span>
                </div>
            </header>

            <p className='content'>
                {props.bio}
            </p>

            <footer className='bottom-bar'>
                <p>
                    Preço/hora:
                    <strong>R${props.cost}</strong>
                </p>
                <a onClick={handleCreateConnection} target="__blank" id='whatsapp' href={`https://api.whatsapp.com/send?phone=55${props.whatsapp}&text=Ol%C3%A1%2C%20${props.name}!%20Vim%20pelo%20proffy`}>
                    <button type='button'>
                        <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                    </button>
                </a>
            </footer>
        </Container>
    )
}