import IMask from 'imask';
import Component from '../../Component';

import _ from '@/components/PhoneNumber/phone-number.scss';

class PhoneNumber extends Component {
  constructor(config) {
    super();
    this.className = 'phone-number';
    this.input = config.input;

    this.mask = config.mask;

    this.imask = null;

    this.state = {
      value: '',
      isComplete: false
    };

  }

  init() {
    const element = document.querySelector(this.input);
    this.imask = new IMask(element, {
      mask: this.mask,
      lazy: false
    });

    this.onAcceptMask();
    this.onCompleteMask();

  }

  onAcceptMask() {
    this.imask.on("accept", () => {
      this.state.value = this.imask.value;
      this.state.isComplete = false;
    });
  }

  onCompleteMask() {
    this.imask.on("complete", () => {
      this.state.isComplete = true;
    });
  }
  

  get template() {
    return `
      <input type="text"/>
    `
  }

  get value() {
    return this.state.value;
  }

  get complete() {
    return this.state.isComplete;
  }
}

export default PhoneNumber
