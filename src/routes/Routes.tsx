import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProfilePage from '../views/Profile/ProfilePage'


const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Home Page</div>,
        errorElement: <div>Error Page</div>
    },
    {
        path: 'detail/:eventId',
        element: <div>Detail</div>
    },
    {
        path: 'profile',
        element: <ProfilePage />,
        children: [
            {
                path: 'my-info',
                element: <div>My info</div>
            },
            {
                path: 'liked-events',
                element: <div>Liked Events</div>
            }
        ]
    }
])
const Routes = () => {
    return <RouterProvider router={router} />
}

export default Routes