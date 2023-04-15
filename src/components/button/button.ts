export enum AttributeButton {
    "but_t" = "but_t",
}

export default class Button extends HTMLElement {
    but_t?: string;

    static get observedAttributes(){
        const act: Record <AttributeButton, null> = {
            but_t: null,
        }
        return Object.keys(act);
    }

    attributeChangedCallback(
        propName: AttributeButton,
        _: unknown,
        newValue: string
        ){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';

        const button = this.ownerDocument.createElement('button');
        button.innerText = `${this.but_t}`
        button.addEventListener('Yes Joke',() =>{
            button.innerText = "not Joke";
        })
        this.shadowRoot?.appendChild(button);
    }
}

customElements.define('app-button',Button);