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
                <div id="contentMenu">
                    <div class="menu-header">Components</div>
                    <button id="headers">Headers</button>
                    <button id="buttons">Buttons</button>
                    <button id="tables">Tables</button>
                    <button id="nav">Navigation</button>
                    <button id="messages">Messages</button>
                    <button id="loading">Loading Icons</button>
                    <button id="panels">Panels</button>
                    <button id="forms">Forms</button>
                    <button id="colorSchema">ColorSchema</button>
                    <button id="mobile">Mobile format</button>
                </div>   
                <div id="componentContent">
                </div>
            </div>
        `;
            document.addEventListener('click', (e) => {
                if (e.target.matches('#contentMenu button')) {
                    changeInnerContent(e.target.id);
                    hideMenu();
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
            <button>Standard Button</button><br>
            <p>This is an example of a standard button used for general actions.</p><br>
            <button class="functional">Functional Button</button>
            <p>This is an example of a functional button used for main actions.</p><br>
            <button class="positive">Positive Button</button>
            <p>This is an example of a positive button used for confirming actions.</p><br>
            <button class="negative">Negative Button</button>
            <p>This is an example of a negative button used for canceling or destructive actions.</p>
            <pre>
                <h3>HTML</h3>
                <code>
&#60;button&#62;Standard Button&#60;/button&#62;
&#60;button class="functional"&#62;Functional Button&#60;/button&#62;
&#60;button class="positive"&#62;Positive Button&#60;/button&#62;
&#60;button class="negative"&#62;Negative Button&#60;/button&#62;
                </code>
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
    background: rgb(138, 240, 138);
    color: black;
}
button.positive:hover{
    background: rgba(0, 128, 0, 0.897);
}
button.negative{
    background: rgb(235, 117, 117);
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
                <h3>HTML</h3>
                <code>
&#60;table class="tableLong"&#62;
    &#60;tr&#62;
        &#60;th&#62;Name&#60;/th&#62;
        &#60;th&#62;Last name&#60;/th&#62;
        &#60;th&#62;Phone&#60;/th&#62;
    &#60;/tr&#62;
    &#60;tr&#62;
        &#60;td&#62;sven&#60;/td&#62;
        &#60;td&#62;g&#246;ransson&#60;/td&#62;
        &#60;td&#62;072-3713582&#60;/td&#62;
    &#60;/tr&#62;
    &#60;tr&#62;
        &#60;td&#62;sebbe&#60;/td&#62;
        &#60;td&#62;nordstr&#246;m&#60;/td&#62;
        &#60;td&#62;070-4442674&#60;/td&#62;
    &#60;/tr&#62;
    &#60;tr&#62;
        &#60;td&#62;sven&#60;/td&#62;
        &#60;td&#62;g&#246;ransson&#60;/td&#62;
        &#60;td&#62;076-3427721&#60;/td&#62;
    &#60;/tr&#62;
&#60;/table&#62;
                </code>
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
    color: rgb(0, 0, 0);
}
                </code>
            </pre>
            <table class="table-compact">
                <tr>
                    <th>Name</th>
                    <th>Last name</th>
                    <th>Phone</th>
                    <th>address</th>
                    <th>city</th>
                    <th>country</th>
                </tr>
                <tr>
                    <td>sven</td>
                    <td>göransson</td>
                    <td>072-3713582</td>
                    <td>russvägen 18</td>
                    <td>sundsvall</td>
                    <td>sverige</td>
                </tr>
                <tr>
                    <td>sebbe</td>
                    <td>nordström</td>
                    <td>070-4442674</td>
                    <td>hårdvallsgatan 18</td>
                    <td>sundsvall</td>
                    <td>sverige</td>
                </tr>
                <tr>
                    <td>sven</td>
                    <td>göransson</td>
                    <td>076-3427721</td>
                    <td>kolstavägen 3</td>
                    <td>sundsvall</td>
                    <td>sverige</td>
                </tr>
            </table>
            <p>Above is a table that is used for more coloumns and to easily keep track of what values belong to the
            person we are looking at, every second row is darker.</p>
            <pre>
                <h3>HTML</h3>
                <code>
&#60;table class="table-compact"&#62;
    &#60;tr&#62;
        &#60;th&#62;Name&#60;/th&#62;
        &#60;th&#62;Last name&#60;/th&#62;
        &#60;th&#62;Phone&#60;/th&#62;
        &#60;th&#62;address&#60;/th&#62;
        &#60;th&#62;city&#60;/th&#62;
        &#60;th&#62;country&#60;/th&#62;
    &#60;/tr&#62;
    &#60;tr&#62;
        &#60;td&#62;sven&#60;/td&#62;
        &#60;td&#62;g&#246;ransson&#60;/td&#62;
        &#60;td&#62;072-3713582&#60;/td&#62;
        &#60;td&#62;russv&#228;gen 18&#60;/td&#62;
        &#60;td&#62;sundsvall&#60;/td&#62;
        &#60;td&#62;sverige&#60;/td&#62;
    &#60;/tr&#62;
    &#60;tr&#62;
        &#60;td&#62;sebbe&#60;/td&#62;
        &#60;td&#62;nordstr&#246;m&#60;/td&#62;
        &#60;td&#62;070-4442674&#60;/td&#62;
        &#60;td&#62;h&#229;rdvallsgatan 18&#60;/td&#62;
        &#60;td&#62;sundsvall&#60;/td&#62;
        &#60;td&#62;sverige&#60;/td&#62;
    &#60;/tr&#62;
    &#60;tr&#62;
        &#60;td&#62;sven&#60;/td&#62;
        &#60;td&#62;g&#246;ransson&#60;/td&#62;
        &#60;td&#62;076-3427721&#60;/td&#62;
        &#60;td&#62;kolstav&#228;gen 3&#60;/td&#62;
        &#60;td&#62;sundsvall&#60;/td&#62;
        &#60;td&#62;sverige&#60;/td&#62;
    &#60;/tr&#62;
&#60;/table&#62;
                </code>
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
&#60;div id="contentMenu"&#62;
    &#60;div class="menu-header"&#62;Components&#60;/div&#62;
        &#60;button id="headers"&#62;Headers&#60;/button&#62;
        &#60;button id="buttons"&#62;Buttons&#60;/button&#62;
        &#60;button id="tables"&#62;Tables&#60;/button&#62;
        &#60;button id="nav"&#62;Navigation&#60;/button&#62;
        &#60;button id="messages"&#62;Messages&#60;/button&#62;
        &#60;button id="loading"&#62;Loading Icons&#60;/button&#62;
        &#60;button id="panels"&#62;Panels&#60;/button&#62;
        &#60;button id="forms"&#62;Forms&#60;/button&#62;
        &#60;button id="colorSchema"&#62;ColorSchema&#60;/button&#62;
        &#60;button id="mobile"&#62;Mobile format&#60;/button&#62;
&#60;/div&#62;  
                </code>
                <h3>CSS</h3>
                <code>
#contentMenu {
    width: 13vw;
    max-width: 145px;
    max-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    background: rgb(35, 35, 36);
    color: white;
}

.menu-header {
    font-size: 1rem;
    width: 100%;
    position: sticky;
    top: 0;
    background: rgb(35, 35, 36);
    padding: 15px;
    box-shadow: 0 2px 0 black;
    z-index: 10;
}

#contentMenu button {
    width: 90%;
    background: rgb(55, 55, 56);
    border: none;
    padding: 10px;
    color: white;
    border-radius: 4px;
    text-align: left;
    cursor: pointer;
    margin-bottom: 20px;
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
            componentDiv.innerHTML = `
            <h2>Meddelanden & Varningar</h2>
            <p>How different kinds of messages and warnings are displayed to the user during events<p>

            <div class="message success">
                Succeeded.
            </div>

            <div class="message warning">
                Warning: You're leaving the site without saving.
            </div>

            <div class="message error">
                An error has occured: could not connect to the server.
            </div>

            <div class="message info">
                Info: A new version is available.
            </div>
            <pre>
                <h3>HTML</h3>
                <code>
&#60;div class="message success"&#62;
    Succeeded.
&#60;/div&#62;

&#60;div class="message warning"&#62;
    Warning: You're leaving the site without saving.
&#60;/div&#62;

&#60;div class="message error"&#62;
    An error has occured: could not connect to the server.
&#60;/div&#62;

&#60;div class="message info"&#62;
    Info: A new version is available.
&#60;/div&#62;
                </code>
                <h3>CSS</h3>
                <code>
.message {
    padding: 15px;
    border-radius: 4px;
    margin: 15px 0;
    color: black;
    font-size: 1rem;
    display: inline-block;
    width: auto;
}

.message.success {
    background-color: rgb(138, 240, 138);
}

.message.warning {
    background-color: yellow;
}

.message.error {
    background-color: rgb(235, 117, 117);
    color: black;
}
.message.info {
    background-color: rgb(175, 172, 172);
    color: black;
}
                </code>
            </pre>
            `;
            console.log('Messages content loaded');
            break;
        case 'loading':
            componentDiv.innerHTML = `
            <h2>Loading Icon</h2>
            <p>Shows when content is being loaded</p>

            <div class="loader"></div>
            <p>Loading...</p>
            <pre>
                <h3>HTML</h3>
                <code>
&#60;div class="loader"&#62;&#60;/div&#62;
                </code>
                <h3>CSS</h3>
                <code>
.loader {
    border: 4px solid #2e86b9;
    border-top: 4px solid var(--color-dark-mid);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 0.8s linear infinite;
    margin: 20px 0;
}

@keyframes spin {
    100% { transform: rotate(360deg); }
}
                </code>
            </pre>

            `;
            console.log('Loading Icons content loaded');
            break;
        case 'panels':
            componentDiv.innerHTML = `
            <h2>Paneler</h2>
            <p>A clearly defined section of the page that contains related information.
            A neutral one is white, a positive one is green, and a negative one is red.</p>

            <div class="panel neutral">
                <h3>Neutral panel</h3>
                <p>This is a neutral, informational panel></p>
            </div><br>

            <div class="panel positive">
                <h3>Positiv panel</h3>
                <p>Positive content is being put here</p>
            </div><br>

            <div class="panel negative">
                <h3>Negativ panel</h3>
                <p>Negative content is being put here</p>
            </div><br>
            <pre>
                <h3>HTML</h3>
                <code>
&#60;div class="panel neutral"&#62;&#60;/div&#62;
&#60;div class="panel positive"&#62;&#60;/div&#62;
&#60;div class="panel negative"&#62;&#60;/div&#62;
                </code>
                <h3>CSS</h3>
                <code>
.panel {
    padding: 20px;
    border-radius: 6px;
    margin: 20px 0;
    display: inline-block;
    width: auto;
}

.panel.neutral {
    background-color: white;
    border-left: 6px solid var(--color-dark-mid);
}

.panel.positive {
    background-color: rgb(138, 240, 138);
    color: black;
    border-left: 6px solid var(--color-positive-dark);
}

.panel.negative {
    background-color: rgb(235, 117, 117);
    color: black;
    border-left: 6px solid var(--color-negative-dark);
}
                </code>
            </pre>
            `;
            console.log('Panels content loaded');
            break;
        case 'forms':
            componentDiv.innerHTML = `
            <h2>Form</h2>
            <p>How a form will look with the CSS. The form is used to gather information from a questionaire
            and then send it in to the backend.</p><br>
            <form>
                <h3>class="form-group"</h3>
                <p>This is the wrapper we use for each label+input to create the default layout of each label+input</p><br>
                <h3>Text</h3>
                <p>The design below is for the regular input for text which consists of only one row, used for smaller text inputs.</p><br>
                <div class="form-group">
                    <label for="name">Namn</label>
                    <input type="text" id="name" placeholder="Type your name">
                </div>
                <h3>Textarea</h3>
                <p>The design below is for the textarea, allows for multiple rows of text, in this example 4 rows.</p><br>
                <div class="form-group">
                    <label for="message">Meddelande</label>
                    <textarea id="message" rows="4" placeholder="Write something..."></textarea>
                </div>

                <h3>Radiobuttons</h3>
                <p>The design below is for the radiobuttons, used when the user must pick exactly one option from a list.</p><br>
                <div class="form-group">
                    <label>Kön</label>
                    <label><input type="radio" name="gender" value="man"> Man</label>
                    <label><input type="radio" name="gender" value="woman"> Kvinna</label>
                </div>

                <h3>Checkbox</h3>
                <p>The design below is for the checkboxes, used when multiple options can be selected at the same time.</p><br>
                <div class="form-group">
                    <label>Intressen</label>
                    <label><input type="checkbox" value="sports"> Sports</label>
                    <label><input type="checkbox" value="music"> Music</label>
                    <label><input type="checkbox" value="programming"> Programming</label>
                </div>

                <button class="positive">Send</button>
            </form>
            <pre>
                <h3>HTML</h3>
                <code>
&#60;div class="form-group"&#62;
    &#60;label for="name"&#62;Namn&#60;/label&#62;
    &#60;input type="text" id="name" placeholder="Type your name"&#62;
&#60;/div&#62;

&#60;div class="form-group"&#62;
    &#60;label for="message"&#62;Meddelande&#60;/label&#62;
    &#60;textarea id="message" rows="4" placeholder="Write something..."&#62;&#60;/textarea&#62;
&#60;/div&#62;

&#60;div class="form-group"&#62;
    &#60;label&#62;K&#246;n&#60;/label&#62;
    &#60;label&#62;&#60;input type="radio" name="gender" value="man"&#62; Man&#60;/label&#62;
    &#60;label&#62;&#60;input type="radio" name="gender" value="woman"&#62; Kvinna&#60;/label&#62;
&#60;/div&#62;

&#60;div class="form-group"&#62;
    &#60;label&#62;Intressen&#60;/label&#62;
    &#60;label&#62;&#60;input type="checkbox" value="sports"&#62; Sports&#60;/label&#62;
    &#60;label&#62;&#60;input type="checkbox" value="music"&#62; Music&#60;/label&#62;
    &#60;label&#62;&#60;input type="checkbox" value="programming"&#62; Programming&#60;/label&#62;
&#60;/div&#62;
                </code>
                <h3>CSS</h3>
                <code>
form {
    max-width: 400px;
    margin: 20px 0;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"],
textarea,
select {
    width: 100%;
    padding: 10px;
    border: 1px solid #777;
    border-radius: 4px;
    margin-bottom: 15px;
    font-size: 1rem;
    box-sizing: border-box;
}

input[type="radio"],
input[type="checkbox"] {
    margin-right: 5px;
}

.form-group {
    margin-bottom: 20px;
}

                </code>
            </pre>

            `;
            console.log('Forms content loaded');
            break;
        case 'colorSchema':
            componentDiv.innerHTML = `
            <h2>Color Schema Component</h2>
            <div class="colorschema primaryDark"></div>
            <p>This is the primary dark color, used for Sidebar background and the sticky headers.</p><br><br>
            <div class="colorschema primaryMid"></div>
            <p>This is the primary Mid color, used for buttons and codeblocks.</p><br><br>
            <div class="colorschema primaryLight"></div>
            <p>This is the primary (white) color used for the main contents background.</p><br><br>
            <div class="colorschema loaderColor"></div>
            <p>This is the color used for the Icon that is displayed when content is loading.</p><br><br>
            <div class="colorschema codeBlockText"></div>
            <p>This is the color that is used for the text when displaying the code examples for each components HTML and CSS.</p><br><br>
            <div class="colorschema success"></div>
            <p>This is the color that is used for both the "success" panel and messages.</p><br><br>
            <div class="colorschema warning"></div>
            <p>This is the color that is used for both the "warning" panel and messages.</p><br><br>
            <div class="colorschema error"></div>
            <p>This is the color that is used for both the "error" panel and messages.</p><br><br>
            <div class="colorschema info"></div>
            <p>This is the color that is used or both the "info" panel and messages.</p><br><br>
            <pre>
                <h3>CSS</h3>
                <code>
.colorschema {
    width: 100%;
    height: 60px; 
}

.colorschema.primaryDark{
    background-color: rgb(35, 35, 36);
}
.colorschema.primaryMid{
    background-color: rgb(55, 55, 56);
}
.colorschema.primaryLight{
    border: 1px solid #000;
    box-sizing: border-box;
    background-color: #f4f4f4;
}
.colorschema.loaderColor{
    background-color: #2e86b9;
}
.colorschema.codeBlockText{
    background-color: orange;
}
.colorschema.success{
    background-color: rgb(138, 240, 138);
}
.colorschema.warning{
    background-color: yellow;
}
.colorschema.error{
    background-color: rgb(235, 117, 117);
}
.colorschema.info{
    background-color: rgb(175, 172, 172);
}
                </code>
            </pre>
            `;
            console.log('Color Schema content loaded');
            break;
        case 'mobile':
            componentDiv.innerHTML = `
            <h2>Mobile format</h2>
            <p>To make everything responsive with the smaller screens such as mobiles use the @Media css below. it is tested and works for all of the phones listed below</p>
            <img src="./phones.png">
            <pre>
                <code>
/* Responsive design for smaller screens */
@media (max-width: 870px) {
    .sidebar{
        min-width: 80px;
    }
    .menu-header{
        font-size: 0.9rem;
    }
    button{
        font-size: 0.7rem;
    }
    #contentMenu{
        min-width: 100px;
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
    .tableLong {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 0.70rem;
    }
}

@media (max-width: 400px) {
    .sidebar{
        width: 80px;
    }
    button{
        font-size: 8px;
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
    word-break: break-word;
    table-layout: fixed;
    }
    .tableLong {
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

function hideMenu(){
    sidebar.style.display = "none";
    showSidebar.style.display = "block";
    const contentMenu = document.getElementById('contentMenu');
    contentMenu.style.display = "none";
}


showSidebarButton.addEventListener('click', toggleSidebar);
closeSidebarButton.addEventListener('click', toggleSidebar);
