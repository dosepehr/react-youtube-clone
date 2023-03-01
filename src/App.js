import { useState } from 'react';
import { Navbar } from './components';
import { mainContext } from './context';
import { Route, Routes, Navigate, useRoutes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { routes } from './routes/routes';
function App() {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);
    const [channel, setChannel] = useState(null);
    const [video, setVideo] = useState({});
    const [query, setQuery] = useState('');
    const router = useRoutes(routes());
    return (
        <HelmetProvider>
            <mainContext.Provider
                value={{
                    selectedCategory,
                    setSelectedCategory,
                    videos,
                    setVideos,
                    setChannel,
                    channel,
                    video,
                    setVideo,
                    query,
                    setQuery,
                }}
            >
                <Helmet>
                    <title>YouTube</title>
                </Helmet>
                <Navbar />
                {router}
            </mainContext.Provider>
        </HelmetProvider>
    );
}

export default App;
