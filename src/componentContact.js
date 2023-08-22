import { createLayout, clearLayout } from "./componentLayout";

const deployContact = () => {
  clearLayout(document.querySelector('.content'));
  createLayout('p', 2,
    document.querySelector('.content'),
    ['flex-item', 'contact-para'],
    ['flex-item', 'contact-para', 'details']);
  
  document.querySelector('.content .contact-para:nth-child(1)')
    .textContent = 'Contact Us';
  document.querySelector('.content .details')
    .textContent = 'Patooty: (02)8 123-4567';
};

export {
  deployContact
};