import { useState } from 'react';

import './App.css';

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
      <h1>Hello</h1>
    </div>
  );
}

export default App;
