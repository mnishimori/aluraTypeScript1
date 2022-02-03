class Controller {

    private inputPreco: HTMLInputElement;

    constructor() {
        this.inputPreco = document.querySelector('#preco');
    }

    adiciona(event) {

        event.preventDefault();

        alert(this.inputPreco.value);
    }
}