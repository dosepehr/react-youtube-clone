import { useState } from 'react';
import { MainLayout, Navbar, Sidebar, Videos } from './components';
function App() {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [showSidebar, setShowSidebar] = useState(false);
    const [videos, setVideos] = useState([]);
    return (
        <>
            <Navbar />
            <MainLayout>
                <Sidebar
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
        </>
    );
}

export default App;

