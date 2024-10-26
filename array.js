//   Array Methods

let arr = ["Nilesh", "Sunny", "Akshay", "Laxi"];
console.log(arr, typeof arr); //  [ 'Nilesh', 'Sunny', 'Akshay', 'Laxi' ]   typeof arr is object

console.log("Array Methods");

// 1. tostring()=The JavaScript method toString() converts an array to a string of (comma separated) array values.

let arr1 = arr.toString();

console.log("1. tostring method:", arr1, typeof arr1); //  1. tostring method : Nilesh,Sunny,Akshay,Laxi typeof string

//  2.  join()  = The join() method also joins all array elements into a string.

let arr2 = arr.join("-");

console.log("2. join method :", arr2); //2. join method : Nilesh-Sunny-Akshay-Laxi

// 3. pop()= delete last element from array

let fruit = ["mango", "strowberry", "pineapple"];
let arr3 = fruit.pop();

console.log("3. pop method :", arr3, fruit); // It returns pop element from array: pineapple

//  4.  push()= add element at last position in array & it return new array length

let arr4 = fruit.push("banana");

console.log("4. push method", arr4, fruit);

//  add element at last position in array [ 'mango', 'strowberry', 'banana' ]

// 5. shift()=  removes 1st element from array & return it

let arr5 = fruit.shift();

console.log("5. shift method :", arr5, fruit); // 5. shift method : mango [ 'strowberry', 'banana' ]

//  6.  unshift() = add element at 1st position in an array & return it new array length

let arr6 = fruit.unshift("apple");

console.log("6. unshift method", arr6, fruit); // 6. unshift method 3 [ 'apple', 'strowberry', 'banana' ]

//  7.  delete Operator in array

let bikes = ["fz", "shine", "hero honda", "r15"];
console.log(bikes.length); //  4

delete bikes[2];
console.log("7. delete :", bikes); //  [ 'fz', 'shine', <1 empty item>, 'r15' ]
console.log(bikes.length); //  4

// 8. concat()   = it merge 2 or more array & it returns new array
let no = [1, 2, 3, 4, 5];
let no1 = [11, 12, 13, 14, 15];
let no2 = [21, 22, 23, 24, 25];

let newno = no.concat(no1, no2);
console.log("8. concat method :", newno); //  8.concat method : [1,2,3,4,5,11,12,13,14,15,21,22,23,24,25]

// 9. sort()    = it is used to sort alphabetically & it modify original array

let compare = (e, f) => {
  return e - f;
};
let num = [54, 32, 85, 9, 67, 3];
num.sort();
console.log("9. sort method :", num); // 9. sort method : [ 3, 32, 54, 67, 85, 9 ]

num.sort(compare);
console.log("9. sort method :", num); // 9. sort method : [ 3, 9, 32, 54, 67, 85 ] in desending order

// 10. reverse()  = It reverse an array

//  [ 3, 9, 32, 54, 67, 85 ]

num.reverse();
console.log("10. reverse method :", num); // 10. reverse method : [ 85, 67, 54, 32, 9, 3 ]

// 11. splice() = we can add element in between array & also we can remove element from array

let snacks = ["poha", "uppit", "idli", "appe"];

snacks.splice(2, 1, "dosa", "sandwitch");

console.log("11. splice method :", snacks); // 11. splice method : [ 'poha', 'uppit', 'dosa', 'sandwitch', 'appe' ]

/* here 2 say at that position add element should be added
    here 1 say how many elements should be removed after adding this elements  */

//  12. slice() it create new array

let newsnacks = snacks.slice(2, 4);

console.log("12. slice method :", newsnacks); // 12. slice method : [ 'dosa', 'sandwitch' ]

//  "2" indicate starting value & "4" indicate end value
// & then it gives new array in between "2 to 4" values

//  13. map()   = its create new array

let players = [18, 45, 3];
let newplayers = players.map((jno) => {
  // console.log("13.map method",jno);
  return jno + 1;
});
console.log("13. map method", newplayers);

// 14. filter() it return new array if condition is passes

let per = [45, 83, 90, 67, 75, 53];
let newper = per.filter((p) => {
  return p < 72;
});
console.log("14. filter method", newper); // 14. filter method [ 45,67,53 ]

// 15. reduce() it returns new array

{
  let pp = [1, 2, 3, 4, 5, 6];
  let pq = pp.reduce((p1, p2) => {
    return p1 + p2;
  });
  console.log("15. reduce method", pq); //  15. reduce method 21
}

let arr18 = [1, 2, 3, 1, 23];
const reduce_fn = (f1, f2) => {
  return f1 + f2;
};
let arr19 = arr18.reduce(reduce_fn);
console.log("arr19 after reduce method is :", arr19); //  arr19 after reduce method is : 30

//  16. some()  its return boolean value if in array 1 condition is true then it return true
{
  let arr15 = [10, 50, 15, 62, 55];
  let aa = arr15.some((a) => {
    return a > 50;
  });
  console.log("16. some method", aa); // 16. some method true

  // 17. every()      its return boolean value if in array all element passes condition then it return true

  let aaa = arr15.every((a) => {
    return a > 10;
  });
  console.log("17. every method", aaa); //  17. every method false
}

//  18. flat()  it bind array

let inputarray = [[10], [20, 30], [40, 50, 60], [70, 80, 90, 100]];

let oparray = inputarray.flat();
console.log("19. flat method", oparray); // 19. flat method [ 10, 20, 30, 40,  50, 60, 70, 80, 90, 100 ]
