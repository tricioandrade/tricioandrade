import { render } from "../templates/render";

const template = document.createElement('template');
template.innerHTML = `<div><h1></div>`;

class Home extends HTMLElement{
    static main: any = this;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot?.appendChild(template.cloneNode(true));
    }

    static open() {
        render(document.createElement('home-page'));
        this.main.style.marginRight = '0';
    }

}

customElements.define('home-page', Home);
export default Home;