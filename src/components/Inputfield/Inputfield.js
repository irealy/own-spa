import _ from '@/components/Inputfield/inputfield.scss';

class Inputfield {
  constructor(config) {
    this.el = 'inputfield';
    this.type = config.type || 'text';
    this.value = config.value || '';
    this.placeholder = config.placeholder || '';
    this.required = config.required || false;
  }

  async render() {
    console.log('render');
    
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

  event() {
    console.log(this.el);
    
    document.querySelectorAll(`.${this.el} input`).forEach(item => {
      console.log('dsdsds');
      
      item.addEventListener('input', () => {
        console.log('on input');
      })
    })
  }

  async init() {
    return await this.render().then((n => {
      this.event();
      return n;
    }));
    
  }

  // onInput() {
  //   document.querySelector(`.${this.el}`).addEventListener('input', () => {
  //     console.log('on input', this);
      
  //   })
  // }
}

export default Inputfield;