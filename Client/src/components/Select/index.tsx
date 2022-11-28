import { SelectHTMLAttributes } from 'react';
import { Container } from './styles';

interface OptionsProps{
    value: string,
    label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string,
    label: string,
    options: OptionsProps[]
}

export const Select: React.FC<SelectProps> = ({
    name,
    label,
    options,
    ...rest
}) => {
    return(
        <Container>
            <label htmlFor={name}>{label}</label>
            <select defaultValue='' id={name}  {...rest}>
                <option value="" disabled hidden>Selecione uma opção</option>

                { options.map( option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                }) }

            </select>
        </Container>
    )
}