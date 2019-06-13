import Block from '@/Block';
import Inputfield from '@/components/Inputfield/Inputfield';
import PhoneNumber from '@/components/PhoneNumber/PhoneNumber';

import _ from './signup.scss';

class Signup extends Block {
  constructor() {
    super();
    this.name = 'signup';
  
    this.email = new Inputfield({
      placeholder: 'New email address',
      required: true,
      regexp: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    });

    this.password = new Inputfield({
      type: 'password',
      placeholder: 'Password',
      required: true,
      regexp: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    });

    this.confirmPassword = new Inputfield({
      type: 'password',
      placeholder: 'Confirm your password',
      required: true,
      regexp: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    })

    this.phoneNumber = new PhoneNumber({
      input: '.phone-number input',
      mask: '+{3}(000)000-00-00'
    });

    this.emailIsValid = false;
    this.passwordIsValid = false;

    this.onSubmit = this.onSubmit.bind(this);

  }

  afterRender() {
    document.querySelector('.js-signup-email').appendChild(this.email.render());
    document.querySelector('.js-signup-password').appendChild(this.password.render());
    document.querySelector('.js-signup-confirm-password').appendChild(this.confirmPassword.render());
    document.querySelector('.js-mask-phone').appendChild(this.phoneNumber.render());

    this.phoneNumber.init();
  }

  get template() {
    return `
      <div class="signup__container">
        <form class="signup__form js-signup-form">
          <div class="signup__inputfield js-signup-email"></div>
          <div class="signup__inputfield js-signup-password"></div>
          <div class="signup__inputfield js-signup-confirm-password"></div>
          <div class="signup__inputfield js-mask-phone"></div>
          <button class="login__button" type="submit">Sign up</button>
        </form>
        <a href="#/login" class="login__link link">Login</a>
      </div>
      `
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.isValidInstances) return;
    console.log('submit login page');
  }

  /**
    Detect input values if they true/false
    @readonly
  */
  get isValidInstances() {
    console.log(this.phoneNumber.complete)
    const passwordValue = this.password.fieldValue;
    const confirmPassword = this.confirmPassword.fieldValue;

    if (passwordValue !== confirmPassword) {
      
      this.password.notConfirmed();
      this.confirmPassword.notConfirmed();

      return false;
    }

    return [
      this.email.isValid,
      this.password.isValid,
      this.confirmPassword.isValid,
      this.phoneNumber.complete
    ].every(input => input === true);
  }

  event() {
    this.element.querySelector('.js-signup-form').addEventListener('submit', this.onSubmit);
  }
}

export default Signup;
