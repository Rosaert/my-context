import React, { useState, useEffect } from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { APPFUNCTIONS } from './assets/APPFUNCTIONS.tsx';

const {
  GebruikersrollenFunctie: gebruikersrollenFunctie,
  ContextChatFunctie: contextChatFunctie,
  PerspectievenFunctie: perspectievenPaneelFunctie,
  AlleProductenFunctie: alleProductenFunctie,
  LaatsteContextenFunctie: laatstGekozenContextenFunctie,
  GepindeContextenFunctie: gepindeContextenFunctie,
  AppShopsFunctie: appShopsFunctie,
  MijnAppsFunctie: mijnAppsFunctie,
  BoodschappenFunctie: boodschappenFunctie
} = APPFUNCTIONS;

const App: React.FC = () => {
  // Voeg 'waar' toe aan de mogelijke activePanel waarden
  const [activePanel, setActivePanel] = useState<'wie' | 'wat' | 'waar'>('wie');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMeOverlayVisible, setIsMeOverlayVisible] = useState(false);
  const [isAppsOverlayVisible, setIsAppsOverlayVisible] = useState(false);
  const [isSettingsOverlayVisible, setIsSettingsOverlayVisible] = useState(false);
  const [isGlobalMenuVisible, setIsGlobalMenuVisible] = useState(false);
  const [isCenterPanelVisible, setIsCenterPanelVisible] = useState(false);
  const [isRightOverlayVisible, setIsRightOverlayVisible] = useState(false);
  const [isNotificatiesPanelVisible, setIsNotificatiesPanelVisible] = useState(false);
  const [isClipboardPanelVisible, setIsClipboardPanelVisible] = useState(false);

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

  const openSettingsOverlay = () => {
    setIsSettingsOverlayVisible(true);
    setIsMenuOpen(false);
  };

  const closeSettingsOverlay = () => {
    setIsSettingsOverlayVisible(false);
  };

  const toggleGlobalMenu = () => {
    setIsGlobalMenuVisible(!isGlobalMenuVisible);
  };


  // Aangepaste functie voor de deelcontext tabel
  const deelcontextTabelFunctie = () => {
    const tableHtml = alleProductenFunctie(); // De originele HTML string
    // Voeg onClick handler toe aan de Melk rij
    return tableHtml.replace(
      /<tr([^>]*)>([^<]*Melk[^<]*)<\/tr>/g, 
      '<tr$1 class="clickable" onclick="handleDeelcontextClick(\'Melk\')"$2</tr>'
    );
  };

  const toggleCenterPanel = () => {
    setIsCenterPanelVisible(!isCenterPanelVisible);
  };

  const handleProductClick = (rowIndex: number) => {
    if (rowIndex === 1) { // Eerste rij (na header)
      setIsRightOverlayVisible(true);
    }
  };

  // Component voor de Alle producten tabel met click handler
  const AlleProductenTable: React.FC = () => {
    return (
      <div 
        dangerouslySetInnerHTML={{ __html: alleProductenFunctie() }}
        onClick={(e) => {
          const row = (e.target as HTMLElement).closest('tr');
          if (row) {
            handleProductClick(row.rowIndex);
          }
        }}
      />
    );
  };

  const handleMenuItemClick = (item: string) => {
    if (item === 'Notificaties') {
      setIsNotificatiesPanelVisible(true);
      setIsGlobalMenuVisible(false); // Sluit het menu
    } else if (item === 'Clipboard') {
      setIsClipboardPanelVisible(true);
      setIsGlobalMenuVisible(false);
    }
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
            </div>
          )}
        </div>
        <h1 onClick={toggleCenterPanel} style={{ cursor: 'pointer' }}>
          Boodschappenlijstje 9-11-2024
        </h1>
        <button 
          className="nav-button small"
        >
          ⚡
        </button>
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
                <h3>Boodschappers</h3>
                <div dangerouslySetInnerHTML={{ __html: gebruikersrollenFunctie() }} />
              </div>
              <div className="subpanel chat-panel">
                <div dangerouslySetInnerHTML={{ __html: contextChatFunctie() }} />
              </div>
            </div>
          </div>
          
        )}
        {(!isSmallScreen || activePanel === 'wat') && (
          <div className="panel wat-panel">
            <h2>Wat</h2>
            <div className="subpanel-container">
              <div className="subpanel perspectieven-panel">
                
                <div dangerouslySetInnerHTML={{ __html: perspectievenPaneelFunctie() }} />
              </div>
              <div className="subpanel alle-producten-panel">
                <h3>Alle producten</h3>
                <AlleProductenTable />
              </div>
              <div className="subpanel form-panel">
                <h3>Melk</h3>
                {/* Form content hier */}
                <div className="details-field">
            <label>Soort</label>
            <div className="field-options">
              <label className="radio-label">
                <input type="radio" name="melksoort" value="halfvol" defaultChecked />
                Halfvol
              </label>
              <label className="radio-label">
                <input type="radio" name="melksoort" value="vol" />
                Vol
              </label>
              <label className="radio-label">
                <input type="radio" name="melksoort" value="calcium" />
                Met extra Calcium
              </label>
            </div>
          </div>
              </div>
            </div>
          </div>
        )}
        {(!isSmallScreen || activePanel === 'waar') && (
          <div className="panel waar-panel">
            <h2>Waar</h2>
            <div className="subpanel-container">
              <div className="subpanel in-context-panel">
                <h3>Ga vanuit deze context naar..</h3>
                <div 
                  dangerouslySetInnerHTML={{ __html: deelcontextTabelFunctie() }}
                  onClick={(e) => {
                    const row = (e.target as HTMLElement).closest('tr');
                    if (row?.textContent?.includes('Melk')) {
                      handleProductClick(1);
                    }
                  }}
                />
              </div>
              <div className="subpanel laatste-panel">
                <h3>Laatst Gekozen Contexten</h3>
                <div dangerouslySetInnerHTML={{ __html: laatstGekozenContextenFunctie() }} />
              </div>
              <div className="subpanel gepinde-panel">
                <h3>Gepinde Contexten</h3>
                <div dangerouslySetInnerHTML={{ __html: gepindeContextenFunctie() }} />

              </div>
            </div>
          </div>
        )}
        
      </div>
      <div className={`overlay ${isMeOverlayVisible ? 'visible' : ''}`}>
        <button className="close-overlay" onClick={closeMeOverlay}>×</button>
        <h2>Me</h2>
        {/* Nieuw lichtblauw panel */}
      </div>

      <div className={`overlay ${isAppsOverlayVisible ? 'visible' : ''}`}>
        <button className="close-overlay" onClick={() => setIsAppsOverlayVisible(false)}>×</button>
        <div className="overlay-content">
          <div className="overlay-panel app-shop-panel">
            <div dangerouslySetInnerHTML={{ __html: appShopsFunctie() }} />
          </div>
          <div className="overlay-panel my-apps-panel">
            <div dangerouslySetInnerHTML={{ __html: mijnAppsFunctie() }} />
          </div>
        </div>
      </div>

      <div className={`overlay ${isSettingsOverlayVisible ? 'visible' : ''}`}>
        <button className="close-overlay" onClick={closeSettingsOverlay}>×</button>
        <h2>Settings</h2>
        {/* Inhoud voor de Settings overlay */}
      </div>

      <nav className="bottom-navbar">
        <button className="small-button left-button">←</button>
        <button className="small-button up-button" onClick={toggleGlobalMenu}>↑</button>
        <button className="small-button">→</button>
      </nav>

      {activePanel === 'wat' && (
        <div className="wat-navbar">
          <button className="up-button">↑</button>
        </div>
      )}

      {/* Menu Panel zonder titel */}
      <div className={`global-menu ${isGlobalMenuVisible ? 'visible' : ''}`}>
        <button className="close-overlay" onClick={() => setIsGlobalMenuVisible(false)}>×</button>
        <div className="menu-content">
          <div className="menu-item" onClick={() => handleMenuItemClick('Notificaties')}>
            <span>Notificaties</span>
          </div>
          <div className="menu-item" onClick={() => handleMenuItemClick('Clipboard')}>
            <span>Clipboard</span>
          </div>
        </div>
      </div>

      {/* Nieuw centraal panel */}
      {isCenterPanelVisible && (
        <div className="center-panel-overlay">
          <div className="center-panel">
            <button className="close-overlay" onClick={() => setIsCenterPanelVisible(false)}>×</button>
            <div className="center-panel-content">
              <p className="context-text">
                Je bevindt je in het boodschappenlijstje van 9 november 2024 van de Boodschappen App in de rol van Boodschapper.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Nieuwe right overlay */}
      <div className={`right-overlay ${isRightOverlayVisible ? 'visible' : ''}`}>
        <button className="close-overlay" onClick={() => setIsRightOverlayVisible(false)}>×</button>
        <div className="overlay-content">
          <h3>Melk</h3>
          <div className="details-field">
            <label>Soort</label>
            <div className="field-options">
              <label className="radio-label">
                <input type="radio" name="melksoort" value="halfvol" defaultChecked />
                Halfvol
              </label>
              <label className="radio-label">
                <input type="radio" name="melksoort" value="vol" />
                Vol
              </label>
              <label className="radio-label">
                <input type="radio" name="melksoort" value="calcium" />
                Met extra Calcium
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Nieuw Notificaties Panel */}
      <div className={`notificaties-panel ${isNotificatiesPanelVisible ? 'visible' : ''}`}>
        <div className="notificaties-header">
          <h3>Notificaties</h3>
          <button className="close-overlay" onClick={() => setIsNotificatiesPanelVisible(false)}>×</button>
        </div>
        <div className="notificaties-content">
          {/* Hier komt de content van het notificaties panel */}
        </div>
      </div>

      {/* Nieuw Clipboard Panel */}
      <div className={`clipboard-panel ${isClipboardPanelVisible ? 'visible' : ''}`}>
        <div className="clipboard-header">
          <h3>Clipboard</h3>
          <button className="close-overlay" onClick={() => setIsClipboardPanelVisible(false)}>×</button>
        </div>
        <div className="clipboard-content">
          {/* Hier komt de content van het clipboard panel */}
        </div>
      </div>
    </div>
  );
};

export default App;

