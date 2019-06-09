import createElement from './utils/createElement';

class Component {
  constructor() {
    this._element = null;
    this.className = null;
    this.state = {};
  }

  get element() {
    return this._element;
  }

  get template() {
    throw new Error('You have to define template');
  }

  render() {
    this._element = createElement(this.template);
    this._element.classList.add(this.className);
    this.event();

    return this._element;
  }

  unrender() {
    this.unevent();
    this._element.remove();
    this._element = null;
  }

  event() {}

  unevent() {}

}

export default Component;
