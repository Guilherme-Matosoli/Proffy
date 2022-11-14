import { ButtonArea, Container, Content } from "./styles";
import { Link } from "react-router-dom";

import logo from '../../assets/images/logo.svg';
import landingImage from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleheart from '../../assets/images/icons/purple-heart.svg';

export const Landing = () => {
    return(
        <Container>
            <Content>
                <div className="container">
                    <div className="info">
                        <img className="logo" src={logo} alt="Proffy logo" />
                        <h2 className="desc">Sua plataforma de estudos online.</h2>
                    </div>
                    <img src={landingImage} alt="Pessoas se conectando" className="LandingImage" />
                </div>
                <ButtonArea>
                    <div className="buttonContainer">
                        <Link className="study" to='/study'>
                            <img className="study-icon" src={studyIcon} alt="ícone de livro" />
                            Estudar
                        </Link>
                        <Link className="give-classes" to="/give-classes">
                            <img className="give-classes-icon" src={giveClassesIcon} alt="ícone de quadro" />
                            Dar aulas
                        </Link>
                    </div>
                    <span className="connectionsInfo">
                        Total de 0 conexões já realizadas
                        <img src={purpleheart} alt="Coração roxo" />
                    </span>
                </ButtonArea>
            </Content>
        </Container>
    )
}