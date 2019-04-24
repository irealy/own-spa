import "@babel/polyfill";

import Router from './router';
import Home from './views/pages/Home';
import About from './views/pages/About';


const routes = {
  '/': Home,
  '/about': About
};

const router = new Router(routes);
