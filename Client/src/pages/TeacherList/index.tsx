import { PageHeader } from "../../components/PageHeader";
import { Container } from "./styles";
import { TeacherCard } from "../../components/TeacherCard";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";

export const TeacherList = () => {
    return(
        <Container>
            <PageHeader backLink="/" text="Esses são os proffys disponíveis">
                <form id="search-teachers">
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
                    autoComplete="off" 
                    type="time" 
                    name="time" 
                    label="Hora:"
                    />
                </form>
            </PageHeader>

            <main className="content">
                <TeacherCard />
            </main>
        </Container>
    )
}