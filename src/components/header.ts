import { Component } from './component.js';
import { Main } from './header.main.js';

export class Header extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        new Main('header>slot');
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
