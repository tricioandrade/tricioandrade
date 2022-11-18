import { render } from "../templates/render";
import {template} from "../templates/homeTemplate";

class Home extends HTMLElement{
    static main: any = this;

    constructor() {
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot?.appendChild(template.content.cloneNode(true));
    }

    static open<T extends { new(): {style: HTMLStyleElement} }>(main: T | any) {
        render(main);
    }
}

customElements.define('home-page', Home);
export default Home;