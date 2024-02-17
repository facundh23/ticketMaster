import { create } from "zustand";

const VITE_APY_KEY = import.meta.env.VITE_API_KEY;
const useEventsResults = create((set) => ({
  data: [],
  error: null,
  isLoading: false,
  fetchEvents: async (params: string) => {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${VITE_APY_KEY}&countryCode=us${
          params?.length ? params : ""
        }`
      );
      const data = await response.json();
      
      await set(() => ({ data, isLoading: false }));
    } catch (error) {
      await set(() => ({ error, isLoading: false }));
    }
  },
}));

export default useEventsResults;
