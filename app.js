//jshint esversion:6
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });


// *******************FRUIT*****************************************************
const fruitSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Input the name!!!"]
  },
  rating: {
type:Number,
min:1,
max:10
  },
  review: String
})
const Fruit = mongoose.model("Fruit",fruitSchema);
const fruit = new Fruit({
  rating: 10,
  review:"Hmmmm !!!"
})
// fruit.save()


// **********************PERSON*************************************************
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
})
const Person = mongoose.model("Person",personSchema);

const pineapple = new Fruit({
  name:"pineapple",
  reting: 9,
  review:"Great food"
})
// pineapple.save();

const watermelon = new Fruit({
  name:"Watermelon",
  reting: 10,
  review:"Great food"
})
// watermelon.save();

const person = new Person({
  name:"Amy",
  age:22,
  favouriteFruit: pineapple
})

// person.save()

// ************************MORE FRUITS******************************************
// *********************THIS CODE IS FOR REFRENCES******************************
// const kiwi = new Fruit({
//   name:"Kiwi",
//   rating:9,
//   review:"Good Test!!!"
// })
// const graphs= new Fruit({
//   name:"Graphs",
//   rating:9,
//   review:"Nice Test!!!"
// })
// const banana = new Fruit({
//   name:"Banana",
//   rating:10,
//   review:"Best Test!!!"
// })
// Fruit.insertMany([kiwi,graphs,banana],function (err){
//   if(err){
//     console.log("Error found")
//
//   }else{
//     console.log("Succesfully inserted!!!")
//   }
// })

// ********************************READ THE DATABASE*******************************
Fruit.find(function(err, fruits){
  if(err){
    console.log(Error);
  }else{
mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });

  }
})
// **************************PERSON FIND METHOD FOR REFRENCES*******************
// Person.find(function(err, persons){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(persons);
//   }
// })
// *******************************UPDATE ANY DATA**********************************
// Person.updateOne({_id:"6030bda1aee25c1070c19b07"}, {favouriteFruit: watermelon}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("succesfully Updated!!!");
//   }
// })
// **************************DELET ONE DATA****************************************
// fruit.deleteOne({_id:"6030f3b83f7e500f68fc6040"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully Deleted!!!");
//   }
// })


//**************************DELET MANY******************************************
// Person.deleteMany({age: { $gte: 37 } }, function(err){
//   if (err) {
//         console.log(err);
//   } else {
//       console.log("Succesfully Deleted!!!");
//   }
// });
