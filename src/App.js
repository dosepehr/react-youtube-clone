import { useState } from 'react';
import { MainLayout, Navbar, Sidebar, Videos } from './components';
function App() {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [showSidebar, setShowSidebar] = useState(false);
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
                <Videos selectedCategory={selectedCategory} />
            </MainLayout>
        </>
    );
}

export default App;

