import _ from '@/components/Inputfield/inputfield.scss';

class Inputfield {
  constructor(config) {
    this.type = config.type || 'text';
    this.value = config.value || '';
    this.placeholder = config.placeholder || '';
    this.required = config.required || false;

  }

  render() {
    return `
      <div class="inputfield">
        <input
          type="${this.type}"
          ${this.placeholder ? `placeholder="${this.placeholder}"` : ''}
          ${this.value ? `value="${this.value}"` : 'value=""'}
        />
      </div> 
    `
  }
}

export default Inputfield;