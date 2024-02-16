
import { useNavigate } from 'react-router-dom';
import EventDetail from './EventDetail/EventDetail';

const Events = ({ searchTerm, events }) => {

    const navigate = useNavigate();

    const handleEventItemClick = (id:string) => {
        navigate(`/detail/${id}`)
    }

    const renderEvents = () => {
        let filteredEvents = events;

        if (searchTerm.length > 0) {
            filteredEvents = filteredEvents.filter((term) => term.name.toLowerCase().includes(searchTerm));
        }

        return filteredEvents.map((event) => (
            <EventDetail key={event.id} {...event} />
        ))
    }


    return (
        <>
            <h2>Events</h2>
            {renderEvents()}
        </>
    )
}

export default Events