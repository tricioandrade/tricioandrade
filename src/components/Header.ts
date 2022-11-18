import { render } from "../templates/render";
import {template} from "../templates/headerTemplate";

class Header extends HTMLElement{
    static main: any = this;

    constructor() {
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot?.appendChild(template.content.cloneNode(true));
    }

    static open<T extends { new(): {style: HTMLStyleElement} }>(main: T | any) {
        // render(main);
    }
}

customElements.define('app-header', Header);
export default Header;