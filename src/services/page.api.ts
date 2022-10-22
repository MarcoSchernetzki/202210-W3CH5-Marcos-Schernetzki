import { IPoke } from '../models/poke.js';

export class PageApi {
    url: string;
    i!: number;
    pokes: any;

    constructor() {
        this.pokes = '';
        this.url = this.pokes.next;
    }

    // read / get
    getPage(): Promise<Array<IPoke>> {
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
