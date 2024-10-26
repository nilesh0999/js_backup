// string methods

let string = "javascript";

let test1 = string.length;

console.log("length of string is:", test1); //  length of string is: 10

let test2 = string.charAt(8);

console.log("character at that position is:", test2); //  character at that position is: p

let test3 = string.slice(4, 10);

console.log("slice method:", test3); //   slice method: script

// match method return an array

let str = "my name is nilesh & my quali Is bsc(it).";

console.log("match method", str.match("nilesh"));
/*
    match method [
  'nilesh',
  index: 11,
  input: 'my name is nilesh & my quali is bsc(it).',
  groups: undefined
]
*/
console.log("match2 method", str.match(/is/));

/*match2 method [
    'is',
    index: 8,
    input: 'my name is nilesh & my quali is bsc(it).',
    groups: undefined
  ] */

console.log("match3 method", str.match(/is/g)); // here (g means global) match3 method [ 'is', 'is' ]

console.log("match4 method", str.match(/is/g)); // here (g means global) match3 method [ 'is', 'is' ]

//   array methods

// map method it return new array

let age = [19, 20, 19, 22];

let current_age = age.map((a) => {
  return a + 2;
});

console.log("Map method", current_age); //  Map method [ 21, 22, 21, 24 ]

// filter method

let cage = age.filter((b) => {
  return b < 20;
});

console.log("filter method", cage); //  filter method [ 19, 19 ]

// reduce method

let pp = [2, 4, 6, 8, 10, 12];
let pq = pp.reduce((p1, p2) => {
  return p1 + p2;
});

console.log("reduce method", pq); //  reduce method 42

// setTimeout function

// std=(name)=>{
//   setTimeout(()=>{
//     // console.log(`hii,${name}`);
//   },2000)
// }
// std("nilesh")

// // setInterval

// std=(name)=>{
//   setInterval(()=>{
//     // console.log(`hii,${name}`);
//   },5000)
// }
// std("nilesh");

//  Object Methods

const emp = {
  name: "shani",
  age: 22,
  quali: "bsc",
  P_year: 2019,
};

console.log("object method Keys", Object.keys(emp)); //  object method Key [ 'name', 'age', 'quali', 'P_year' ]

console.log("object method Values", Object.values(emp)); //  object method Values [ 'shani', 22, 'bsc', 2019 ]

console.log("object method Entries", Object.entries(emp));

//  object method Entries [[ 'name', 'shani' ],[ 'age', 22 ],[ 'quali', 'bsc' ], [ 'P_year', 2019 ]

console.log("object Assign", Object.assign({ city: "Pune", age: 22 }, emp));

const car = {
  Price: 500000,
  Company_name: "TATA",
};

Object.seal(car);
car.Price = 5500000;

console.log("Object Seal method", car); // value changed

//  Object Seal method { Price: 5500000, Company_name: 'TATA' }

delete car.Company_name;

console.log("Object Seal method_1", car); // cannot delete when sealed

//  Object Seal method_1 { Price: 5500000, Company_name: 'TATA' }

const client = {
  budget: 300000,
};

Object.freeze(client);

client["budget"] = "500000"; // using bracket notation

console.log("Object freeze method", client);

//  Object freeze method { budget: 300000 }

// forEach  loop  with arrow function

let students = ["nilesh", "sunny", "akshay"];

students.forEach((ele) => console.log("forEach loop:", ele));

/*  forEach loop: nilesh
forEach loop: sunny
forEach loop: akshay */

// this keyword

const user = {
  f_name: "Nisha",
  getName: function () {
    setTimeout(() => {
      console.log(this.f_name);
    }, 2000);
  },
};
user.getName();

// this keyword using call,apply,bind

const users = {
  F_Name: "nilesh",
  L_Name: "gatala",
};

const cust = {
  F_Name: "vinayak",
  L_Name: "jina",
};

const req = {
  F_Name: "TheTwo",
  L_Name: "Bakers",
};

FullName = function (city, year) {
  console.log(`FullName is ${this.F_Name} ${this.L_Name} ${city} ${year}`);
};

FullName.call(users, "Pune", 1999); //  FullName is nilesh gatala Pune 1999
FullName.apply(cust, ["Pune", 2001]); //  FullName is vinayak jina Pune 2001
info = FullName.bind(req, "pune", 2019);

console.log("Bind Method", info); //  Bind Method [Function: bound FullName]

const arr1 = ["a", "b", "c", "d"];
const arr2 = ["a", "q", "z", "y", "p"];

if (arr1[0] == arr2[0]) {
  console.log("true");
} else {
  console.log("false");
}

// let a= arr1.some(e=>{
//   return arr1==arr2;
// })

// console.log(a);

let x = {
  a: "nilesh",
  b: 15,
  c: [10, 20, 30, 40],
  d: {
    abc: 45,
    def: 54,
  },
  e: function (a, b, c) {
    console.log(a + b + c);
  },
};
for (let key in x) {
  if (key == "e") {
    console.log(x[key](1, 2, 3));
  } else {
    console.log(x[key]);
  }
}
// const xyz= x.e(5,6,1)
// console.log("fun in object", xyz);
console.log("object length", Object.keys(x).length); //  5
