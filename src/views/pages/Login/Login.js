import Inputfield from '@/components/Inputfield/Inputfield';

import _ from './login.scss';

class Login {
  constructor() {
    this.email = new Inputfield({
      placeholder: 'Email Address',
      required: true,
      value: 'Email'
    });

    this.password = new Inputfield({
      type: 'password',
      placeholder: 'Password',
      required: true,
      
    })
  }
  async render() {
    return `
      <div class="login">
        <div class="login__container">
          <form class="login__form">
            <div class="login__inputfield">
              ${await this.email.init()}
            </div>
            <div class="login__inputfield">
              ${await this.password.init()}
            </div>
            <button class="login__button" type="submit">Login</button>
          </form>
          <a href="#" class="login__link link">Register account</a>
        </div>
      </div>
    `
  }

  afterRender() {}
}

export default Login;