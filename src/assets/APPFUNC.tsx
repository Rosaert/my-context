export const APPFUNCTIONS = {
    GebruikersrollenFunctie: (): string => {
        return `
            <table>
                <thead>
                    <tr>
                        <th>Rol</th>
                        <th>Toegang</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Student</td>
                        <td>Volledige toegang tot eigen boodschappenlijstjes</td>
                    </tr>
                    <tr>
                        <td>Huisgenoot</td>
                        <td>Kan gedeelde lijstjes bekijken en bewerken</td>
                    </tr>
                </tbody>
            </table>
        `;
    },
    ContextChatFunctie: (): string => {
        return `
            <div class="chat-dialog">
                <p>Chatberichten tussen huisgenoten over boodschappen.</p>
            </div>
        `;
    },
    PerspectievenFunctie: (): string => {
        return `
            <table>
                <thead>
                    <tr>
                        <th>Rol</th>
                        <th>Perspectief</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Student</td>
                        <td>Beheer van eigen lijstjes, budgetten en items</td>
                    </tr>
                    <tr>
                        <td>Huisgenoot</td>
                        <td>Inzage en bewerking van gedeelde lijstjes</td>
                    </tr>
                </tbody>
            </table>
        `;
    },
    DeelcontextenFunctie: (): string => {
        return `
            <table>
                <thead>
                    <tr>
                        <th>Deelcontext</th>
                        <th>Beschrijving</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Boodschappenlijst</td>
                        <td>Beheer van items en hoeveelheden</td>
                    </tr>
                    <tr>
                        <td>Budgetbeheer</td>
                        <td>Bijhouden van uitgaven en budgetten</td>
                    </tr>
                    <tr>
                        <td>Receptenbeheer</td>
                        <td>Koppeling van recepten aan boodschappen</td>
                    </tr>
                </tbody>
            </table>
        `;
    },
    LaatsteContextenFunctie: (): string => {
        return `
            <table>
                <thead>
                    <tr>
                        <th>Context</th>
                        <th>Laatst bezocht</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Weekboodschappen</td>
                        <td>5 minuten geleden</td>
                    </tr>
                    <tr>
                        <td>Feestinkopen</td>
                        <td>1 uur geleden</td>
                    </tr>
                </tbody>
            </table>
        `;
    },
    GepindeContextenFunctie: (): string => {
        return `
            <table>
                <thead>
                    <tr>
                        <th>Context</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Weekboodschappen</td>
                        <td>Gepind</td>
                    </tr>
                    <tr>
                        <td>Huishouditems</td>
                        <td>Gepind</td>
                    </tr>
                </tbody>
            </table>
        `;
    },
    AppShopsFunctie: (): string => {
        return `
            <table>
                <thead>
                    <tr>
                        <th>App</th>
                        <th>Beschrijving</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Recepten App</td>
                        <td>Voeg recepten toe aan boodschappenlijst</td>
                    </tr>
                    <tr>
                        <td>Budget App</td>
                        <td>Beheer uitgaven en budgetten</td>
                    </tr>
                </tbody>
            </table>
        `;
    },
    MijnAppsFunctie: (): string => {
        return `
            <table>
                <thead>
                    <tr>
                        <th>App</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Boodschappenlijst</td>
                        <td>Geïnstalleerd</td>
                    </tr>
                    <tr>
                        <td>Budget Tracker</td>
                        <td>Geïnstalleerd</td>
                    </tr>
                </tbody>
            </table>
        `;
    },
    NotificatiesFunctie: (): string => {
        return `
            <table>
                <thead>
                    <tr>
                        <th>Gebeurtenis</th>
                        <th>Bericht</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nieuw item</td>
                        <td>Huisgenoot heeft wasmiddel toegevoegd</td>
                    </tr>
                    <tr>
                        <td>Budget alert</td>
                        <td>Je nadert je weekbudget</td>
                    </tr>
                </tbody>
            </table>
        `;
    },
    ClipboardFunctie: (): string => {
        return `
            <table>
                <thead>
                    <tr>
                        <th>Inhoud</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lijst: Weekboodschappen</td>
                    </tr>
                    <tr>
                        <td>Totaal: €45,60</td>
                    </tr>
                </tbody>
            </table>
        `;
    }
};
