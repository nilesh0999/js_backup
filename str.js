
//     //  1.  print words of a string in reverse order
let str="nilesh is tallented boy";
let newstr="nilesh"
let inf= newstr.split(" ");
console.log(inf);
// str.split(" ")

console.log("split method",inf);   // split method [ 'nilesh', 'is', 'tallented', 'boy' ]
inf.reverse()
console.log("reverse method",inf); //   reverse method [ 'boy', 'tallented', 'is', 'nilesh' ]
inf.join(" ")
console.log("join method",inf);

let string="level is up";

let words=string.split(" ")
words.reverse();    // reverse method [ 'boy', 'tallented', 'is', 'nilesh' ]
words.join( )   //  join method [ 'boy', 'tallented', 'is', 'nilesh' ]

console.log(words); // [ 'up', 'is', 'level' ]

{
    let string="yesterday is";
    console.log("string length",string.length); //  9
    let strmeth=string.substr(1,7)
    console.log("substr method",strmeth); 
    let strmethd=string.substring(1,7)
    console.log("substring method",strmethd); 

}
 