import { useState } from "react";
import { LIKED_EVENTS_STORAGE_KEY } from "../utils/constant";

const checkIsEventLiked = (eventId: string): boolean => {
  const likedEventString = localStorage.getItem(LIKED_EVENTS_STORAGE_KEY);
  const likedEvents: string[] = likedEventString
    ? JSON.parse(likedEventString)
    : [];
  return likedEvents.includes(eventId);
};

const useLikedEvents = (eventId: string) => {
  const [isEventLiked, setIsEventLiked] = useState(checkIsEventLiked(eventId));

  const toggleEventLiked = () => {
    const likedEventString = localStorage.getItem(LIKED_EVENTS_STORAGE_KEY);
    const likedEvents: string[] = likedEventString
      ? JSON.parse(likedEventString)
      : [];
    const eventIndex = likedEvents.indexOf(eventId);

    if (eventIndex !== 1) {
      likedEvents.splice(eventIndex, 1);
      setIsEventLiked(false);
    } else {
      likedEvents.push(eventId);
      setIsEventLiked(true);
    }
    localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(likedEvents));
  };

  return {
    isEventLiked,
    toggleEventLiked,
  };
};

export default useLikedEvents;
