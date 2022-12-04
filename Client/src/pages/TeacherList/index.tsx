import { PageHeader } from "../../components/PageHeader";
import { Container } from "./styles";
import { TeacherCard } from "../../components/TeacherCard";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";

import { FormEvent, useState, useEffect } from "react";
import { api } from "../../services/api";

interface TeachersType{
    avatar: string,
    bio: string,
    cost: number,
    id: number,
    name: string,
    subject: string,
    user_id: number,
    whatsapp: string
};

export const TeacherList = () => {
    const [teachers, setTeachers] = useState<TeachersType[]>([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent){
        e.preventDefault();

        const response = await api.get('/classes', {
            params:{
                subject,
                week_day,
                time
            }
        });

        setTeachers(response.data)
    };
 
    useEffect(() => {
        const conditions = subject && week_day && time;
        const submitButton = document.getElementById('submitButton') as HTMLButtonElement | null;

        if(!conditions || !submitButton) return;

        conditions && submitButton.click();

    }, [subject, week_day, time]);
    

    return(
        <Container>
            <PageHeader backLink="/" text="Esses são os proffys disponíveis">
                <form id="search-teachers" onSubmit={searchTeachers}>
                <Select
                    autoComplete="off" 
                    onChange={e => setSubject(e.target.value)}
                    value={subject}
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

                <Select
                    autoComplete="off" 
                    name="week_day" 
                    value={week_day}
                    onChange={e => setWeekDay(e.target.value)}
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
                    autoComplete="off" 
                    type="time" 
                    value={time}
                    onChange={(e) => {
                        setTime(e.target.value)
                    }}
                    
                    name="time" 
                    label="Hora:"
                    />

                    <button id="submitButton" type="submit"></button>
                </form>
            </PageHeader>

            <main className="content">
                {teachers?.map((teacher) => {
                    return (
                        <TeacherCard 
                        key={teacher.id}
                        avatar={teacher.avatar}
                        id={teacher.id}
                        user_id={teacher.user_id}
                        bio={teacher.bio}
                        cost={teacher.cost}
                        name={teacher.name}
                        subject={teacher.subject}
                        whatsapp={teacher.whatsapp}
                        />
                    )
                })}
            </main>
        </Container>
    )
}