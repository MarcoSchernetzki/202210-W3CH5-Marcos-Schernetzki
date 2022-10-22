export class PageApi {
    constructor() {
        this.pokes = '';
        this.url = this.pokes.next;
    }
    // read / get
    getPage() {
        return fetch(this.url).then((response) => response.json());
    }
}
