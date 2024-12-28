export const APPFUNCTIONS = {
  GebruikersrollenFunctie: (): string => {
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

      </table>
    `;
  },

  ContextChatFunctie: (): string => {
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
  },

  PerspectievenFunctie: (): string => {
    return `
      <table>
        <tr>
          <td>Boodschappenlijstje</td>
        </tr>
        <tr>
          <td>Producten</td>
        </tr>
      </table>
    `;
  },

  LaatsteContextenFunctie: (): string => {
    return `
      <table>
        <tr>
          <td>Boodschappenlijstje</td>
        </tr>
        <tr>
          <td>Buurtfeest</td>
        </tr>
      </table>
    `;
  },

  GepindeContextenFunctie: (): string => {
    return `
      <table>
        <tr>
          <td>Buurtfeest</td>
        </tr>
        <tr>
          <td>Zorgen voor Koen</td>
        </tr>
        <tr>
          <td>WA Verzekering</td>
        </tr>
      </table>
    `;
  },

  AppShopsFunctie: (): string => {
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
  },

  MijnAppsFunctie: (): string => {
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
  },

  BoodschappenFunctie: (): string => {
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
  },

  AlleProductenFunctie: (): string => {
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
      </table>
    `;
  }
};
