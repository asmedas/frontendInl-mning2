const homeButton = document.getElementById('home');
const startButton = document.getElementById('start');
const componentsButton = document.getElementById('components');
const guidelinesButton = document.getElementById('guidelines');
const headersButton = document.getElementById('headers');

document.addEventListener('click', (e) => {
    const page = e.target.dataset.page;
    if (page) {
        changeContent(page);
    }
});


function changeContent(page){
    let mainDiv = document.getElementById('content');

    switch(page){
        case 'home':
            mainDiv.innerHTML = `<h1 id="welcomePage">Wigells StyleGuide</h1>`;
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
            document.addEventListener('click', (e) => {
                if (e.target.matches('#contentMenu button')) {
                    changeInnerContent(e.target.id);
                }
            });

            break;
        case 'guidelines':
            mainDiv.innerHTML = `<h1>Guidelines</h1><p>Design guidelines...</p>`;
            break;
        default:
            mainDiv.innerHTML = `<h1 id="welcomePage">Wigells StyleGuide</h1>`;
            break;
    }
}

function changeInnerContent(content){
    console.log('Changing inner content to:', content);
    let componentDiv = document.getElementById('componentContent');
    console.log('Component Div:', componentDiv);
    switch(content){
        case 'headers':
            componentDiv.innerHTML = `
                <h1>Headers Components</h1>
                <p>This section describes how the headers should look and be used according to our style guide.</p>

                <br><br>
                <h1>Header 1</h1>
                <p>This is an example of an h1 header, which should only be used once per page as the main title.</p>

                <h2>Header 2</h2>
                <p>This is an example of an h2 header, used to define major sections.</p>

                <h3>Header 3</h3>
                <p>This is an example of an h3 header, used for subsections under an h2.</p>

                <h4>Header 4</h4>
                <p>This is an example of an h4 header, typically used for smaller subsections.</p>

                <br>
                <p>This is an example of normal body text that follows the headers.</p>
                <p>Body text is used for all general content and must remain consistent in size, line-height, and color.</p>
            `;
            console.log('Headers content loaded');
            break;
        case 'buttons':
            componentDiv.innerHTML = `
            <h1>Buttons Component</h1><br>
            <button class="standard">Standard Button</button><br>
            <p>This is an example of a standard button used for general actions.</p><br>
            <button class="functional">Functional Button</button>
            <p>This is an example of a functional button used for main actions.</p><br>
            <button class="positive">Positive Button</button>
            <p>This is an example of a positive button used for confirming actions.</p><br>
            <button class="negative">Negative Button</button>
            <p>This is an example of a negative button used for canceling or destructive actions.</p>
            `;
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
