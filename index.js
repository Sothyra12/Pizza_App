const menu = [
  { name: "Margarita", price: 10 },
  { name: "Peperoni", price: 13 },
  { name: "Vegetarian", price: 15 },
  { name: "Mexican", price: 17 },
  { name: "Italian", price: 20 },
];

let nextOrderId = 1;
let cashInRegister = 100;
const orderQueue = [];

//  A utility function as a helper function that makes your code reusable
const addNewPizza = (pizzaObj) => menu.push(pizzaObj);

const placeOrder = (pizzaName) => {
  const findPizzaByName = menu.find((el) => el.name === pizzaName);

  if (!findPizzaByName) return "Pizza not found!";

  cashInRegister += findPizzaByName.price;

  let newOrder = { id: nextOrderId, pizza: findPizzaByName, status: "ordered" };
  orderQueue.push(newOrder);
  nextOrderId++;

  return orderQueue;
};

const completeOrder = (orderId) => {
  const foundOrderInQueue = orderQueue.find((order) => order.id === orderId);

  if (!foundOrderInQueue) return "Order not found!";

  foundOrderInQueue.status = "completed";

  return foundOrderInQueue;
};