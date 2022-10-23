import { Component } from './component.js';
import { Menu } from './header.main.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        new Menu('header>slot');
    }
    createTemplate() {
        return `
   <header>
        <h1 class="main-title">Pokemon</h1>
        <img src="./assets/pokemon-logo.svg" alt="titulo de la pagina" width="400">
        <slot></slot>
      </header>
        `;
    }
}
