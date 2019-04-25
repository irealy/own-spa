import "@babel/polyfill";

import Router from '@/router';
import Home from '@/views/pages/Home/Home';
import Auth from '@/views/pages/Auth/Auth';


const routes = {
  '/': Home,
  '/auth': Auth
};

new Router(routes);
