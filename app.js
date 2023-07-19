//refactor (ES2015) it to use the rest operator
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

 const filterOutOdds = (...arguments) => arguments.filter (value => value % 2 === 0);



//write a function called findMin that accepts a variable of arguments and returns the smallest argument
//make sure to use the rest and spread operator.

//findMin (1,4,12,-3) //-3
//findMin (1,-1) //-1
//findMin (3,1) //1

const findMin = (...arguments) => Math.min(...arguments);


//write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object

//mergeObjects ({a:1,b:2}, {c:3, d:4}) //{a:, b:2, c:3, d:4}


const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});



//write a function called doubleAndReturnArgs which accepts an arr and a var num of args.  The function should return a new arr with original array values and all of the additional arguments doubled.

//doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
//doubleAndReturnArgs([2],10,4) // [2, 20, 8]


const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(value => value * 2)];

//For this section, write the following functions using rest, spread, and refactor these functions to be arrow functions
//make sure to always return a new array or object and not modify existing inputs

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    let i =Math.floor (Math.random()* items.length);
    return [...items.slice(0,i), ...items.slice (i+1)];
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1, ...array2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
};


/** Return a new object with a key removed. */

const removeKey= (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
};


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
};


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = value;
    return newObj;
}