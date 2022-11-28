import { Container } from "./styles";
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
    
interface PageHeaderProps{
    backLink: string,
    text: string,
    children?: React.ReactNode,
    description?: string
};

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <Container>
            <div className="top-bar-container">
                <Link className="back" to={props.backLink}>
                    <img src={backIcon} alt="Seta para voltar" />
                </Link>

                <img src={logoImg} alt="Proffy" />
            </div>
            <div className="content">
                <strong>
                    {props.text}
                </strong>

                { props.description && <p className="description">{props.description}</p> }

                {props.children}
            </div>
        </Container>
    )
}