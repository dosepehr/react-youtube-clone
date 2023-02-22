import { useState } from 'react';
import { Navbar, Sidebar } from './components';
function App() {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <>
            <Navbar />
            <Sidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
        </>
    );
}

export default App;

