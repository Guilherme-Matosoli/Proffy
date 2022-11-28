import { Container } from './styles';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

import { Link } from 'react-router-dom';


export const Landing = () => {
    return(
        <Container>
            <div className="page-content">
                <div className="logo-box">
                    <img src={logoImg} alt='Logo Proffy' />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img
                className='landingImg'
                src={landingImg}
                alt=""
                />

                <div className="button-box">
                    <Link className='buttons study' to='/study'>
                        <img src={studyIcon} alt="Livro" />
                        Estudar
                    </Link>

                    <Link className='buttons give-classes' to='/give-classes'>
                        <img src={giveClassesIcon} alt="Quadro" />
                        Dar aulas
                    </Link>
                </div>

                <span className="total-conections">
                    Total de 0 conexões já realizades.
                    <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>
            </div>
        </Container>
    )
};