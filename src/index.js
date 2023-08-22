import { deployLayout, clearLayout } from './componentLayout';
import { deployHome } from './componentHome';
import { deployContent } from './componentContent';
import { deployContact } from './componentContact';
import './style.css';
/*

*/

const componentLayout = (function() {
  const body = document.body;
  const elems = [];

  const appendElementTo = (node) => {
    while (elems.length > 0) {
      node.appendChild(elems.splice(0, 1)[0]);
    }
  };

  const generateElement = (element, num) => {
    for (let i = 0; i < num; i++) {
      elems.splice(0, 0, document.createElement(element));
    }
  };

  const createLayout = (elem, count, node, ...classes) => {
    generateElement(elem, count);
    for (let i = 0; i < count; i++) {
      if (classes[i] === undefined) continue;
      elems[i].classList.add(...classes[i])
    }
    appendElementTo(node);

    //TODO
    //test adding to style tag in head
  };

  const deployLayout = () => {
    createLayout('div', 1, body, ['main-container']);
    createLayout('div', 1,
      document.querySelector('.main-container'),
      ['flex-top-box', 'container']);

  };

  return {
    //use module
  };
})();

function controller() {
  deployLayout();
  deployHome();

  const homeBtn = document.querySelector('.nav > button:nth-child(1)');
  homeBtn.addEventListener('click', () => deployHome());

  const menuBtn = document.querySelector('.nav > button:nth-child(2)');
  menuBtn.addEventListener('click', () => deployContent());

  const contactBtn = document.querySelector('.nav > button:nth-child(3)');
  contactBtn.addEventListener('click', () => deployContact());
}

controller();