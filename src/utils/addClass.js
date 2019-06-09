export default (element, ...classNames) => {
  classNames.filter(className => !element.classList.contains(className)).forEach(className => {
    element.classList.add(className);
  });
};