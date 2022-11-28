import {  TextareaHTMLAttributes } from 'react';
import { Container } from './styles';

interface Textarea extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string,
    label: string
}

export const Textarea: React.FC<Textarea> = ({
    name,
    label,
    ...rest
}) => {
    return(
        <Container>
            <label htmlFor={name}>{label}</label>
            <textarea id={name}  {...rest}/>
        </Container>
    )
}