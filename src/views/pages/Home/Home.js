class Home {
    async render() {
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
    async afterRender() {}
}

export default Home;