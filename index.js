import { HeadComponent }  from './componentes/head.component.js'
import { HeaderComponent } from './componentes/header.component.js';

class Index {
    constructor() {
        this.title = 'Componentes'
        //document.head.innerHTML += new HeadComponent('Componentes').render()
        this.head = new HeadComponent(this.title)
        document.head.insertAdjacentHTML('afterbegin', this.head.render()  )    
        this.header = new HeaderComponent(this.title).render()
        console.dir(this.header)
        document.body.appendChild(this.header)
        this.footer = new HeaderComponent(this.autor, this.address).render()
        document.body.appendChild(this.footer)

    }
}


document.addEventListener('DOMContentLoaded', () => { new Index()})

