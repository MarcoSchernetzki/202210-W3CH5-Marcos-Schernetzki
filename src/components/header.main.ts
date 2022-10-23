import { Component, IComponent } from './component.js';

interface menuOptionI {
    path: string;
    label: string;
}

export class Menu extends Component implements IComponent {
    template!: string;
    menuOptions: Array<menuOptionI>;
    constructor(public selector: string) {
        super();
        this.menuOptions = [
            { path: '', label: 'Todos los Pokemon' },
            { path: '', label: 'Mis Pokemon' },
            { path: '', label: 'Detalle del Pokemon' },
        ];
        this.manageComponent();
    }

    createTemplate() {
        let template = '<nav><ul>';
        this.menuOptions.forEach(
            (item: menuOptionI) =>
                (template += `<li><a href="${item.path}">${item.label} </a></li>
            `)
        );
        template += '</ul></nav>';
        return template;
    }

    manageComponent() {
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
    }
}
