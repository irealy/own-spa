let Home = {
  render : async () => {
      let view = `
          <section class="section">
              <h1> Home </h1>
              <ul>
                  <li>Loh</li>
                  <li>Pidr</li>
              </ul>
          </section>
      `
      return view
  }, 
  after_render: async () => {}

}

export default Home;