// import _ from "underscore";

// let names = ["Shea", "Jonathan", "Steven"];
// let person = {
//   name: "Shea",
//   age: 35,
//   location: "dallas",
//   hobbies: ["Brewing beer", "Acting like a rockstar", "making stuff"],
//   favoriteMovie: "Shawshank Redemption"
// };

// // let sNames = names.filter(c=>c[0] === "S")

// // console.log(sNames);

// // let arrMap = _.map(names, (name, i, a)=>{
// //   return name + ' Rocks!'
// // });
// // console.log('arrMap: ', arrMap);

// // let objMap = _.map(person, (letter, index, obj)=>{
// //   console.log(letter)
// // })
// // let strRed = _.reduce('This is a string', (acc, elem, i, iter)=>{
// //   console.log('elem: ', elem.charCodeAt(0));
// //   return acc + elem.charCodeAt(0)
// // }, 0)
// // console.log('strRed: ', strRed);

// // let union = _.union([3, 1],[2],[3, 1, 2])
// // console.log('union: ', union);

// // let intersection = _.intersection([1,2,3,4,5], [5,6,7,8], [5, 8,9,10])
// // console.log('intersection: ', intersection);

// let people = [
//   { name: "Shea", age: 35 },
//   { name: "Dylan", age: 35 },
//   { name: "Shea", age: 12 }
// ];

// // let grouped= _.groupBy(people, (elem)=>{
// //   console.log('elem: ', elem);
// //   return elem.name[0]

// // })
// // console.log('grouped: ', grouped);

// // let pluck = _.pluck(people, 'age')
// // console.log('pluck: ', pluck);

// // let where = _.where(people, {name:'Shea', age:35})
// // console.log('where: ', where);

// function times10(x) {
//   let total = 1;
//   for (let i = 0; i < x; i++) {
//     total *= 1.1;
//   }
//   return total;
// }

// let memoizedTimes10 = _.memoize(times10);

// memoizedTimes10(3);
// console.log("memoizedTimes10(3): ", memoizedTimes10(3));
// console.log("memoizedTimes10(3): ", memoizedTimes10(3));
// console.log("memoizedTimes10(3): ", memoizedTimes10(3));
const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  port = 3001,
  app = express();
debugger;
//, massive = require('massive')
//require('dotenv').config()
app.get("/api", (req, res) => {
  debugger;
});
// massive(process.env.CONNECTION_STRING).then(dbInstance=>app.set('db', dbInstance)).catch(console.log)

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("Server listening on port", port);
});

// yarn add express cors body-parser massive dotenv
