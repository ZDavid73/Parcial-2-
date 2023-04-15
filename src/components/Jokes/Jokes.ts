import { AttributeButton } from "../button/button";

export enum AttributeJoke {
    "but_t" = "but_t",
}

export default class Joke extends HTMLElement{
but_t: string = "";

    static get observedAttributes(){
        const attrs: Record <AttributeJoke,null> = {
            but_t: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeJoke,
        _: unknown,
        newValue: string
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }

        constructor(){
            super();
            this.attachShadow({mode: 'open'});
        }

        connectedCallback(){
            this.render();
        }

        render(){
            if(this.shadowRoot) this.shadowRoot.innerHTML = '';

            const container = this.ownerDocument.createElement('section');

            const button = this.ownerDocument.createElement('app-button');
            button.setAttribute(AttributeButton.but_t, this.but_t);

            container.appendChild(button);

            this.shadowRoot?.appendChild(container)
        }
}

customElements.define('app-joke', Joke)