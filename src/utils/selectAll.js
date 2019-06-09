export default (selector, element = window.document) =>
  [].slice.call(element.querySelectorAll(selector));