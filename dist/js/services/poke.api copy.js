export class PokeApi {
    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon/';
    }
    // read / get
    getPoke() {
        return fetch(this.url).then((response) => response.json());
    }
}
