type Pizza = {
  name: string
  price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: string
}

const menu = [
  { name: "Margarita", price: 10 },
  { name: "Peperoni", price: 13 },
  { name: "Vegetarian", price: 15 },
  { name: "Mexican", price: 17 },
  { name: "Italian", price: 20 },
];


let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Order[] = [];

//  A utility function as a helper function that makes your code reusable
const addNewPizza = (pizzaObj: Pizza) => menu.push(pizzaObj);

const placeOrder = (pizzaName: string) => {
  const findPizzaByName = menu.find((el) => el.name === pizzaName);

  // Handle findPizzaByName is case it is possibly undefined
  if (!findPizzaByName) return "Pizza not found!";

  cashInRegister += findPizzaByName.price;

  let newOrder = { id: nextOrderId, pizza: findPizzaByName, status: "ordered" };
  orderQueue.push(newOrder);
  nextOrderId++;

  return orderQueue;
};

const completeOrder = (orderId: number) => {
  const foundOrderInQueue = orderQueue.find((order) => order.id === orderId);

  // Handle foundOrderInQueue is case it is possibly undefined
  if (!foundOrderInQueue) return "Order not found!";

  foundOrderInQueue.status = "completed";

  return foundOrderInQueue;
}


addNewPizza({ name: "Spicy Cambodian Pizza", price: 20 });

placeOrder("Spicy Cambodian Pizza");

completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);


export { };