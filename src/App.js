import { useEffect, useState } from 'react';
import {
    MainLayout,
    Navbar,
    Sidebar,
    Videos,
    ChannelDetail,
    SearchFeed,
    VideoDetail,
} from './components';
import { Route, Routes, Navigate } from 'react-router-dom';
function App() {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);
    const [channel, setChannel] = useState(null);
    const [openSideBar, setOpenSideBar] = useState(false);
    const [video, setVideo] = useState({});
    return (
        <>
            <Navbar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
            <Routes>
                <Route path='/' element={<Navigate to='/videos' />} />

                <Route
                    path='/videos'
                    element={
                        <MainLayout>
                            <Sidebar
                                openSideBar={openSideBar}
                                setOpenSideBar={setOpenSideBar}
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                            />
                            <Videos
                                selectedCategory={selectedCategory}
                                videos={videos}
                                setVideos={setVideos}
                            />
                        </MainLayout>
                    }
                />
                <Route
                    path='/channel/:id'
                    element={
                        <ChannelDetail
                            channel={channel}
                            setChannel={setChannel}
                            videos={videos}
                            setVideos={setVideos}
                        />
                    }
                />
                <Route
                    path='/search/:searchQuery'
                    element={
                        <SearchFeed videos={videos} setVideos={setVideos} />
                    }
                />
                <Route
                    path='video/:videoId'
                    element={
                        <VideoDetail
                            video={video}
                            setVideo={setVideo}
                            videos={videos}
                            setVideos={setVideos}
                        />
                    }
                />
            </Routes>
        </>
    );
}

export default App;

