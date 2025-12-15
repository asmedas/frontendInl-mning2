let componentsOpen = false;
document.addEventListener('click', (e) => {
    const page = e.target.dataset.page;
    if (page) {
        if(componentsOpen && page ==='components') {
            showComponentsMenu();
            return
        };
        changeContent(page);
        if(page === 'home'){
            componentsOpen = false;
            hideMenu();
        }
    }
});

document.addEventListener('click', (e) => {
    const menuBtn = e.target.closest('#contentMenu button');
    if (menuBtn) {
        changeInnerContent(menuBtn.id);
        componentsOpen = true;
        hideMenu();
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
                    <button id="loading">Loading Icons</button>
                    <button id="panels">Panels</button>
                    <button id="forms">Forms</button>
                    <button id="messages">Messages</button>
                    <button id="wrappers">Wrappers</button>
                    <button id="colorSchema">ColorSchema</button>
                </div>   
                <div id="componentContent">
                </div>
            </div>
        `;
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
                <h1>Headers</h1>
                <p>These headers follow the updated glass-themed typography rules.</p>

                <h1>Header 1</h1>
                <p>Main title, used once per page.</p>

                <h2>Header 2</h2>
                <p>Section title.</p>

                <h3>Header 3</h3>
                <p>Subsection title.</p>

                <h4>Header 4</h4>
                <p>Minor subsection title.</p>

                <pre><code>
h1 { font-size: 2.2rem; font-weight: 600; }
h2 { font-size: 1.8rem; font-weight: 500; }
h3 { font-size: 1.4rem; font-weight: 500; }
h4 { font-size: 1.2rem; font-weight: 500; }
p  { font-size: 1rem; }
                </code></pre>
            `;
            console.log('Headers content loaded');
            break;
        case 'buttons':
            componentDiv.innerHTML = `
                <h1>Buttons</h1>
                <img src="./assets/button.png" alt="Button example">
                <p>Unified glass-style button used throughout the app.</p>

                <pre><code>
button {
  padding: 10px 22px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  max-width: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: inherit;
  margin:  auto;

  background: rgba(255, 255, 255, 0.20);
  backdrop-filter: blur(8px);
  color: var(--text-primary);
  text-shadow:
    0 2px 4px var(--glow-dark),
    0 0 8px var(--glow-dark);

  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 20px;


  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.3px;

  cursor: pointer;

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.15s ease;
}
button:hover {
  background: rgba(255, 255, 255, 0.32);
  border-color: rgba(255, 255, 255, 0.55);
  box-shadow: 0 6px 14px rgba(0,0,0,0.22);
  transform: translateY(-2px);
}

button:active {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 3px 8px rgba(0,0,0,0.20);
  transform: translateY(0px);
}
                </code></pre>
            `;
            console.log('Buttons content loaded');
            break;
        case 'tables':
            componentDiv.innerHTML = `
                <h1>Tables</h1>
                <p>Modern table layout using the new blurred glass style.</p>
                <p>As this table can't be rendered in plain js since it uses Reacts JSX, a screenshot of the component
                has simply been put below to show how it looks in action.</p>
                <p>It changes colors when hovering over rows, and also highlights the selected row.</p>

                <img src="./assets/tableExample.png" alt="Table example">
                <pre><code>
import { useState } from &quot;react&quot;;

export default function SimpleSelectableTable() {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleOnClick = (id) =&gt; {
    setSelectedRow(id);
  };

  return (
    &lt;table className=&quot;table&quot;&gt;
      &lt;thead&gt;
        &lt;tr&gt;
          &lt;th&gt;Name&lt;/th&gt;
          &lt;th&gt;Last name&lt;/th&gt;
          &lt;th&gt;Phone&lt;/th&gt;
        &lt;/tr&gt;
      &lt;/thead&gt;

      &lt;tbody&gt;
        &lt;tr
          className=&#123;selectedRow === 1 ? &quot;selected-row&quot; : &quot;&quot;&#125;
          onClick=&#123;() =&gt; handleOnClick(1)&#125;
        &gt;
          &lt;td&gt;Sven&lt;/td&gt;
          &lt;td&gt;Göransson&lt;/td&gt;
          &lt;td&gt;072-3713582&lt;/td&gt;
        &lt;/tr&gt;

        &lt;tr
          className=&#123;selectedRow === 2 ? &quot;selected-row&quot; : &quot;&quot;&#125;
          onClick=&#123;() =&gt; handleOnClick(2)&#125;
        &gt;
          &lt;td&gt;Sebbe&lt;/td&gt;
          &lt;td&gt;Nordström&lt;/td&gt;
          &lt;td&gt;070-4442674&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;
  );
}
</code></pre>


            <pre>
                <code>
.table{
  background: rgba(255, 255, 255, 0.20);
  backdrop-filter: blur(8px);
  width: auto;
  border-collapse: collapse;
}
.table th, .table td {
    border-bottom: 1px solid #050505;
    padding: 10px;
    text-align: left;
    max-width: 200px;
    white-space: normal;
    word-break: break-all;
}

.table tr:nth-child(even) {
    background: rgba(17, 16, 16, 0.384);
}

.table th {
    background: rgba(17, 16, 16, 0.384);
}
.table img {
  max-width: 150px;
  max-height: 100px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.table tr:hover{
  background: rgba(255, 255, 255, 0.32);
  border-color: rgba(255, 255, 255, 0.55);
  box-shadow: 0 6px 14px rgba(0,0,0,0.22);
  transform: translateY(-2px);
}
.selected-row {
  background: rgba(0, 150, 255, 0.35) !important;
  transition: background 0.2s ease;
}
                </code>
            </pre>
            `;
            console.log('Tables content loaded');
            break;
        case 'nav':
            componentDiv.innerHTML = `
                <h1>Navigation</h1>
                <p>The updated sidebar uses a glass blur effect.
                This is also a React component so it can't be rendered in javascript + html, it's just a screenshot</p>
                <img src="./assets/sidebarAndSubmenu.png" alt="Sidebar example">
                <pre>
                    <code>
&lt;div class=&quot;sidebar&quot;&gt;
    &lt;nav&gt;
        &lt;button&gt;Home&lt;/button&gt;
        &lt;div className=&#39;submenu&#39;&gt;
            &lt;button&gt;Get user by ID&lt;/button&gt;
            &lt;button&gt;Update user&lt;/button&gt;
        &lt;/div&gt;
        &lt;button&gt;Get Started&lt;/button&gt;
        &lt;button&gt;Components&lt;/button&gt;
        &lt;button&gt;Guidelines&lt;/button&gt;
    &lt;/nav&gt;
&lt;/div&gt;

                    </code>
                </pre>

                <pre>
                    <code>
.sidebar {
    width: 10%;
    min-width: 55px;
    max-width: 200px;
    height: auto;
    border-collapse: collapse;
    border-radius: 20px;
    align-self: flex-start;
    flex-shrink: 0;
    

    background: transparent;
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(20px);
}
.sidebar nav {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.submenu {
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  gap: 5px;
}

.submenu button {
  width: 80%;
  font-size: 0.9rem;
}
                    </code>
                </pre>
            `;
            console.log('Navigation content loaded');
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
                <h1>Panels as System Messages</h1>
                <p>Messages are replaced with modern panel components.</p>

                <div class="panel positive">Success: Operation completed.</div>
                <div class="panel neutral">Warning: Unsaved changes.</div>
                <div class="panel negative">Error: Could not connect.</div>

                <pre><code>
.panel {
  padding: 20px;
  border-radius: 6px;
  margin: 20px 0;
  display: inline-block;
  width: auto;
}
.panel.neutral  {
     background: rgb(175,173,173); 
}
.panel.positive {
     background: rgb(138,240,138); 
}
.panel.negative {
     background: rgb(235,117,117); 
}
                </code></pre>
            `;
            console.log('Panels content loaded');
            break;
        case 'forms':
            componentDiv.innerHTML = `
            <div class="form">
                <h1>New User</h1>
                <form>
                    <label htmlFor="firstName">Firstname</label>
                    <input type="text" id="firstName" placeholder="Firstname" />

                    <label htmlFor="lastName">Lastname</label>
                    <input type="text" id="lastName" placeholder="Lastname" />

                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username" />

                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" placeholder="Phone" />

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Email" />

                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" placeholder="Password" />

                    <label htmlFor="role">Admin, yes/no?</label>
                    <div className="radio-group">
                    <label>
                        <input type="radio" name="role" value="yes" /> Yes (Admin)
                    </label>

                    <label>
                        <input type="radio" name="role" value="no" /> No (User)
                    </label>
                    </div>

                    <button type="button">Create user</button>
                    <p>Already got account? Sign in</p>
                </form>
            </div>
            <pre>
                <h3>HTML</h3>
                <code>
&lt;div className=&quot;form&quot;&gt;
    &lt;h1&gt;New User&lt;/h1&gt;

    &lt;form&gt;
    &lt;label htmlFor=&quot;firstName&quot;&gt;Firstname&lt;/label&gt;
    &lt;input type=&quot;text&quot; id=&quot;firstName&quot; placeholder=&quot;Firstname&quot; /&gt;

    &lt;label htmlFor=&quot;lastName&quot;&gt;Lastname&lt;/label&gt;
    &lt;input type=&quot;text&quot; id=&quot;lastName&quot; placeholder=&quot;Lastname&quot; /&gt;

    &lt;label htmlFor=&quot;username&quot;&gt;Username&lt;/label&gt;
    &lt;input type=&quot;text&quot; id=&quot;username&quot; placeholder=&quot;Username&quot; /&gt;

    &lt;label htmlFor=&quot;phone&quot;&gt;Phone&lt;/label&gt;
    &lt;input type=&quot;text&quot; id=&quot;phone&quot; placeholder=&quot;Phone&quot; /&gt;

    &lt;label htmlFor=&quot;email&quot;&gt;Email&lt;/label&gt;
    &lt;input type=&quot;text&quot; id=&quot;email&quot; placeholder=&quot;Email&quot; /&gt;

    &lt;label htmlFor=&quot;password&quot;&gt;Password&lt;/label&gt;
    &lt;input type=&quot;text&quot; id=&quot;password&quot; placeholder=&quot;Password&quot; /&gt;

    &lt;label htmlFor=&quot;role&quot;&gt;Admin, yes/no?&lt;/label&gt;
    &lt;div className=&quot;radio-group&quot;&gt;
        &lt;label&gt;
        &lt;input type=&quot;radio&quot; name=&quot;role&quot; value=&quot;yes&quot; /&gt; Yes (Admin)
        &lt;/label&gt;

        &lt;label&gt;
        &lt;input type=&quot;radio&quot; name=&quot;role&quot; value=&quot;no&quot; /&gt; No (User)
        &lt;/label&gt;
    &lt;/div&gt;

    &lt;button type=&quot;button&quot;&gt;Create user&lt;/button&gt;
    &lt;p&gt;Already got account? Sign in&lt;/p&gt;
    &lt;/form&gt;
&lt;/div&gt;

                </code>
                <h3>CSS</h3>
                <code>
.form {
  height: auto;
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: 100%;
  padding: 1rem;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  text-align: center;
}
.form label,
.form input {
  display: block;
}

.radio-group {
  padding-left: 12px;
  display: flex;
  gap: 24px;
  align-items: center;
}

.radio-group label {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

                </code>
            </pre>

            `;
            console.log('Forms content loaded');
            break;
        case 'messages':
            componentDiv.innerHTML = `
                <h1>Messages</h1>
                <p>We do not use any custom messages for this application. we are merely using what is arleady built in,
                such as "alert('message')" and "confirm('do you really want to do that?)"</p>
                <button onclick="alert('This is an alert message!')">Show Alert</button>
                <button onclick="confirm('Do you really want to proceed?')">Show Confirm</button>
                `;
                break;
        case 'wrappers':
            componentDiv.innerHTML = `
                <h1>Wrappers</h1>
                <p>Wrappers are used to contain main content areas with consistent styling.</p>
                <h3>This wrapper is for an inline flex box</h3>
                <p>Used to wrap content in a flexible box that centers and spaces items evenly.</p>
                <pre>
                    <code>
                    JSX:
&quot;import &#39;./ContentBox.css&#39;

export default function ContentBox({ children }) {
    return (
        &lt;div className=&quot;contentbox&quot;&gt;
            &lt;div className=&quot;content-inner&quot;&gt;
                {children}
            &lt;/div&gt;
        &lt;/div&gt;
    );
} &quot;

                    CSS:
.contentbox {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 1.2rem;
}
.content-inner {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    
    padding: 1rem 1.5rem;
    border-radius: 16px;


    background: rgba(255, 255, 255, 0.20);
    backdrop-filter: blur(8px);

    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.content-inner h2 {
    flex-shrink: 0;
    white-space: nowrap;
}
                    </code>
                </pre>
                <h3>This wrapper is used for cards-like representations of data in the application</h3>
                <p>Used to wrap in a Grid which expands to allow as many cards as possible up to a certain max width limit of the cards of 260px</p>
                <p>once that limit is exceeded it wraps to a new row</p>
                <pre>
                    <code>
                    JSX:
&quot;import &#39;./GridWrapper.css&#39;
export default function GridWrapper({children}){
    return(
        &lt;div className=&quot;gridwrapper&quot;&gt;
            {children}
        &lt;/div&gt;
    )
}&quot;
                    CSS:
.gridwrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.2rem;
    width: 100%;
}

                `;
                break;
        case "colorSchema":
    componentDiv.innerHTML = `
        <h1>Color Schema</h1>
        <p>All colors used in the design system and where they appear.</p><br>

        <p style="background:#ffffff; padding:6px; border-radius:6px; color:#000;">#ffffff</p>
        <p>Used for primary text.</p><br>

        <p style="background:#d1d5db; padding:6px; border-radius:6px; color:#000;">#d1d5db</p>
        <p>Used for secondary text.</p><br>

        <p style="background:rgba(0,0,0,0.35); padding:6px; border-radius:6px;">rgba(0,0,0,0.35)</p>
        <p>Used for glow shadows and button borders.</p><br>

        <p style="background:rgba(0,0,0,0.45); padding:6px; border-radius:6px;">rgba(0,0,0,0.45)</p>
        <p>Used for hover darkening.</p><br>

        <p style="background:rgba(255,255,255,0.20); padding:6px; border-radius:6px; color:#000;">rgba(255,255,255,0.20)</p>
        <p>Used for glass UI backgrounds (buttons, tables, forms).</p><br>

        <p style="background:rgba(255,255,255,0.32); padding:6px; border-radius:6px; color:#000;">rgba(255,255,255,0.32)</p>
        <p>Used for hover backgrounds.</p><br>

        <p style="background:rgba(255,255,255,0.15); padding:6px; border-radius:6px; color:#000;">rgba(255,255,255,0.15)</p>
        <p>Used for sidebar backgrounds.</p><br>

        <p style="background:rgba(17,16,16,0.384); padding:6px; border-radius:6px;">rgba(17,16,16,0.384)</p>
        <p>Used for table even rows.</p><br>

        <p style="background:#2e86b9; padding:6px; border-radius:6px;">#2e86b9</p>
        <p>Used for loader border.</p><br>

        <p style="background:rgb(175,173,173); padding:6px; border-radius:6px;">rgb(175,173,173)</p>
        <p>Used for neutral panels.</p><br>

        <p style="background:rgb(138,240,138); padding:6px; border-radius:6px;">rgb(138,240,138)</p>
        <p>Used for positive panels.</p><br>

        <p style="background:rgb(235,117,117); padding:6px; border-radius:6px;">rgb(235,117,117)</p>
        <p>Used for negative panels.</p><br>

        <pre><code>

#ffffff                → Text (primary)
#d1d5db                → Text (secondary)
rgba(0,0,0,0.35)       → Text glow, shadows, button border
rgba(0,0,0,0.45)       → Button hover overlay
rgba(255,255,255,0.20) → Glass background for buttons, tables, forms
rgba(255,255,255,0.32) → Hover background for UI elements
rgba(255,255,255,0.15) → Sidebar background
rgba(17,16,16,0.384)   → Table even row background
#2e86b9                → Loader border color
rgb(175,173,173)       → Neutral panel background
rgb(138,240,138)       → Positive panel background
rgb(235,117,117)       → Negative panel background
        </code></pre>
    `;
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
const contentMenu = document.getElementById('contentMenu');

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

function showComponentsMenu(){
    const contentMenu = document.getElementById('contentMenu');
    contentMenu.style.display = "block";
}


showSidebarButton.addEventListener('click', toggleSidebar);
closeSidebarButton.addEventListener('click', toggleSidebar);
