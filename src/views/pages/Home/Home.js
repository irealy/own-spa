import Block from '@/Block';

class Home extends Block {
    constructor() {
        super();

        this.name = 'home-page';
    }
    get template() {
        return `
            <section class="section">
                <h1> Home </h1>
                <ul>
                    <li><a href="#/login">Login</a> </li>
                    <li>Pidr</li>
                </ul>
            </section>
        `
    }

    afterRender() {}
}

export default Home;