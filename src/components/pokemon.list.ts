import { PokeApi } from '../services/poke.api.js';
import { Component } from './component.js';
// import { Pagination } from './pagination.js';

export class PokemonList extends Component {
    template!: string;
    pokes: any;
    api: PokeApi;
    pokesInfo: Array<any>;
    nextPageInfo: any;
    nextPagePokes: any;
    previousPageInfo: any;
    previousPagePokes: any;
    constructor(public selector: string) {
        super();
        this.api = new PokeApi();
        this.pokes = '';
        this.pokesInfo = [];
        this.startFetch();
    }

    async startFetch() {
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

        //------------------------------------------------------------------------
        this.nextPageInfo = await this.api.getNextPage(this.pokes.next);

        const nextPokeArray: any = [];

        this.nextPageInfo.results.forEach((item: any) => {
            nextPokeArray.push(item.url);
        });

        this.nextPagePokes = await Promise.all(
            nextPokeArray.map((url: any) =>
                fetch(url).then((result) => result.json())
            )
        );
        //------------------------------------------------------------------------
        this.previousPageInfo = await this.api.getPreviousPage(
            this.pokes.previous
        );

        const previousPokeArray: any = [];

        this.previousPageInfo.results.forEach((item: any) => {
            previousPokeArray.push(item.url);
        });

        this.previousPagePokes = await Promise.all(
            previousPokeArray.map((url: any) =>
                fetch(url).then((result) => result.json())
            )
        );

        this.manageComponent();
    }

    manageComponent() {
        this.template = this.createTemplate(this.pokesInfo);
        this.renderAdd(this.selector, this.template);

        document.querySelector('.btn-next')?.addEventListener('click', () => {
            console.log(this.nextPagePokes);
            this.template = this.createTemplate(this.nextPagePokes);
            this.render(this.selector, this.template);
            this.startFetch();
        });

        document
            .querySelector('.btn-previous')
            ?.addEventListener('click', () => {
                // this.pokes.next = this.pokes.previous;
                this.template = this.createTemplate(this.previousPagePokes);
                this.render(this.selector, this.template);
                this.startFetch();
            });
    }

    createTemplate(array: Array<any>) {
        this.template = `<div class="main_cards">`;

        array.forEach((pokemon: any) => {
            this.template += ` <div class="cards--poke">
            <h2>${pokemon.name}</h2>`;
            this.template += `<img src="${pokemon.sprites.other.home.front_default}" alt="">
            </div>`;
        });

        this.template += `</div>
         <div>
        <button class="btn-previous">
              Atras
        </button>
                          
        <button class="btn-next">
     
          Siguiente
         </button>
         </div>`;

        return this.template;
    }
}
