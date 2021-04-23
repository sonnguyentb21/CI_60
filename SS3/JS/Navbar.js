const $template = document.createElement('template');
$template.innerHTML =`
<div class="navbar">
        <div class="navbar-item"><a href="./index.html">Home</a></div>
        <div class="navbar-item"><a href="./about.html">About</a></div>
        <div class="navbar-item"><a href="./contact.html">Contact</a></div>
    </div>
    `;

    export default class Navbar extends HTMLElement{
      constructor(){
        super();
      this.appendChild($template.content.cloneNode(true)); 
      }
    }

window.customElements.define('my-navbar', Navbar)


