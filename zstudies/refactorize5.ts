// function getTotalCost(cart) {
//   let totalCost = 0;
//   for (let i = 0; i < cart.length; i++) {
//     let item = cart[i];
//     if (item === "apple") {
//       totalCost += 0.5;
//     } else if (item === "banana") {
//       totalCost += 0.25;
//     } else if (item === "carrot") {
//       totalCost += 0.75;
//     } else if (item === "donut") {
//       totalCost += 1.5;
//     }
//     }
//     return totalCost;
//   }
  
//   const cart = ["apple", "banana", "carrot", "donut", "apple"];

//   let totalCost = getTotalCost(cart);


//answer
const itemCosts: Record<string, number> = {
  apple: 0.5,
  banana: 0.25,
  carrot: 0.75,
  donut: 1.5,
};

function getTotalCost(cart: string[]): number {
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    totalCost += itemCosts[item] ?? 0;
  }
  return totalCost;
}

const cart = ["apple", "banana", "carrot", "donut", "apple"];
let totalCost = getTotalCost(cart);

console.log(totalCost)  //3.5
