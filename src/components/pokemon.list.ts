import { PokeApi } from '../services/poke.api.js';
import { Component } from './component.js';

export class PokemonList extends Component {
    template!: string;
    pokes: any;
    api: PokeApi;
    pokesInfo: Array<T>;
    constructor(public selector: string) {
        super();
        this.api = new PokeApi();
        this.pokes = '';
        this.pokesInfo = [];
        this.startPrint();
    }

    async startPrint() {
        this.pokes = await this.api.getPoke();

        const pokeArray: any = [];

        this.pokes.results.forEach((item: any) => {
            pokeArray.push(item.url);
        });

        this.pokesInfo = await Promise.all(
            pokeArray.map((url: any) =>
                fetch(url).then((result) => result.json())
            )
        );
        this.manageComponent();
    }

    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
    }

    createTemplate() {
        this.template = '';

        this.pokesInfo.forEach((pokemon: any) => {
            this.template += `<h2>${pokemon.name}</h2>`;
            this.template += `<img src="${pokemon.sprites.other.home.front_default}" alt="" widht="100">`;
        });

        return this.template;
    }
}
