import { Component } from './component.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `
   <header>
        <h1 class="main-title">Pokemon</h1>
        <img src="./assets/pokemon-logo.svg" alt="titulo de la pagina" width="400">
      </header>
        `;
    }
}
