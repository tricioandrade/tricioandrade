import { AttachShadows } from "../decorators/AttachSadows";

class Home extends HTMLElement {
    home: string;
    
    static observedAttributes: [string] = ['home'];
    constructor(){
        super();
        this.home = '';

    }

    @AttachShadows()
    shadow () {
        return this;
    }
}

export default Home;
