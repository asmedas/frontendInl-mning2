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
                        <tr><td><button id="mobile">Mobile format</button></td></tr>
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
                <p>All text in the application shall use typography: "font-family:Arial, Helvetica, sans-serif;"</p>

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
                <pre>
                    <code>
body{
    margin:0;
    font-family:Arial, Helvetica, sans-serif;
    height: 100vh;
    display: flex;
}
h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5em;
}

h2 {
    font-size: 2rem;
    margin-bottom: 0.5em;
}

h3 {
    font-size: 1.5rem;
}

h4 {
    font-size: 1.2rem;
}
p {
    font-size: 1rem;
}
pre{
    white-space: pre-wrap;
    word-break: break-word;
    overflow-x: hidden;
}
                    </code>
                </pre>
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
            <pre>
                <h3>CSS</h3>
                <code>
button{
    width: 120px;
    background: rgb(55, 55, 56);
    border: none;
    padding: 10px;
    color: white;
    border-radius: 4px;
    text-align: left;
    cursor: pointer;
    margin-bottom: 20px;
}
button:hover{
    background: rgb(75, 75, 76);
    cursor: pointer;
}
button.functional:hover{
    background: rgb(102, 102, 165);
}
button.positive{
    background: rgb(0, 255, 76);
    color: black;
}
button.positive:hover{
    background: rgba(0, 128, 0, 0.897);
}
button.negative{
    background: red;
    color: black;
}
button.negative:hover{
    background: rgba(163, 5, 5, 0.904);
}
                </code>
            </pre>
            `;
            console.log('Buttons content loaded');
            break;
        case 'tables':
            componentDiv.innerHTML = `
            <h2>Tables Component</h2>
            <p>Two different tables to show data, one for a long list and one for many columns</p><br>
            <table class="tableLong">
                <tr>
                    <th>Name</th>
                    <th>Last name</th>
                    <th>Phone</th>
                </tr>
                <tr>
                    <td>sven</td>
                    <td>göransson</td>
                    <td>072-3713582</td>
                </tr>
                <tr>
                    <td>sebbe</td>
                    <td>nordström</td>
                    <td>070-4442674</td>
                </tr>
                <tr>
                    <td>sven</td>
                    <td>göransson</td>
                    <td>076-3427721</td>
                </tr>
            </table>
            <p>Above is the table that is used for long lists, where it is easy to find the connected values
            to each, in this case person, seperated cleanly by a line between each row.</p>
            <pre>
                <h3>CSS</h3>
                <code>
.tableLong {
    width: auto;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 0.95rem;
}

.tableLong th, .tableLong td {
    border-bottom: 1px solid #ccc;
    padding: 10px;
    text-align: left;
}

.tableLong tr:nth-child(even) {
    background-color: #eee;
}

.tableLong th {
    background-color: var(--color-dark-mid);
    color: rgb(0, 0, 0);
}
                </code>
            </pre>
            <table class="table-compact">
                <tr>
                    <th>Name</th>
                    <th>Last name</th>
                    <th>Phone</th>
                    <th>Name</th>
                    <th>Last name</th>
                    <th>Phone</th>
                </tr>
                <tr>
                    <td>sven</td>
                    <td>göransson</td>
                    <td>072-3713582</td>
                    <td>sven</td>
                    <td>göransson</td>
                    <td>072-3713582</td>
                </tr>
                <tr>
                    <td>sebbe</td>
                    <td>nordström</td>
                    <td>070-4442674</td>
                    <td>sebbe</td>
                    <td>nordström</td>
                    <td>070-4442674</td>
                </tr>
                <tr>
                    <td>sven</td>
                    <td>göransson</td>
                    <td>076-3427721</td>
                    <td>sven</td>
                    <td>göransson</td>
                    <td>076-3427721</td>
                </tr>
            </table>
            <p>Above is a table that is used for more coloumns and to easily keep track of what values belong to the
            person we are looking at, every second row is darker.</p>
            <pre>
                <h3>CSS</h3>
                <code>
.table-compact {
    width: auto;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 0.85rem;
}

.table-compact th, .table-compact td {
    border: 1px solid #ddd;
    padding: 5px;
    text-align: left;
}

.table-compact th {
    background-color: var(--color-dark-mid);
    color: rgb(0, 0, 0);
}
.table-compact tr:nth-child(even){
    background-color: #00000031;
}
                </code>
            </pre>
            `;
            console.log('Tables content loaded');
            break;
        case 'nav':
            componentDiv.innerHTML = `
            <h2>Navigation Component</h2>
            <p>Two different kinds of navigational menus are used in this styleguide, one is a static sidebar 
            meant to stay fixed and simple. The other is a dynamic, 
            scrollable content menu designed to behave like part of the main layout.</p>
            <h3>Scrollable menu</h3>
            <img src="./scroll.png">
            <pre>
                <h3>HTML</h3>
                <code>
&#60;table id="contentMenu" class="contentMenu"&#62;
    &#60;thead&#62;
        &#60;tr&#62;&#60;th&#62;Components&#60;/th&#62;&#60;/tr&#62;
    &#60;/thead&#62;
    &#60;tbody&#62;
        &#60;tr&#62;&#60;td&#62;&#60;button id="headers"&#62;Headers&#60;/button&#62;&#60;/td&#62;&#60;/tr&#62;
        &#60;tr&#62;&#60;td&#62;&#60;button id="buttons"&#62;Buttons&#60;/button&#62;&#60;/td&#62;&#60;/tr&#62;
        &#60;tr&#62;&#60;td&#62;&#60;button id="tables"&#62;Tables&#60;/button&#62;&#60;/td&#62;&#60;/tr&#62;
        &#60;tr&#62;&#60;td&#62;&#60;button id="nav"&#62;Navigation&#60;/button&#62;&#60;/td&#62;&#60;/tr&#62;
        &#60;tr&#62;&#60;td&#62;&#60;button id="messages"&#62;Messages&#60;/button&#62;&#60;/td&#62;&#60;/tr&#62;
        &#60;tr&#62;&#60;td&#62;&#60;button id="loading"&#62;Loading Icons&#60;/button&#62;&#60;/td&#62;&#60;/tr&#62;
        &#60;tr&#62;&#60;td&#62;&#60;button id="panels"&#62;Panels&#60;/button&#62;&#60;/td&#62;&#60;/tr&#62;
        &#60;tr&#62;&#60;td&#62;&#60;button id="forms"&#62;Forms&#60;/button&#62;&#60;/td&#62;&#60;/tr&#62;
        &#60;tr&#62;&#60;td&#62;&#60;button id="colorSchema"&#62;ColorSchema&#60;/button&#62;&#60;/td&#62;&#60;/tr&#62;
    &#60;/tbody&#62;
&#60;/table&#62;
                </code>
                <h3>CSS</h3>
                <code>
#contentMenu {
    width: 145px;
    max-height: 100vh;
    background: rgb(35, 35, 36);
    color: white;
    border-collapse: collapse;
    display: block; 
    overflow-y: auto;
    overflow-x: hidden; 
}

#contentMenu th {
    position: sticky;
    top: 0;
    background: rgb(35, 35, 36);
    padding: 15px;
    box-shadow: 0 2px 0 black;
    text-align: left;
    z-index: 1;
}

#contentMenu td {
    padding: 5px;
    width: 100%;
}

#contentMenu button {
    width: 100%;
    background: rgb(55, 55, 56);
    border: none;
    padding: 10px;
    color: white;
    border-radius: 4px;
    text-align: left;
    cursor: pointer;
}

#contentMenu button:hover {
    background: rgb(75, 75, 76);
}
                </code>
            </pre><br><br>
            <h2>Static sidebar</h2>
            <img src="./static.png">
            <pre>
                <h3>HTML</h3>
                <code>
&#60;div id="sidebar" class="sidebar"&#62;
    &#60;nav&#62;
        &#60;button data-page="home"&#62;Home&#60;/button&#62;
        &#60;button data-page="start"&#62;Get started&#60;/button&#62;
        &#60;button data-page="components"&#62;Components&#60;/button&#62;
        &#60;button data-page="guidelines"&#62;Guidelines&#60;/button&#62;
        &#60;button id="close-sidebar-button"&#62;
            Hide menu
        &#60;/button&#62;
    &#60;/nav&#62;
&#60;/div&#62;
                </code>
                <h3>CSS</h3>
                <code>
                /* Styles for the sidebar */
.sidebar{
    width: 130px;
    background: rgb(35, 35, 36);
    color: white;
    border-right: black 2px solid;
    display:flex;
    flex-direction: column;
    padding: 10px;
}
                </code>
            </pre>
            `;
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
        case 'mobile':
            componentDiv.innerHTML = `
            <h2>Mobile format</h2>
            <p>To make everything work correctly with the smaller screens such as mobiles use the @Media css below</p>
            <pre>
                <code>
/* Responsive design for smaller screens */
@media (max-width: 870px) {
    .sidebar{
        width: 80px;
    }
    button{
        font-size: 8px;
        width: 80px;
    }
    #contentMenu{
        font-size: 8px;
        width: 100px;
    }
    h1 {
    font-size: 1.9rem;
    margin-bottom: 0.5em;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5em;
    }

    h3 {
        font-size: 1.2rem;
    }

    h4 {
        font-size: 1rem;
    }
    p {
        font-size: 0.8rem;
    }
    .table-compact {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 0.70rem;
    }
    .table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 0.70rem;
    }
}
                </code>
            </pre>`;
            console.log("Mobile content loaded");
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
