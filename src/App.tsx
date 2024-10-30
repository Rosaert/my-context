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
  const [isFormOverlayVisible, setIsFormOverlayVisible] = useState(false);
  const [isGlobalMenuVisible, setIsGlobalMenuVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

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

  };

  const openFormOverlay = () => {
    if (isSmallScreen) {
      setIsFormOverlayVisible(true);
    }
  };

  const closeFormOverlay = () => {
    setIsFormOverlayVisible(false);
  };

  const toggleGlobalMenu = () => {
    setIsGlobalMenuVisible(!isGlobalMenuVisible);
  };

  const handleDeelcontextClick = (product: string) => {
    if (product === 'Melk') {
      setIsFormVisible(true);
    }
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
        <h1>Boodschappenlijstje 9-10-2024</h1>
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
          <div className="panel wat-panel" onClick={openFormOverlay}>
            <h2>Wat</h2>
            <div className="subpanel-container">
              <div className="subpanel perspectieven-panel">
                <h3>De boodschappen</h3>
                <div dangerouslySetInnerHTML={{ __html: perspectievenPaneelFunctie() }} />
              </div>
              <div className="subpanel alle-producten-panel">
                <h3>Alle producten</h3>
                <div dangerouslySetInnerHTML={{ __html: alleProductenFunctie() }} />
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
                      handleDeelcontextClick('Melk');
                    }
                  }}
                />
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
        <button className="small-button up-button" onClick={toggleGlobalMenu}>↑</button>
        <button className="small-button">→</button>
      </nav>

      {activePanel === 'wat' && (
        <div className="wat-navbar">
          <button className="up-button">↑</button>
        </div>
      )}

      {/* Global Menu Panel */}
      <div className={`global-menu ${isGlobalMenuVisible ? 'visible' : ''}`}>
        <div className="global-menu-header">
          <h2>Global Menu</h2>
          <button className="close-overlay" onClick={() => setIsGlobalMenuVisible(false)}>×</button>
        </div>
        <div className="global-menu-content">
          {/* Hier komt de content van het global menu */}
        </div>
      </div>

      {/* Form Overlay */}
      <div className={`overlay overlay-right ${isFormVisible ? 'visible' : ''}`}>
        <button className="close-overlay" onClick={() => setIsFormVisible(false)}>×</button>
        <h2>Form</h2>
        <div className="overlay-content">
          {/* Form content */}
        </div>
      </div>
    </div>
  );
};

export default App;

const gebruikersrollenFunctie = (): string => {
  return `
    <table>
      <tr>
        <th>Naam</th>
        <th>Datum</th>
        <th>Totaal bedrag</th>
      </tr>
      <tr>
        <td>Jan</td>
        <td>01-01-2024</td>
        <td>34.50</td>
      </tr>
      <tr>
        <td>Piet</td>
        <td>02-01-2024</td>
        <td>42.00</td>
      </tr>
      <tr>
        <td>Klaas</td>
        <td>03-01-2024</td>
        <td>28.75</td>
      </tr>
      <tr>
        <td>Marie</td>
        <td>04-01-2024</td>
        <td>55.25</td>
      </tr>
      <tr>
        <td>Sophie</td>
        <td>05-01-2024</td>
        <td>31.80</td>
      </tr>
    </table>
  `;
};

const contextChatFunctie = (): string => {
  return `
    <div class="chat-dialog">
      <div class="chat-message received">
        <span class="sender">Jan:</span> Hoi, heb je de boodschappenlijst al gezien?
      </div>
      <div class="chat-message sent">
        <span class="sender">Piet:</span> Ja, ik ga straks naar de supermarkt!
      </div>
      <div class="chat-message received">
        <span class="sender">Jan:</span> Super, vergeet de melk niet 😊
      </div>
    </div>
  `;
};

const perspectievenPaneelFunctie = (): string => {
  return `
    <table>
      <tr>
        <th>Product</th>
        <th>Aantal</th>
      </tr>
      <tr>
        <td>Melk</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Brood</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Kaas</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Eieren</td>
        <td>12</td>
      </tr>
      <tr>
        <td>Appels</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Pasta</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Yoghurt</td>
        <td>4</td>
      </tr>
      <tr>
        <td>Koffie</td>
        <td>1</td>
      </tr>
    </table>
  `;
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
  return `
    <table>
      <tr>
        <th>App Shops</th>
      </tr>
      <tr>
        <td>Cor's App shop</td>
      </tr>
      <tr>
        <td>Joop's App shop</td>
      </tr>
    </table>
  `;
};

const mijnAppsFunctie = (): string => {
  return `
    <table>
      <tr>
        <th>Mijn apps</th>
      </tr>
      <tr>
        <td>Boodschappen App</td>
      </tr>
      <tr>
        <td>Agenda App</td>
      </tr>
      <tr>
        <td>Notities App</td>
      </tr>
    </table>
  `;
};

const alleProductenFunctie = (): string => {
  return `
    <table>
      <tr>
        <th>Product</th>
      </tr>
      <tr><td>Melk</td></tr>
      <tr><td>Brood</td></tr>
      <tr><td>Kaas</td></tr>
      <tr><td>Eieren</td></tr>
      <tr><td>Boter</td></tr>
      <tr><td>Yoghurt</td></tr>
      <tr><td>Appels</td></tr>
      <tr><td>Bananen</td></tr>
      <tr><td>Sinaasappels</td></tr>
      <tr><td>Aardappelen</td></tr>
      <tr><td>Wortelen</td></tr>
      <tr><td>Ui</td></tr>
      <tr><td>Knoflook</td></tr>
      <tr><td>Tomaten</td></tr>
      <tr><td>Komkommer</td></tr>
      <tr><td>Sla</td></tr>
      <tr><td>Paprika</td></tr>
      <tr><td>Champignons</td></tr>
      <tr><td>Kipfilet</td></tr>
      <tr><td>Gehakt</td></tr>
      <tr><td>Vis</td></tr>
      <tr><td>Pasta</td></tr>
      <tr><td>Rijst</td></tr>
      <tr><td>Havermout</td></tr>
      <tr><td>Muesli</td></tr>
      <tr><td>Cornflakes</td></tr>
      <tr><td>Pindakaas</td></tr>
      <tr><td>Jam</td></tr>
      <tr><td>Hagelslag</td></tr>
      <tr><td>Koffie</td></tr>
      <tr><td>Thee</td></tr>
      <tr><td>Suiker</td></tr>
      <tr><td>Zout</td></tr>
      <tr><td>Peper</td></tr>
      <tr><td>Olie</td></tr>
      <tr><td>Azijn</td></tr>
      <tr><td>Mayonaise</td></tr>
      <tr><td>Ketchup</td></tr>
      <tr><td>Mosterd</td></tr>
      <tr><td>Chips</td></tr>
      <tr><td>Koekjes</td></tr>
      <tr><td>Chocolade</td></tr>
      <tr><td>Snoep</td></tr>
      <tr><td>Frisdrank</td></tr>
      <tr><td>Water</td></tr>
    </table>
  `;
};
