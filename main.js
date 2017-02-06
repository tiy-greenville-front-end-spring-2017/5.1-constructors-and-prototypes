/**
 * Strings are not mutable (immutable)
 * Strings are passed "by value"
 */
var kepler = 'He loves ';
var item = 'treats';
var keplerSays = kepler + item;

console.log(keplerSays);
console.log(item);

function keplerSpeaks(prefix, suffix){
  // var suffix = 'treats' // item
  suffix = 'bones';
  var thingToSay = prefix + suffix;
  console.log(thingToSay);
}

keplerSpeaks(kepler, item);
console.log(item);

/**
 * Numbers are immutable
 * Numbers are passed "by value"
 */
var number1 = 10;
var number2 = 20;

function add(num1, num2){
  num1 += num2;
  console.log(num1);
}

add(number1, number2);
console.log(number1);


/**
 * Objects are mutable
 * Passed by sharing (reference)
 */
 var kepler = {
   likes: 'treats'
 };

 function likeSomethingNew(dog){
   dog.likes = 'bones';
   dog.isHungry = true;
   console.log(dog);

   console.assert(kepler == dog);
 }

 likeSomethingNew(kepler);
 console.log(kepler);

 console.assert({title: 'apple'} === {title: 'apple'});

 /**
 * Arrays are mutable
 * Passed by sharing
 */

function sum(numbers){
  numbers.push(numbers.reduce(function(prev, num){
    return prev + num;
  }, 0));
}

var numbersToAdd = [1, 2, 3];
sum(numbersToAdd);
console.log(numbersToAdd);

console.assert([1, 2, 3] === [1, 2, 3]);



/**
 * Methods and the Bonus Nachos this
 */
function sayHello(){
  "use strict";

  console.log("Regluar ol' function call", this);
}

sayHello();


var watson = {
  type: 'German Shepherd',
  sayHello: function(){  // method
    console.log('method function call.', this);
  }
};

watson.sayHello();


/**
 * Constructor
 */

// var dog = {height: 'short'};
//
// var kepler = dog;
// var watson = dog;
// watson.height = 'tall';
// console.log('kepler.height', kepler.height);

function Dog(height, name){
  "use strict";
  this.height = height;
  this.name = name;
  this.wag = function(thing){
    console.log(this.name + ' is wagging ' + thing);
  }
}

var kepler = new Dog('short', 'Kepler');
var watson = new Dog('tall', 'Watson');

console.log('kepler', kepler);
console.log('watson', watson);

watson.wag('tail');
kepler.wag('body');

/**
 * Inheritance
 */

function Fruit(){
  this.sweet = true;
}

function Apple(){
  this.texture = 'crunchy';
}
Apple.prototype = new Fruit();
console.log(Apple.prototype);

var apple = new Apple();

console.log(apple.texture);
console.log(apple.sweet);
//

