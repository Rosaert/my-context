import React, { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  // Voeg 'waar' toe aan de mogelijke activePanel waarden
  const [activePanel, setActivePanel] = useState<'wie' | 'wat' | 'waar'>('wie');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMeOverlayVisible, setIsMeOverlayVisible] = useState(false);
  const [isAppsOverlayVisible, setIsAppsOverlayVisible] = useState(false);
  const [isSettingsOverlayVisible, setIsSettingsOverlayVisible] = useState(false);
  const [isNotificatiesOverlayVisible, setIsNotificatiesOverlayVisible] = useState(false);
  const [isFormOverlayVisible, setIsFormOverlayVisible] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openMeOverlay = () => {
    setIsMeOverlayVisible(true);
    setIsMenuOpen(false);
  };

  const closeMeOverlay = () => {
    setIsMeOverlayVisible(false);
  };

  const openAppsOverlay = () => {
    setIsAppsOverlayVisible(true);
    setIsMenuOpen(false);
  };

  const closeAppsOverlay = () => {
    setIsAppsOverlayVisible(false);
  };

  const openSettingsOverlay = () => {
    setIsSettingsOverlayVisible(true);
    setIsMenuOpen(false);
  };

  const closeSettingsOverlay = () => {
    setIsSettingsOverlayVisible(false);
  };

  const openNotificatiesOverlay = () => {
    setIsNotificatiesOverlayVisible(true);
    setIsMenuOpen(false);
  };

  const closeNotificatiesOverlay = () => {
    setIsNotificatiesOverlayVisible(false);
  };

  const openFormOverlay = () => {
    if (isSmallScreen) {
      setIsFormOverlayVisible(true);
    }
  };

  const closeFormOverlay = () => {
    setIsFormOverlayVisible(false);
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="hamburger-menu-container">
          <button className="nav-button hamburger-menu" onClick={toggleMenu}>☰</button>
          {isMenuOpen && (
            <div className="dropdown-menu">
              <a href="#" onClick={openMeOverlay}>Me</a>
              <a href="#" onClick={openAppsOverlay}>Apps</a>
              <a href="#" onClick={openSettingsOverlay}>Settings</a>
              <a href="#" onClick={openNotificatiesOverlay}>Notificaties</a>
            </div>
          )}
        </div>
        <h1>Boodschappenlijstje</h1>
        <button className="nav-button small">⚡</button>
      </nav>
      {isSmallScreen && (
        <div className="button-container">
          <button 
            onClick={() => setActivePanel('wie')}
            className={`wie-button ${activePanel === 'wie' ? 'active' : ''}`}
          >
            Wie
          </button>
          <button 
            onClick={() => setActivePanel('wat')}
            className={`wat-button ${activePanel === 'wat' ? 'active' : ''}`}
          >
            Wat
          </button>
          <button 
            onClick={() => setActivePanel('waar')}
            className={`waar-button ${activePanel === 'waar' ? 'active' : ''}`}
          >
            Waar
          </button>
        </div>
      )}
      <div className="panel-container">
        {(!isSmallScreen || activePanel === 'wie') && (
          <div className="panel wie-panel">
            <h2>Wie</h2>
            <div className="subpanel-container">
              <div className="subpanel gebruikers-panel">
                <h3>Gebruikers</h3>
                {/* Inhoud voor het Gebruikers-subpanel */}
                {gebruikersrollenFunctie()}
              </div>
              <div className="subpanel chat-panel">
                <h3>Chat</h3>
                {/* Inhoud voor het Chat-subpanel */}
                {contextChatFunctie()}
              </div>
              <div className="subpanel chat-panel">
                <h3>Notificaties</h3>
                {/* Inhoud voor het Chat-subpanel */}
                {contextNotificatiesFunctie()}
              </div>
            </div>
          </div>
        )}
        {(!isSmallScreen || activePanel === 'wat') && (
          <div className="panel wat-panel" onClick={openFormOverlay}>
            <h2>Wat</h2>
            <div className="subpanel-container">
              <div className="subpanel perspectieven-panel">
                <h3>Perspectieven</h3>
                {/* Inhoud van het Perspectieven panel */}
                {perspectievenPaneelFunctie()}
              </div>
            </div>
          </div>
        )}
        {(!isSmallScreen || activePanel === 'waar') && (
          <div className="panel waar-panel">
            <h2>Waar</h2>
            <div className="subpanel-container">
              <div className="subpanel in-context-panel">
                <h3>Deelcontexten</h3>
                {/* Inhoud voor het A-subpaneel */}
                {deelContextenFunctie()}
              </div>
              <div className="subpanel laatste-panel">
                <h3>laatst Gekozen Contexten</h3>
                {/* Inhoud voor het C-subpaneel */}
                {laatstGekozenContextenFunctie()}
              </div>
              <div className="subpanel gepinde-panel">
                <h3>Gepinde Contexten</h3>
                {/* Inhoud voor het C-subpaneel */}
                {gepindeContextenFunctie()}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`overlay ${isMeOverlayVisible ? 'visible' : ''}`}>
        <button className="close-overlay" onClick={closeMeOverlay}>×</button>
        <h2>Me</h2>
        {/* Inhoud voor de Me overlay */}
      </div>

      <div className={`overlay ${isAppsOverlayVisible ? 'visible' : ''}`}>
        <button className="close-overlay" onClick={closeAppsOverlay}>×</button>
        <h2>Apps</h2>
        <div className="overlay-content">
          <div className="overlay-panel app-shop-panel">
            <h3>App shops</h3>
            {/* Hier kun je de inhoud van de App shop toevoegen */}
            {appShopsFunctie()}
          </div>
          <div className="overlay-panel my-apps-panel">
            <h3>Mijn apps</h3>
            {/* Hier kun je de inhoud van Mijn apps toevoegen */}
            {mijnAppsFunctie()}
          </div>
        </div>
      </div>

      <div className={`overlay ${isSettingsOverlayVisible ? 'visible' : ''}`}>
        <button className="close-overlay" onClick={closeSettingsOverlay}>×</button>
        <h2>Settings</h2>
        {/* Inhoud voor de Settings overlay */}
      </div>

      <div className={`overlay ${isNotificatiesOverlayVisible ? 'visible' : ''}`}>
        <button className="close-overlay" onClick={closeNotificatiesOverlay}>×</button>
        <h2>Notificaties</h2>
        <div className="overlay-content">
          <p>Geen nieuwe notificaties</p>
        </div>
      </div>

      {isSmallScreen && (
        <div className={`overlay overlay-right ${isFormOverlayVisible ? 'visible' : ''}`}>
          <button className="close-overlay" onClick={closeFormOverlay}>×</button>
          <h2>Form</h2>
          <div className="overlay-content">
            {/* Hier kun je je form content toevoegen */}
            <p>Form content komt hier</p>
          </div>
        </div>
      )}

      <nav className="bottom-navbar">
        <button className="small-button left-button">←</button>
        <h1></h1>
        <button className="small-button">→</button>
      </nav>
    </div>
  );
};

export default App;

const gebruikersrollenFunctie = (): string => {
  return "Gebruikersrollen";
};

const contextChatFunctie = (): string => {
  return "Context Chat";
};

const contextNotificatiesFunctie = (): string => {
  return "Context Notificaties";
};

const perspectievenPaneelFunctie = (): string => {
  return "Perspectives van de userrol";
};

const deelContextenFunctie = (): string => {
  return "Deelcontexten";
};

const laatstGekozenContextenFunctie = (): string => {
  return "Laatst gekozen contexten";
};

const gepindeContextenFunctie = (): string => {
  return "Gepinde Contexten";
};

const appShopsFunctie = (): string => {
  return "App Shops";
};

const mijnAppsFunctie = (): string => {
  return "Mijn Apps";
};
