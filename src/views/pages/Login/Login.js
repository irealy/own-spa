import Block from '@/Block';
import Inputfield from '@/components/Inputfield/Inputfield';

import _ from './login.scss';

class Login extends Block {
  constructor() {
    super();
    this.name = 'login';
  
    this.email = new Inputfield({
      placeholder: 'Email Address',
      required: true,
      regexp: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    });

    this.password = new Inputfield({
      type: 'password',
      placeholder: 'Password',
      required: true,
      regexp: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    });

    this.emailIsValid = false;
    this.passwordIsValid = false;

    this.onSubmit = this.onSubmit.bind(this);

  }

  afterRender() {
    document.querySelector('.js-login-email').appendChild(this.email.render());
    document.querySelector('.js-login-password').appendChild(this.password.render());
  }

  get template() {
    return `
      <div class="login__container">
        <form class="login__form js-login-form">
          <div class="login__inputfield js-login-email"></div>
          <div class="login__inputfield js-login-password"></div>
          <button class="login__button" type="submit">Login</button>
        </form>
        <a href="#" class="login__link link">Register account</a>
      </div>
      `
  }

  onSubmit(e) {
    e.preventDefault();

    if (!this.isValidInstances) return;
    
    console.log('submit login page');
  
  }

  get isValidInstances() {
    return [this.email.isValid, this.password.isValid].every(input => input === true);
  }

  event() {
    this.element.querySelector('.login__form').addEventListener('submit', this.onSubmit);
  }
}

export default Login;