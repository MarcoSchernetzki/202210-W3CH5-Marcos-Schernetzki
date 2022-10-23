var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PokeApi } from '../services/poke.api.js';
import { Component } from './component.js';
// import { Pagination } from './pagination.js';
export class PokemonList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.api = new PokeApi();
        this.pokes = '';
        this.pokesInfo = [];
        this.startFetch();
    }
    startFetch() {
        return __awaiter(this, void 0, void 0, function* () {
            this.pokes = yield this.api.getPoke();
            const pokeArray = [];
            this.pokes.results.forEach((item) => {
                pokeArray.push(item.url);
            });
            this.pokesInfo = yield Promise.all(pokeArray.map((url) => fetch(url).then((result) => result.json())));
            //------------------------------------------------------------------------
            this.nextPageInfo = yield this.api.getNextPage(this.pokes.next);
            const nextPokeArray = [];
            this.nextPageInfo.results.forEach((item) => {
                nextPokeArray.push(item.url);
            });
            this.nextPagePokes = yield Promise.all(nextPokeArray.map((url) => fetch(url).then((result) => result.json())));
            //------------------------------------------------------------------------
            this.previousPageInfo = yield this.api.getPreviousPage(this.pokes.previous);
            const previousPokeArray = [];
            this.previousPageInfo.results.forEach((item) => {
                previousPokeArray.push(item.url);
            });
            this.previousPagePokes = yield Promise.all(previousPokeArray.map((url) => fetch(url).then((result) => result.json())));
            this.manageComponent();
        });
    }
    manageComponent() {
        var _a, _b;
        this.template = this.createTemplate(this.pokesInfo);
        this.renderAdd(this.selector, this.template);
        (_a = document.querySelector('.btn-next')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            console.log(this.nextPagePokes);
            this.template = this.createTemplate(this.nextPagePokes);
            this.render(this.selector, this.template);
            this.startFetch();
        });
        (_b = document
            .querySelector('.btn-previous')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
            // this.pokes.next = this.pokes.previous;
            this.template = this.createTemplate(this.previousPagePokes);
            this.render(this.selector, this.template);
            this.startFetch();
        });
    }
    createTemplate(array) {
        this.template = `<div class="main_cards">`;
        array.forEach((pokemon) => {
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
