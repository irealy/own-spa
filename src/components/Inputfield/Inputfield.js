
import Component from '../../Component';

import addClass from '@/utils/addClass';
import removeClass from '@/utils/removeClass';

import _ from '@/components/Inputfield/inputfield.scss';

class Inputfield extends Component {
  constructor(config) {
    super();
    this.className = 'inputfield';
    this.type = config.type || 'text';
    this.value = config.value || '';
    this.placeholder = config.placeholder || '';
    this.required = config.required || false;
    this.regexp = config.regexp;

    this.state.valid = false;

    this.onInput = this.onInput.bind(this);
    
  }

  onInput(e) {
    const target = e.target;
    const test = this.regexp.test(target.value);

    if (!test) {
      this.state.valid = false;
      removeClass(target, 'is-success');
      addClass(target, 'is-error');

      return;
    }

    this.state.valid = true;
    
    removeClass(target, 'is-error');
    addClass(target, 'is-success');
  }

  get template() {
    return `
      <input
        type="${this.type}"
        ${this.placeholder ? `placeholder="${this.placeholder}"` : ''}
        ${this.value ? `value="${this.value}"` : 'value=""'}
      />
    `
  }

  get isValid() {
    return this.state.valid;
  }

  event() {
    this.element.querySelector('input').addEventListener('input', this.onInput)
  }
}

export default Inputfield;