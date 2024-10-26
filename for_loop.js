let Age=[12,13,20,22,18];

    // 1.for loop

for(let i=0;i<Age.length;i++){
    console.log("for loop",i); // it return index 0 1 2 3 4
    console.log("for loop",Age[i]); // it return array elements 12 13 20 22 18
}

    // 2.ForEach loop

    let no=[5,6,8,9,2]
    no.forEach((ele)=>{
        console.log("ForEach loop",ele*2); //  10  12  16  18  4
    })
    /*
    o/p =
        ForEach loop 10
        ForEach loop 12
        ForEach loop 16
        ForEach loop 18
        ForEach loop 4
    */

    // 3. Array.from   = it convert string to array
    
    let name="Nilesh"
    let arr=Array.from(name);
    console.log("Array.From",arr);  //  Array.From [ 'N', 'i', 'l', 'e', 's', 'h' ]

   // 4. For Of loop

for(let e of no){
    console.log("for of loop",e);   //  for of loop 5 6 8 9 2 
    // console.log("for of loop",no[e]);
}

// 5. For In loop  

for(let i in no){
    console.log("for in loop",i);   // it return array index value for in loop 0 1 2 3 4 
    console.log("for in loop",no[i]);   // it return array elements for in loop 5 6 8 9 2
}