import { Outlet } from 'react-router-dom'
import styles from './Profile.module.css'

const ProfilePage = () => {
    return (
        <>
            <h1>Profile Page</h1>
            <Outlet />

        </>
    )
}

export default ProfilePage