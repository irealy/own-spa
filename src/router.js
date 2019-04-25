class Router {
  constructor(routers) {
    this.app = document.getElementById('app') || null;
    this.routers = routers;
    this.redirect();
    this.onHashChange();
    this.onLoad();
  }

  parseUrlRequest() {
    const url = location.hash.slice(1).toLowerCase() || '/';
    const r = url.split("/");
    
    return {
      resource: r[1],
      id: r[2],
      verb: r[3]
    }
  }

  async init() {
    const request = this.parseUrlRequest();
    const parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
    const page = this.routers[parsedURL] ? new this.routers[parsedURL] : 'null';
    
    this.app.innerHTML = await page.render();
    await page.afterRender();
  }

  redirect() {
    window.location.href = '#';
  }

  onHashChange() {
    window.addEventListener('hashchange', this.init.bind(this));
  }

  onLoad() {
    window.addEventListener('load', this.init.bind(this));
  }
}

export default Router;