// let WaterDispenser = {
//     name: ['coke', 'pepsi'],
//     price: [15, 18]
// };

// console.log(WaterDispenser);
// console.log(WaterDispenser.name[0]);
// console.log(WaterDispenser.name[WaterDispenser.name.length-1]);

let product1 = {"name" : 'coke'  , "price" : 15 } ;
let product2 = {"name" : 'pepsi'  , "price" : 18 } ;

let waterDispenser = [product1 , product2 ];

for(let water of waterDispenser) {console.log(water)} ;