const obj = {
    a: {
      c: 3
    },
    b: 2
  }
  
  const obj2 = {
    ...obj,
    a: {
      ...obj.a,
      c: 42
    }
  }
//

// const x = () => 7;
// console.log(typeof x)

const obj3 = {
   prop1: "Superman",
   prop2:"Spiderman",
   prop3: "Shaktiman"
}

const obj4 = {...obj3};
console.log(obj4.prop1)

function sample({x,y,z}){
    console.log(x+y+z);
}

sample({x:1,y:3,z:3});

function multiply(multiple,asd){
    // return theArgs.map((element)=>{
      //  return multiple * element;
      return multiple;
}
console.log(multiply(4,6))
