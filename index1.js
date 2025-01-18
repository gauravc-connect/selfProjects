const users = [
    {firstName:"Gaurav", lastname:"chakravorty", age: 39},
    {firstName:"Ashok", lastname:"babu", age: 41},
    {firstName:"Ramesh", lastname:"Chandra", age: 39},
    {firstName:"Mithun", lastname:"Sharma", age: 30}
];
console.log("Source is ", users);
// req = {39 : 2, 41:1, 30,1}

/*const output = users.reduce(function(acc, curr){

    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});*/

const output = users.filter( x => x.age < 40).map( x => x.firstName);

console.log("the result is =>", output);
const out1 = users.reduce((acc,curr) =>{
   if(curr.age<40){
    acc.push(curr.firstName);
   }
   return acc;
}, []);

console.log("the out1 is =>", out1);

const p = new Promise((resolve, reject) => {
    
});