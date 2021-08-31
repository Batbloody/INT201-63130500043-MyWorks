let product1 = { name : 'coke',  price: 15 };
let m = product1.price ;

let p = function (money = 0) {
    let torn = money - m ;
    return torn ;
};

console.log(p(50));
