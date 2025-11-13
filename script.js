const homeButton = document.getElementById('home');
const startButton = document.getElementById('start');
const componentsButton = document.getElementById('components');
const guidelinesButton = document.getElementById('guidelines');
const headersButton = document.getElementById('headers');

homeButton.addEventListener('click', () => {
    changeContent('home');
});

startButton.addEventListener('click', () => {
    changeContent('start');
});
componentsButton.addEventListener('click', () => {
    changeContent('components');
});
guidelinesButton.addEventListener('click', () => {
    changeContent('guidelines');
});
var componentsopen = 0;

function changeContent(page){
    let mainDiv = document.getElementById('content');

    switch(page){
        case 'home':
            mainDiv.innerHTML = `<h1>Wigells StyleGuide</h1>`;
            break;
        case 'start':
            mainDiv.innerHTML = `<h1>Getting Started</h1><p>Here is how to get started...</p>`;
            break;
        case 'components':
            mainDiv.innerHTML = `
            <div id="componentsWrapper">
                <table id="contentMenu" class="contentMenu">
                    <thead>
                        <tr><th>Components</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><button id="headers">Headers</button></td></tr>
                        <tr><td><button id="text">Text</button></td></tr>
                        <tr><td><button id="buttons">Buttons</button></td></tr>
                        <tr><td><button id="tables">Tables</button></td></tr>
                        <tr><td><button id="nav">Navigation</button></td></tr>
                        <tr><td><button id="messages">Messages</button></td></tr>
                        <tr><td><button id="loading">Loading Icons</button></td></tr>
                        <tr><td><button id="panels">Panels</button></td></tr>
                        <tr><td><button id="forms">Forms</button></td></tr>
                        <tr><td><button id="colorSchema">ColorSchema</button></td></tr>
                    </tbody>
                </table>
                <div id="componentContent">
                </div>
            </div>
        `;
            const headersButton = document.getElementById('headers');
            headersButton.addEventListener('click', () => changeInnerContent('headers'));
            const textButton = document.getElementById('text');
            textButton.addEventListener('click', () => changeInnerContent('text'));
            const buttonsButton = document.getElementById('buttons');
            buttonsButton.addEventListener('click', () => changeInnerContent('buttons'));
            const tablesButton = document.getElementById('tables');
            tablesButton.addEventListener('click', () => changeInnerContent('tables'));
            const navButton = document.getElementById('nav');
            navButton.addEventListener('click', () => changeInnerContent('nav'));
            const messagesButton = document.getElementById('messages');
            messagesButton.addEventListener('click', () => changeInnerContent('messages'));
            const loadingButton = document.getElementById('loading');
            loadingButton.addEventListener('click', () => changeInnerContent('loading'));
            const panelsButton = document.getElementById('panels');
            panelsButton.addEventListener("click", () => changeInnerContent("panels"));
            const formsButton = document.getElementById('forms');
            formsButton.addEventListener("click", () => changeInnerContent("forms"));
            const colorSchemaButton = document.getElementById('colorSchema');
            colorSchemaButton.addEventListener("click", () => changeInnerContent("colorSchema"));
            break;
        case 'guidelines':
            mainDiv.innerHTML = `<h1>Guidelines</h1><p>Design guidelines...</p>`;
            break;
        default:
            mainDiv.innerHTML = `<h1>Wigells StyleGuide</h1>`;
            break;
    }
}

function changeInnerContent(content){
    console.log('Changing inner content to:', content);
    let componentDiv = document.getElementById('componentContent');
    console.log('Component Div:', componentDiv);
    switch(content){
        case 'headers':
            componentDiv.innerHTML = `<h2>Headers Component</h2><p>Details about headers...</p>`;
            console.log('Headers content loaded');
            break;
        case 'text':
            componentDiv.innerHTML = `<h2>Text Component</h2><p>Details about text...</p>`;
            console.log('Text content loaded');
            break;
        case 'buttons':
            componentDiv.innerHTML = `<h2>Buttons Component</h2><p>Details about buttons...</p>`;
            console.log('Buttons content loaded');
            break;
        case 'tables':
            componentDiv.innerHTML = `<h2>Tables Component</h2><p>Details about tables...</p>`;
            console.log('Tables content loaded');
            break;
        case 'nav':
            componentDiv.innerHTML = `<h2>Navigation Component</h2><p>Details about navigation...</p>`;
            console.log('Navigation content loaded');
            break;
        case 'messages':
            componentDiv.innerHTML = `<h2>Messages Component</h2><p>Details about messages...</p>`;
            console.log('Messages content loaded');
            break;
        case 'loading':
            componentDiv.innerHTML = `<h2>Loading Icons Component</h2><p>Details about loading icons...</p>`;
            console.log('Loading Icons content loaded');
            break;
        case 'panels':
            componentDiv.innerHTML = `<h2>Panels Component</h2><p>Details about panels...</p>`;
            console.log('Panels content loaded');
            break;
        case 'forms':
            componentDiv.innerHTML = `<h2>Forms Component</h2><p>Details about forms...</p>`;
            console.log('Forms content loaded');
            break;
        case 'colorSchema':
            componentDiv.innerHTML = `<h2>Color Schema Component</h2><p>Details about color schema...</p>`;
            console.log('Color Schema content loaded');
            break;
        default:
            componentDiv.innerHTML = `<h2>Select a component to view details.</h2>`;
            break;
    }
}
changeContent('home');

const sidebar = document.getElementById('sidebar');
const showSidebar = document.getElementById('show-sidebar');
const showSidebarButton = document.getElementById('show-sidebar-button');
const closeSidebarButton = document.getElementById('close-sidebar-button');

sidebar.style.display = "none";

function toggleSidebar() {
    const isHidden = sidebar.style.display === "none";
    const contentMenu = document.getElementById('contentMenu');

    sidebar.style.display = isHidden ? "flex" : "none";
    showSidebar.style.display = isHidden ? "none" : "block";
    if (contentMenu && !isHidden) {
        contentMenu.style.display = "none";
    }
}

showSidebarButton.addEventListener('click', toggleSidebar);
closeSidebarButton.addEventListener('click', toggleSidebar);
