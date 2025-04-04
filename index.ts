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

// hoisting refers to the built-in behavior of the language through which declarations of functions, 
// variables, and classes are moved to the top of their scope – all before code execution
let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;
const orderQueue: Order[] = [];

const menu: Pizza[] = [
  { id: nextOrderId++, name: "Margarita", price: 10 },
  { id: nextOrderId++, name: "Peperoni", price: 13 },
  { id: nextOrderId++, name: "Vegetarian", price: 15 },
  { id: nextOrderId++, name: "Mexican", price: 17 },
  { id: nextOrderId++, name: "Italian", price: 20 },
];

//  A utility function as a helper function that makes your code reusable
// declaring a void type (to be more explicit), because this function does not return any value
const addNewPizza = (pizzaObj: Omit<Pizza, "id">): Pizza => {
  const newPizza: Pizza = {
    id: nextPizzaId++,
    ...pizzaObj
  }
  menu.push(newPizza);
  return newPizza;
};

const placeOrder = (pizzaName: string): Order[] | undefined => {
  const findPizzaByName = menu.find((el) => el.name === pizzaName);

  // Handle findPizzaByName is case it is possibly undefined
  if (!findPizzaByName) {
    console.error("Pizza not found!");
    return
  };

  cashInRegister += findPizzaByName.price;

  let newOrder: Order = { id: nextOrderId++, pizza: findPizzaByName, status: "ordered" };
  orderQueue.push(newOrder);
  //nextOrderId++;

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


addNewPizza({ name: "Spicy Cambodian Pizza", price: 20 });
//addNewPizza({ id: nextPizzaId++, name: "Normal Cambodian Pizza", price: 15 });

// placeOrder("Spicy Cambodian Pizza");
// completeOrder(1);

// placeOrder("Normal Cambodian Pizza");
// completeOrder(2);

console.log("Menu:", menu);
// console.log("Cash in register:", cashInRegister);
// console.log("Order queue:", orderQueue);


export { };