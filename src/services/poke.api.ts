import { IPoke } from '../models/poke.js';

export class PokeApi {
    url: string;

    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon/';
    }

    // read / get
    getPoke(): Promise<Array<IPoke>> {
        return fetch(this.url).then((response) => response.json());
    }

    // manageComponent() {
    //     this.template = this.createTemplate();
    //     this.renderAdd(this.selector, this.template);
    // }

    // createTemplate() {
    //     return `
    //     <body>

    //     </body>`;
    // }
}
