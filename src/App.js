import { useState } from 'react';
import {
    MainLayout,
    Navbar,
    Sidebar,
    Videos,
    ChannelDetail,
    SearchFeed,
    VideoDetail,
} from './components';
import { mainContext } from './context';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
function App() {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);
    const [channel, setChannel] = useState(null);
    const [video, setVideo] = useState({});
    const [query, setQuery] = useState('');
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
                <Routes>
                    <Route path='/' element={<Navigate to='/videos' />} />
                    <Route
                        path='/videos'
                        element={
                            <MainLayout>
                                <Sidebar />
                                <Videos />
                            </MainLayout>
                        }
                    />
                    <Route path='video/:videoId' element={<VideoDetail />} />
                    <Route path='/channel/:id' element={<ChannelDetail />} />
                    <Route
                        path='/search/:searchQuery'
                        element={<SearchFeed />}
                    />
                </Routes>
            </mainContext.Provider>
        </HelmetProvider>
    );
}

export default App;

