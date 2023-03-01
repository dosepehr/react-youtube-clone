import {
    MainLayout,
    Sidebar,
    Videos,
    VideoDetail,
    ChannelDetail,
    SearchFeed,
} from '../components';
import { Navigate } from 'react-router-dom';
export const routes = () => [
    {
        path: '/',
        element: <Navigate  to='/videos' />,
    },
    {
        path: '/videos',
        element: (
            <MainLayout>
                <Sidebar />
                <Videos />
            </MainLayout>
        ),
    },
    {
        path: 'video/:videoId',
        element: <VideoDetail />,
    },
    {
        path: '/channel/:id',
        element: <ChannelDetail />,
    },
    {
        path: '/search/:searchQuery',
        element: <SearchFeed />,
    },
];
