// let details = {
//     person1: "sajid",
//     person2: "fazle",
//     person3: "Soptok",
//     person4: "nayemur"
// }



// let detailsArray = [
//     "sajid",
//      "fazle",
//      "Soptok",
//      "nayemur"
// ]


// for(let detail in details) {
//     console.log(detail + ": " + details[detail]);
// }
// for(let detail in detailsArray) {
//     console.log(detail + ": " + details[detail]);
// }
// let i = 4;
// do {
//     console.log(detailsArray[i]);
//     i++;
// }while(i < detailsArray.length);

// for(let i = 0; i < detailsArray.length; i++) {
//     console.log(detailsArray[i]) ;
// }



// console.log();
// console.log();

// let symbol1 = Symbol('description');
// let symbol2 = Symbol('description');

// console.log(symbol1 === symbol2); // false (Symbols are unique)
// console.log(typeof symbol1); // symbol
// console.log(symbol1);







// let greeting = "Hello, World!";
// let singleQuoteString = 'This is a single quote string.';
// let templateString = `This is a template literal with ${greeting}`;
//  console.log("Hey this is sajid" + ' This is sajid again' +  `again this is sajid with ${greeting}`);

// let z = 123n;
// console.log(typeof (z));


// console.log(details.person1);
// delete details.person1;


// const colors = {
//     primary: "red",
//     secondary: "blue",
//     accent: "green"
//   };




// //   console.log(Object.entries(colors));

//   let arr = Object.values(colors) 
//  let hasBlue = arr.includes("blue");
//  console.log(arr);
//  console.log(hasBlue);



// let detailsArray = [
//     "sajid",
//      "fazle",
//      "Soptok",
//      "nayemur"
// ]
// let aa = [1, 2,3];
// let nwAa = [1, 2,3];
// nwAa = aa.map(val => val * 2);
// nwAa = nwAa.filter(val => val > 4);
// console.log(aa);
// console.log(nwAa);
//  let sm =  aa.reduce((s , value) => s += value);
//  console.log(sm);

//  console.log(detailsArray.join("_"));

//  process.stdout.write("\n");
//  process.stdout.write("\n");
//  process.stdout.write("\n");

//  detailsArray.forEach(name => {
//     console.log( name  + " ");
//  });

//  console.log(0.1  + 0.10
//  );


// aa = [
//     [1,2],
//     [3, 4]
// ]
//  let z = aa.reduce((prv_sm , value) => {
//     return prv_sm.concat (value);
//  }, [] );

//  console.log(z);

// const numbers = [3, 5, 8, 12, 15, 1, 18];
// let newarray = numbers.filter(num => num >= 10).map(val => {
 
//         return val * val;
    
// });
// console.log(newarray);
// let vowelCollection = "aeiouAEIOU";
// const words = ["apple", "banana", "orange", "grape", "umbrella", "kiwi"];
// let filterWord = words.filter(word => (vowelCollection.indexOf(word[0]) != -1));
// console.log(filterWord);


// const transactions = [
//     { item: "Shoes", price: 50 },
//     { item: "Shirt", price: 20 },
//     { item: "Hat", price: 15 },
//     { item: "Socks", price: 5 }
//   ];

  

//   let sm = transactions.reduce((sm , product) => {
//     return sm + product.price;
//   }, 0);

//   console.log(sm);

// words: ["This", "is", "an", "example"]
// console.log (words.join("-"));


// const numbers = [2, 4, 6, 8];
// const nw = numbers.map((value, index) => {
//     return value * index;
// });
// console.log(nw);

// const strings = ["racecar", "hello", "madam", "world", "level"];
// const newArray = strings.filter((value ) => {
//     let nw = value.reverse();
//     console.log(nw);
// });

// const strings = ["racecar", "hello", "madam", "world", "level"];
// const newArray = strings.filter((value) => {
//     let nw = value.split('');
//     nw.reverse();
//     nw = nw.join('');
//     return nw === value; // Check if the word is the same after reversing
// });

// console.log(newArray); // Output the array of palindromes



// const products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 },
//     { name: "Tablet", price: 300 }
//   ];

  

//   let sm = products.reduce((totalAvg , product) => {
//     let discount = product.price - product.price * 0.10;
//     return totalAvg += discount;
//   }, 0);

//   console.log(sm);

// const words = ["apple", "banana", "cherry", "date"];

// console.log(words.join(","));