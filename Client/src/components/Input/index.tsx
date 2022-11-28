import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string,
    label: string
}

export const Input: React.FC<InputProps> = ({
    name,
    label,
    ...rest
}) => {
    return(
        <Container>
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name}  {...rest}/>
        </Container>
    )
}