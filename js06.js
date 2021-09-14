let per1 = { id: 1, name: 'Joe' };

let per2 = per1;



doSomething(per2); //hoisting, use only var scope



function doSomething(p) {

  //p=per2  (memory address of per2 to p)

  p.name = 'Mary'; //pers2.name='Mary'

}

console.log(per1);

per2.id = 3;

console.log(per1);