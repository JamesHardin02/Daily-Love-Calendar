import Container from '@mui/material/Container';
import Calendar from '../components/Calendar';
import calendars from '../components/Calendar/calendars.json'


export default function Individual() {
    return (
        <Container 
        style={{
        minWidth: "100%",
        height: "150vh",
        }}
        >
            {calendars.map((work) => (
            <Calendar key={work.id} name={work.name} calendar_img={work.calendar_img} quote={work.quote} />
            ))}
        </Container> 
    )
}
