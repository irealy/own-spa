import createElement from '@/utils/createElement';

class Block {
  constructor() {
    this.element = null;
    this.parent = document.getElementById('app');
    this.name = '';
  }

  get template() {
    throw new Error('Template must be initialisation');
  }

  render() {
    this.element = createElement(this.template);
    this.element.classList.add(this.name);
    this.event();
    
    return this.element;
  }

  afterRender() {
    throw new Error('Need to call afterRender function')
  }

  event() {}

  unevent() {}
}

export default Block;
