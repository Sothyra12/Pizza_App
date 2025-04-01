type Pizza = {
  id: number
  name: string
  price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

const menu: Pizza[] = [
  { id: 1, name: "Margarita", price: 10 },
  { id: 2, name: "Peperoni", price: 13 },
  { id: 3, name: "Vegetarian", price: 15 },
  { id: 4, name: "Mexican", price: 17 },
  { id: 5, name: "Italian", price: 20 },
];


let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Order[] = [];

//  A utility function as a helper function that makes your code reusable
// declaring a void type (to be more explicit), because this function does not return any value
const addNewPizza = (pizzaObj: Pizza): void => {
  menu.push(pizzaObj)
};

const placeOrder = (pizzaName: string): Order | undefined => {
  const findPizzaByName = menu.find((el) => el.name === pizzaName);

  // Handle findPizzaByName is case it is possibly undefined
  if (!findPizzaByName) {
    console.error("Pizza not found!");
    return
  };

  cashInRegister += findPizzaByName.price;

  let newOrder: Order = { id: nextOrderId, pizza: findPizzaByName, status: "ordered" };
  orderQueue.push(newOrder);
  nextOrderId++;

  return orderQueue;
};

const completeOrder = (orderId: number): Order | undefined => {
  const foundOrderInQueue = orderQueue.find((order) => order.id === orderId);

  // Handle foundOrderInQueue is case it is possibly undefined
  if (!foundOrderInQueue) {
    console.error("Order not found!");
    return 
  };

  foundOrderInQueue.status = "completed";

  return foundOrderInQueue;
}


const getPizzaDetail = (identifier: string | number): Pizza | undefined => {
  // type narrowing
  // and be as explicit as we can => improving another devs experience 
  if (typeof identifier === "number") {
    return menu.find(el => el.id === identifier);
  } else if (typeof identifier === "string") {
    return menu.find(el => el.name.toLowerCase() === identifier.toLowerCase());
  } else {
    throw new TypeError("Parameter `identifier` must be either a string or a number");
  }
}


addNewPizza({ id: 6, name: "Spicy Cambodian Pizza", price: 20 });

placeOrder("Spicy Cambodian Pizza");

completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);


export { };