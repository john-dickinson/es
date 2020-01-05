// Utilities start
// Query Selector
const qs = (selector, el) => {
  return el ? el.querySelector(selector) : document.querySelector(selector);
};

// Query Selector All
const qsa = (selector, el) => {
  return el ? [].slice.call(el.querySelectorAll(selector)) : [].slice.call(document.querySelectorAll(selector));
};

// Build DOM node
const buildNode = (domString) => {
  const template = document.createElement('div');
  template.innerHTML = domString.trim();
  return template.firstChild;
};

// create Array
const arr = (structure) => [].slice.call(structure);

// Generic Event LIstener
const listen = (el, event, func) =>
  el.addEventListener(event, func);

// Check for disabled class
const disabled = (el) =>
  arr(el.classList).indexOf('ds-disabled') !== -1;

// contains a certain class
const containsClass = (el, className) => {
  return Array.isArray(className) ?
    className.filter((name) =>
      el.classList.contains(name) ? name : '',
    ) :
    el.classList.contains(className);
};

// Generalizable animation function for dynamic height + width anim
const animate = (el, property, reset, recurse) => {
  const buildAnimation = () => {
    const propertyPad = {
      height: ['padding-top', 'padding-bottom'],
      width: ['padding-left', 'padding-right'],
    };

    const propertyVal = {
      height: 'scrollHeight',
      width: 'scrollWidth',
    };

    const plusPadding = propertyPad[property].reduce((val, nextVal) =>
      parseInt(window.getComputedStyle(el).getPropertyValue(val).replace('px', '')) +
      parseInt(window.getComputedStyle(el).getPropertyValue(nextVal).replace('px', ''))
    );

    return `${(el[propertyVal[property]] + plusPadding)}px`;
  };

  const assign = (val) => {
    el.style.transition = 'height 200ms ease';
    el.style.height = val;
  };

  const runAnimation = () => {
    if (reset) {
      animate(el, property, false, true);
      setTimeout(() => {
        assign('0px');
      }, 10);
    } else {
      const animationValue = buildAnimation();
      assign(animationValue);
    }

    setTimeout(() => {
      if (reset === false && !recurse) el.style.height = 'auto';
    }, 200);
  };

  return runAnimation();
};

const isEnter = (e) => e.which === 13;
