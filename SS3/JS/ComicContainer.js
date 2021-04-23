const $template = document.createElement('template');
$template.innerHTML =`
    `;

    export default class ComicContainer extends HTMLElement{
      constructor(){
        super();
      this.appendChild($template.content.cloneNode(true)); 
      }
    }

window.customElements.define('comic-container', ComicContainer)


