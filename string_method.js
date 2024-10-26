let a = "javascript";
console.log("length of string =", a.length); // 10

let b = "javascript";
console.log("char at 2 =", b.charAt(2)); // v

let c = "javascript";
console.log("char code at 2 =", c.charCodeAt(2)); // 118

let d = "javascript";
console.log(d.match(/v/gi)); //[v]
console.log(d.match(/[tcv]/gi)); //[v,c,t]

let e = "javascript";
console.log(e.slice(0, 4)); // java

let f = "javascript";
console.log(f.indexOf("v")); // 2

let g = "2452";
console.log(g.padStart(12, "X")); // XXXXXXXX2452
console.log(g.padEnd(4, "X")); //  2452XXXXXXXX

let h = "JAVASCRIPT";
console.log(h.toLocaleUpperCase()); // JAVASCRIPT
console.log(h.toLocaleLowerCase()); // javascript

let i = "javaRsCript";
console.log(i.search(/C/g)); // 6

let j = "javascript";
console.log(j.split([])); // ['j','a','v','a','s','c','r','i','p','t']

let k = "javascript";
console.log(k.replace("java", "JAVA")); // JAVAscript

let l = "javascript";
console.log(l.startsWith("java")); // true
console.log(l.endsWith("script")); // true

i = "koustubh gatala";
//  substr(start,length )
let m = i.substr(5, 10);
console.log("substr", m);

//  substring(start,end)
let n = i.substring(5, 10);
console.log("substring", n);
