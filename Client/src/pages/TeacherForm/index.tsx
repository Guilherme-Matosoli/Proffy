import { Input } from "../../components/Input";
import { PageHeader } from "../../components/PageHeader";
import { Container } from "./styles";

import warningIcon from '../../assets/images/icons/warning.svg';
import { Textarea } from "../../components/Textarea";
import { Select } from "../../components/Select";

import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { api } from "../../services/api";

export const TeacherForm = () => {
    const history = useNavigate();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    const [weekDay, setWeekDay] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');


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

    function handleCreateClass(e: FormEvent){
        e.preventDefault();

        api.post('/classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso')

            history('/');
        }).catch(() =>{
            alert('Erro no cadastro')
        })

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        })

    };

    function setScheduleItemsValue(position: number, field: string, value: string){
        const updatedScheduleItems = scheduleItems.map( (scheduleItem, index) => {
            if(index === position){
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;

            
        });
        setScheduleItems(updatedScheduleItems);
    };

    return(
        <Container>
            <PageHeader
             description="O primeiro passo ?? preencher esse formul??rio de inscri????o." 
             backLink="/" 
             text="Que incr??vel que voc?? quer dar aulas!"
             />

            <main className="content">
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            autoComplete="off" 
                            name="name" 
                            label="Nome completo"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />

                        <Input
                            autoComplete="off" 
                            name="avatar" 
                            label="Link da sua foto"
                            value={avatar}
                            onChange={e => setAvatar(e.target.value)}
                        />

                        <Input
                            autoComplete="off" 
                            name="whatsapp" 
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value)}
                        />

                        <Textarea 
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={e => setBio(e.target.value)}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                            autoComplete="off" 
                            name="subject" 
                            label="Mat??ria"
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ci??ncias', label: 'Ci??ncias' },
                                { value: 'Matem??tica', label: 'Matem??tica' },
                                { value: 'F??sica', label: 'F??sica' },
                                { value: 'Qu??mica', label: 'Qu??mica' },
                                { value: 'Portugu??s', label: 'Portugues' }
                            ]}
                        />

                        <Input
                            autoComplete="off" 
                            name="cost" 
                            label="Custo de aula por hora"
                            value={cost}
                            onChange={e => setCost(e.target.value)}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>
                            Hor??rios dispon??veis

                            <button onClick={addNewScheduleItem} type="button">
                                + Novo hor??rio
                            </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                    autoComplete="off" 
                                    name="week_day" 
                                    value={scheduleItem.week_day}
                                    label="Dia da semana"
                                    onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value)}
                                    options={[
                                        { value: '0', label: 'Domingo' },
                                        { value: '1', label: 'Segunda-feira' },
                                        { value: '2', label: 'Ter??a-feira' },
                                        { value: '3', label: 'Quarta-feira' },
                                        { value: '4', label: 'Quinta-feira' },
                                        { value: '5', label: 'Sexta-feira' },
                                        { value: '6', label: 'S??bado' }
                                    ]}
                                    />

                                    <Input
                                    name="from"
                                    value={scheduleItem.from} 
                                    label="Das"
                                    type="time"
                                    onChange={e => setScheduleItemsValue(index, 'from', e.target.value)}
                                    />
                                    
                                    <Input
                                    name="to" 
                                    value={scheduleItem.to}
                                    label="At??"
                                    type="time"
                                    onChange={e => setScheduleItemsValue(index, 'to', e.target.value)}
                                    />
                                </div>
                            )
                                })}

                        
                    </fieldset>
                

                    <footer>
                        <p>
                            <img src={warningIcon} alt="??cone de aviso" />
                            Importante! <br/>
                            Preencha todos os dados
                        </p>

                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>

        </Container>
    )
}