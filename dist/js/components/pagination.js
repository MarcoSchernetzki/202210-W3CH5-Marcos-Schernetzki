"use strict";
// import { Component } from './component.js';
// import { PokemonList } from './pokemon.list.js';
// export class Pagination extends Component {
//     template!: string;
//     pokes: any;
//     api: PokemonList;
//     pokesInfo: Array<T>;
//     constructor(public selector: string) {
//         super();
//         this.api = new PokemonList('main');
//         this.pokes = '';
//         this.pokesInfo = [];
//         this.startPrint();
//     }
//     async startPrint() {
//         this.pokes = await this.api.getPoke();
//         console.log(this.pokes);
//         const pokeArray: any = [];
//         this.pokes.results.forEach((item: any) => {
//             pokeArray.push(item.url);
//         });
//         this.pokesInfo = await Promise.all(
//             pokeArray.map((url: any) =>
//                 fetch(url).then((result) => result.json())
//             )
//         );
//         this.manageComponent();
//     }
//     getPoke() {
//         return fetch().then((response) => response.json());
//     }
//     manageComponent() {
//         this.template = this.createTemplate();
//         this.render(this.selector, this.template);
//     }
//     createTemplate() {
//         return `
//         <h1>POKEMON</h1>`;
//     }
// }
