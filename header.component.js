export class FooterComponent {
    constructor (autor, address) {
        this.autor = autor
        this.address = address
    }
    render () {
        const footer = document.createElement('footer'())
        footer.innerHTML = 
        `<p class="autor">${this.autor}</p>
        <p> ${this.address} </p>
        `
        return footer
    }
}