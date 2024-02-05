import useEventsResults from '../../data/data';
import EventList from './EventList/EventList';

const Events = () => {

    const { data, error, isLoading, fetchEvents } = useEventsResults();

    console.log(data)
    return (
        <EventList />
    )
}

export default Events