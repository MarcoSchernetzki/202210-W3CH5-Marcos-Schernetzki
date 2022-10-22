"use strict";
// import { PageApi } from '../services/page.api.js';
// import { Component } from './component.js';
// export class PaginationCopy extends Component {
//     template!: string;
//     pages: any;
//     api: PageApi;
//     pagesInfo: Array<T>;
//     constructor(public selector: string) {
//         super();
//         this.api = new PageApi();
//         this.pages = '';
//         this.pagesInfo = [];
//         this.startPrint();
//     }
//     async startPrint() {
//         this.pages = await this.api.getPage();
//         console.log(this.pages);
//         const pokeArray: any = [];
//         this.pages.results.forEach((item: any) => {
//             pokeArray.push(item.url);
//         });
//         this.pagesInfo = await Promise.all(
//             pokeArray.map((url: any) =>
//                 fetch(url).then((result) => result.json())
//             )
//         );
//         this.manageComponent();
//     }
//     manageComponent() {
//         this.template = this.createTemplate();
//         this.render(this.selector, this.template);
//     }
//     createTemplate() {
//         this.template = '';
//         this.pagesInfo.forEach((pokemon: any) => {
//             this.template += ` <div class="main">
//             <h2>${pokemon.name}</h2>`;
//             this.template += `<img src="${pokemon.sprites.other.home.front_default}" alt="">
//             </div>`;
//         });
//         this.template += `
//         <button class="btn-previous">
//          <a href='${this.pages.previous}'>Atras</a>
//         </button>
//         <button class="btn-next">
//          <a href='${this.pages.next}'>Siguiente</a>
//          </button>`;
//         return this.template;
//     }
// }
