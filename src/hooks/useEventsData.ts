import { useState } from "react";

const useEventData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState();

    const dataKey = import.meta.env.VITE_API_KEY;

    const fetchEvents = async (params:string) => {
        try {
            const resp = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${dataKey}&countryCode=us${params?.length ? params : ""}`);
            const data = await resp.json();
            console.log(data);
            setData(data);
            setIsloading(false)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        events: data?._embedded?.events || [],
        page: data?.page || {},
        isLoading, 
        error,
        fetchEvents
    }
}

export default useEventData;