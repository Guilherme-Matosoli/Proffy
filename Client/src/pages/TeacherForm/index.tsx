import { Input } from "../../components/Input";
import { PageHeader } from "../../components/PageHeader";
import { Container } from "./styles";

import warningIcon from '../../assets/images/icons/warning.svg';
import { Textarea } from "../../components/Textarea";
import { Select } from "../../components/Select";

import { useState } from "react";

export const TeacherForm = () => {

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ]);
    };

    return(
        <Container>
            <PageHeader
             description="O primeiro passo é preencher esse formulário de inscrição." 
             backLink="/" 
             text="Que incrível que você quer dar aulas!"
             />

            <main className="content">
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input
                    autoComplete="off" 
                    name="name" 
                    label="Nome completo"
                    />

                    <Input
                    autoComplete="off" 
                    name="avatar" 
                    label="Link da sua foto"
                    />

                    <Input
                    autoComplete="off" 
                    name="whatsapp" 
                    label="Whatsapp"
                    />

                    <Textarea 
                    name="bio"
                    label="Biografia"
                    />

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                    autoComplete="off" 
                    name="subject" 
                    label="Matéria"
                    options={[
                        { value: 'Artes', label: 'Artes' },
                        { value: 'Biologia', label: 'Biologia' },
                        { value: 'Ciências', label: 'Ciências' },
                        { value: 'Matemática', label: 'Matemática' },
                        { value: 'Física', label: 'Física' },
                        { value: 'Química', label: 'Química' },
                        { value: 'Português', label: 'Artes' }
                    ]}
                    />

                    <Input
                    autoComplete="off" 
                    name="cost" 
                    label="Link da sua foto"
                    />

                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button onClick={addNewScheduleItem} type="button">
                            + Novo horário
                        </button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                autoComplete="off" 
                                name="week_day" 
                                label="Dia da semana"
                                options={[
                                    { value: '0', label: 'Domingo' },
                                    { value: '1', label: 'Segunda-feira' },
                                    { value: '2', label: 'Terça-feira' },
                                    { value: '3', label: 'Quarta-feira' },
                                    { value: '4', label: 'Quinta-feira' },
                                    { value: '5', label: 'Sexta-feira' },
                                    { value: '6', label: 'Sábado' }
                                ]}
                                />

                                <Input
                                name="from" 
                                label="Das"
                                type="time"
                                />
                                
                                <Input
                                name="to" 
                                label="Até"
                                type="time"
                                />
                            </div>
                        )
                            })}

                    
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Ícone de aviso" />
                        Importante! <br/>
                        Preencha todos os dados
                    </p>

                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>

        </Container>
    )
}