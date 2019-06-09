const createElement = (template) => {
  const newEl = document.createElement('div');
  newEl.innerHTML = template;

  return newEl;
};

export default createElement;
