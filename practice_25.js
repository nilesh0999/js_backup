// 1. how to add key value pair in object

let object = {
  name: "akshay",
  age: 23,
};

let INFO = Object.assign({ qualification: "TYBCS", name: "sunny" }, object); // using Object.assign method

console.log("INFO is", INFO);

/*  o/p=
        INFO is { qualification: 'TYBCS', name: 'akshay', age: 23 }
*/

object.phone_no = 9850317956; // using dot(.) notation

console.log(object);

/*  o/p=
        { name: 'akshay', age: 23, phone_no: 9850317956 }
*/
object["email"] = "akshay12@gmail.com"; // bracket notation

console.log(object);

/*  o/p=
        {
  name: 'akshay',
  age: 23,
  phone_no: 9850317956,      
  email: 'akshay12@gmail.com'
}    
*/

// 2. call apply bind method

let stud1 = {
  name: "sunny",
  quali: "bsc",
};

let infomation = function (age, address) {
  console.log(
    `name is ${this.name},quali ${this.quali},age is ${age},current address is ${address}.`
  );
};

infomation.call(stud1, 23, "nanded city"); // call method

let stud2 = {
  name: "akshay",
  quali: "bcs",
};

infomation.apply(stud2, [23, "kavenagar"]); // apply method

let stud3 = {
  name: "nilesh",
  quali: "bcs(IT)",
};

let bindMethod = infomation.bind(stud3, 23, "home colony");

bindMethod(); //  name is nilesh,quali bcs(IT),age is 23,current address is home colony.

console.log("Bind Method", bindMethod); //Bind Method [Function: bound infomation]

// 3. for in loop

// iterate objects and strings only

let fruits = {
  banana: 10,
  mango: 20,
  kiwi: 30,
};

for (let key in fruits) {
  console.log(fruits[key]); // shows only values from fruits object
  /*  
        10 
        20
        30
    */
  console.log({ [key]: fruits[key] }); // shows key value pair in fruits object
  /*
        { banana: 10 }
        { mango: 20 }
        { kiwi: 30 }  
    */
}

// 4. for of loop only use for array & string

let arr = [11, 22.5, "new", null];

for (let ele of arr) {
  console.log(ele);
}

/* 
    11
    22.5
    new
    null 
*/

let students = ["nilesh", "sunny", "akshay", "riyaz"];

students.forEach(function (name) {
  console.log("name is", name);
});

let student1 = {
  name: "laxi",
  age: 22,
  address: "dhayri",
};

let newstudent = Object.keys(student1);
console.log(newstudent); //  [ 'name', 'age', 'address' ]

let newstudent1 = Object.values(student1);
console.log(newstudent1); // [ 'laxi', 22, 'dhayri' ]

Object.keys(student1).forEach((key) => {
  console.log(key, student1[key]);
});

/* 
name laxi
age 22
address dhayri 
*/

// 5. while loop (entry control loop)

let a = 1;
while (a > 10) {
  console.log(a);
  a++;
}

//  6. function setInterval use clearInterval

function countor() {
  var i = 0;
  setInterval(() => {
    if (i <= 5) {
      clearInterval(this);
    } else {
      console.log("siddhesh", i++);
    }
  }, 2000);
}

countor();

/*  o/p=
        0   1   2   3   4
*/

function counter1() {
  for (let a = 0; a < 4; a++) {
    setTimeout(() => {
      console.log(a);
    }, a * 2000);
  }
}

counter1();

// 7. call by value & call by refferce

let aa = 10;

let b = aa;

console.log("value of aa", aa); //  10
console.log("value of b", b); //  10

//  8. Object inside function

let obje = {
  a: "nilesh",
  b: 12,
  c: [10, 2, 6, 5],
  d: {
    ab: 15,
  },
  e: function sum(a, b) {
    console.log("sum of", a + b);
  },
};

for (let keys in obje) {
  if (keys == "e") {
    console.log(obje[keys](5, 6));
  } else {
    console.log(obje[keys]);
  }
}

// for(let key of Object.entries(obje)){
//     console.log(key);
// }

/* 
    [ 'a', 'nilesh' ]
    [ 'b', 12 ]
    [ 'c', [ 10, 2, 6, 5 ] ]
    [ 'd', { ab: 15 } ]
    [ 'e', [Function: sum] ] 
*/

console.log(obje.e(5, 6)); // sum of 11

// let bike=["shine","hero","fz"]
// let own=" ";

// for(let i=0;i<bike.length;i++){
//     own+=bike[i]
// }
// console.log(own);
