import {getdata} from '../service/getdata'
import { AttributeButton } from '../components/button/button';
import { apity } from '../types/apitype';
import "../components/export"

class Dashboard extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback(){
        const data = await getdata();
        this.render(data)
    }

    render(data:any){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';
        
        data.forEach((e: apity) => {
            const Joke = this.ownerDocument.createElement('app-joke');
            Joke.setAttribute(AttributeButton.but_t, "like pint");
            this.shadowRoot?.appendChild(Joke);
        });
    }
}

customElements.define('app-dashboard',Dashboard);