import "@babel/polyfill";

import Router from '@/router';
import Home from '@/views/pages/Home';
import Auth from '@/views/pages/Auth';


const routes = {
  '/': Home,
  '/auth': Auth
};

new Router(routes);
