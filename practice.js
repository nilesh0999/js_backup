{
  // filter method
  let number = [1, 2, 3, 4, 5];
  let greaterThan = number.filter((item) => item > 2);
  // return greaterThan;
  console.log("greaterThan", greaterThan); //  greaterThan [ 3, 4, 5 ]

  // filter method in array object
  let student = [
    { name: "anup", grade: 70 },
    { name: "nagesh", grade: 77 },
    { name: "shani", grade: 78 },
    { name: "sid", grade: 80 },
    { name: "akshay", grade: 67 },
  ];

  let studentGrade = student.filter((gr) => {
    return gr.grade > 74;
  });

  console.log("studentGrade", studentGrade);

  /*  studentGrade [
  { name: 'nagesh', grade: 77 },
  { name: 'shani', grade: 78 }, 
  { name: 'sid', grade: 80 }    
] */
}

{
  //  map method
  let number = [1, 2, 3, 4, 5];
  let double = number.map((item, index) => {
    return item * item;
  });
  console.log("double", double); //  double [ 1, 4, 9, 16, 25 ]
}

{
  // reduce method

  let number = [1, 2, 3, 4, 5];
  let multi = number.reduce((total, current) => {
    return total * current;
    //   }, 0); //  0
    //   }, 1); //  120
    //   }, 2); //  240
  }, 3); //  360
  console.log("multi", multi);

  let pets = ["dog", "cat", "chichen", "duck", "dog", "chicken", "cat", "cat"];
  let countPets = pets.reduce((item, pet) => {
    !item[pet] ? (item[pet] = 1) : item[pet]++;

    return item;
  });
  console.log("countPets", countPets);
}
