import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProfilePage from '../views/Profile/ProfilePage'
import DetailPage from '../views/Detail/DetailPage'
import MyInfo from '../views/Profile/components/MyInfo/MyInfo'
import LikedPage from '../views/Profile/components/LikedEvents/LikedPage'
import HomePage from '../views/Home/HomePage'


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <div>Error Page</div>
    },
    {
        path: 'detail/:eventId',
        element: <DetailPage />
    },
    {
        path: 'profile',
        element: <ProfilePage />,
        children: [
            {
                path: 'my-info',
                element: <MyInfo />
            },
            {
                path: 'liked-events',
                element: <LikedPage />
            }
        ]
    }
])
const Routes = () => {
    return <RouterProvider router={router} />
}

export default Routes