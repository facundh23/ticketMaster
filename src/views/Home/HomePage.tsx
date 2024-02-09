import { useCallback, useEffect, useRef, useState } from 'react';
import useEventsResults from '../../data/data';
import styles from './Home.module.css';
import Events from '../../components/Events/Events';

interface Event {

}

interface Page {

}

interface EventsData {
    _embedded: {
        events: Event[]
    };
    page?: Page
}

interface UseEventsResultsReturn {
    data: EventsData;
    error: Error | null;
    isLoading: boolean;
    fetchEvents: (term: string) => void;
}

const HomePage = () => {
    const { data, error, isLoading, fetchEvents }: UseEventsResultsReturn = useEventsResults();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const containerRef = useRef<HTMLDivElement>(null);


    const events = data?._embedded?.events || [];
    const page = data?.page || {};


    const fetchMyEvents = useRef();
    fetchMyEvents.current();

    useEffect(() => {
        fetchMyEvents?.current()
    }, []);

    const handleSearchTerm = (term: string) => {
        fetchEvents(`&keyword=${term}`);
        setSearchTerm(term)
    };

    const handleClickPage = useCallback(({ selected }) => {
        fetchEvents(`&keyword=${searchTerm}&page=${selected}`)
    }, deps)

    if (isLoading) {
        return <div>Modal</div>
    }

    if (error) {
        return <div>Error</div>
    }
    return (
        <div className={styles.homePage} ref={containerRef}>
            <Events searchTerm={searchTerm} events={events} />
            HomePage
        </div>
    )
}

export default HomePage