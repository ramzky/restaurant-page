import { createLayout, clearLayout } from "./componentLayout";

const contentObj = (name, desc, price) => {
  const getTitle = () => name + ' juice';
  const getName = () => name;
  const getPrice = () => '₱' + price;
  const getDesc = () => desc;

  return {
    getTitle,
    getName,
    getPrice,
    getDesc
  };
};

//sample contents
const mango = contentObj('mango',
  'This mango juice is sweet, refreshing and ' +
  'has a full-on mango flavor.',
  '20');
const orange = contentObj('orange',
  'Not only are fresh oranges super tasty, enjoying ' +
  'them raw as a juice is a nice way to get the ' +
  'most nutrients possible from the fruit.',
  '21');
const strawberry = contentObj('strawberry',
  'Strawberry Juice is not only beautiful, but it ' +
  'tastes great and its good for you.',
  '24');
const melon = contentObj('melon',
  'This delicious Watermelon Mint Juice is such an ' +
  'easy and refreshing summertime beverage. ',
  '22');

const menu = [mango, orange, strawberry, melon];

const deployContent = () => {
  //move clear to buttons?
  clearLayout(document.querySelector('.content'));

  for (let i = 0; i < menu.length; i++) {
    createLayout('div', 1,
      document.querySelector('.content'),
      ['menu', menu[i].getName()]);

    //create 3 paragraph for each div
    createLayout('p', 3,
      document.querySelector('.' + menu[i].getName()));
    
    //put content to paragraph
    document.querySelectorAll('.' + menu[i].getName() + ' p')[0]
      .textContent = menu[i].getTitle();
    document.querySelectorAll('.' + menu[i].getName() + ' p')[1]
      .textContent = menu[i].getDesc();
    document.querySelectorAll('.' + menu[i].getName() + ' p')[2]
      .textContent = menu[i].getPrice();
  }
};

export {
  deployContent
};