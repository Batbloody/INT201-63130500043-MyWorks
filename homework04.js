// let product1 = { name : 'coke',  price: 15 };
// let m = product1.price ;

// let p = function (money = 0) {
//     let torn = money - m ;
//     return torn ;
// };

// console.log(p(50));

function torn(cashProduct , cashCustomer){
    let cash = [500,100,50,20,10,5,2,1];
    let numbercash = [0,0,0,0,0,0,0,0];
    let cal = cashCustomer - cashProduct ;
    let calbefore = cal ;
    let text = [];
    if (cal < 0) {
        return "not enough money"
    }else {
        for (let index = 0 ; index < cash.length ; index++){
            numbercash[index] = Math.floor(cal / cash[index]);
            text.push(`\n ${cash[index]} : ${numbercash[index]}`);
        }
    }

    return `torn : ${calbefore} quantity : ${text}` ;

}

console.log(torn( 2499 , 3000));



