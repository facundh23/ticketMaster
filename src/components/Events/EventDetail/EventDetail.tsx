
import useLikedEvents from '../../../hooks/useLikedEvents'
import {CiHeart} from 'react-icons/ci';
import {FaHeart} from 'react-icons/fa';
import styles from './EventDetail.module.css'

interface Props {
    name:string;
    id:string;
    images:string;
    info:string;
    onEventClick:(id:string) => void;
}

const EventDetail = ({name,id, images, info, onEventClick}:Props) => {
    const { isEventLiked, toggleEventLiked } = useLikedEvents(id);

    const handleSeeMoreClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        onEventClick(id);
    }

    const handleHearthClick = () => {
        toggleEventLiked();
    }
    return (
        <div className={styles.eventItemContainer}>
            <div className={styles.imageContainer}>
                {
                    isEventLiked ?
                    <FaHeart className={styles.hearthImage} onClick={handleHearthClick} />
                    :
                    <CiHeart className={styles.hearthImage} onClick={handleHearthClick} />
                }
                <img src={images} alt='Artist Image' width={200} height={200} />
            </div>
            <div className={styles.eventInfoContainer}>
                <h4 className={styles.eventInfoTitle}>{name}</h4>
                <p className={styles.eventInfoParagraph}>{info}</p>
                <button className={styles.eventInfoBtn} onClick={handleSeeMoreClick}>
                    More Info
                </button>
            </div>
        </div>
    )
}

export default EventDetail