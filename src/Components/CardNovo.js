class CardNovo extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.innerHTML = "<h1> Olá Marcelo </h1>";

    }
}

customElements.define("card-novo",CardNovo);