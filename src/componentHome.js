import { createLayout, clearLayout } from "./componentLayout";

const deployHome = () => {
  clearLayout(document.querySelector('.content'));
  createLayout('p', 1,
    document.querySelector('.content'),
    ['home-para']);
  
  document.querySelector('.home-para').textContent =
    'Authentic and Juicy Fruit juice';
};

export {
  deployHome
};