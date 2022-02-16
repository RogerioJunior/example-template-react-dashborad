import { useState } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () =>{
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default App;
