import { useState } from 'react';
import {
    MainLayout,
    Navbar,
    Sidebar,
    Videos,
    ChannelDetail,
} from './components';
import { Route, Routes, Navigate } from 'react-router-dom';
function App() {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [showSidebar, setShowSidebar] = useState(false);
    const [videos, setVideos] = useState([]);
    const [channel, setChannel] = useState(null);
    const [openSideBar, setOpenSideBar] = useState(false);
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
                                showSidebar={showSidebar}
                                setShowSidebar={setShowSidebar}
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
            </Routes>
        </>
    );
}

export default App;

