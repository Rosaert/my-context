import React, { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const [activePanel, setActivePanel] = useState<'wie' | 'wat'>('wie');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1>Boodschappenlijstje</h1>
      </nav>
      {isSmallScreen && (
        <div className="button-container">
          <button 
            onClick={() => setActivePanel('wie')}
            className={activePanel === 'wie' ? 'active' : ''}
          >
            Wie
          </button>
          <button 
            onClick={() => setActivePanel('wat')}
            className={activePanel === 'wat' ? 'active' : ''}
          >
            Wat
          </button>
        </div>
      )}
      <div className="panel-container">
        {(!isSmallScreen || activePanel === 'wie') && (
          <div className="panel wie-panel">
            <h2>Wie</h2>
            {/* Inhoud voor het Wie-paneel */}
          </div>
        )}
        {(!isSmallScreen || activePanel === 'wat') && (
          <div className="panel wat-panel">
            <h2>Wat</h2>
            {/* Inhoud voor het Wat-paneel */}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
