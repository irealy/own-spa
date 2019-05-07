import "@babel/polyfill";

import _ from '@/css/reset.scss';

import Router from '@/router';
import Home from '@/views/pages/Home/Home';
import Login from '@/views/pages/Login/Login';


const routes = {
  '/': Home,
  '/login': Login
};

new Router(routes);
