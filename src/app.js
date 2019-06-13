import _ from '@/css/reset.scss';

import Router from '@/router';
import Home from '@/views/pages/Home/Home';
import Login from '@/views/pages/Login/Login';
import Signup from '@/views/pages/Signup/Signup';


const routes = {
  '/': Home,
  '/login': Login,
  '/signup': Signup
};

new Router(routes);
