import { deployLayout } from './componentLayout';
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
      elems[0].classList.add(...classes[i])
    }
    appendElementTo(node);

    //TODO
    //test adding to style tag in head
  };

  const test = () => {
    createLayout('div', 1, body, ['main-container']);
    createLayout('div', 1,
      document.querySelector('.main-container'),
      ['flex-top-box', 'container'])
  }

  return {
    generateElement,
    appendElementTo,
    createLayout,
    test
  };
})();

//const test = componentLayout;
//test.test();
deployLayout();


//console.log('test');