////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////

const x = 6;

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

// two arguments
function add(num1, num2) {
  //returns sum of both nums and variable x
  return num1 + num2 + x;
}

console.log("QUESTION 1: ANSWER =>", add(2, 3));

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

//num
const addition = (num1, num2) => {
  return num1 + num2 + x;
};

console.log(`QUESTION 2: ANSWER =>`, addition(2, 3));

// 3. Write a function that returns another function. (use arrow functions please).

const funcOne = () => {
  const funcTwo = () => "Hello World!!!";
  return funcTwo;
};

console.log(`QUESTION: 3: ANSWER =>`, funcOne()());

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(
  `QUESTION 4: Because JavaScript has the concept of closure. The insideFunction is enclosed with references to its surrounding state which gives it access to the outer function's scope. ANSWER =>`,
  getFunction()(2)
);

// 5. write a function that takes "couldThrowError()" as a callback argument.  Within that function call "couldThrowError" and and log the result to the console.  Make sure to handle errors that could be thrown by "couldThrowError()".  If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("Error was thrown");
  }

  return "success";
};

const myFunc = (myCallback) => {
  try {
    return console.log("5: ", myCallback());
  } catch (error) {
    console.log(error.message);
    return console.log("5: Sorry, there was an error");
  }
};

myFunc(couldThrowError);
//////////////////////////////////////////////////////////////
////// Handling data:
//////////////////////////////////////////////////////////////

const userData = [
  {
    id: "111",
    name: "Peter",
    favorites: {
      food: ["burgers", "pizza"],
      activities: ["basketball", "baseball"]
    }
  },
  {
    id: "222",
    name: "John",
    favorites: {
      food: ["burgers", "tacos"],
      activities: ["football", "golf"]
    }
  },
  {
    id: "333",
    name: "Mary",
    favorites: {
      food: ["pizza", "tacos", "fried chicken"],
      activities: ["volleyball", "softball"]
    }
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

userData.map((item) => {
  console.log("QUESTION 6: ANSWER =>");
  const id = item.id;
  const favoriteFoods = item.favorites.food.length;
  return console.log({ id: id, favoriteFoods: favoriteFoods });
});

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']
const pizzaLovers = userData.reduce((pizzaArr, current) => {
  if (current.favorites.food.includes("pizza")) {
    pizzaArr.push(current.name);
  }
  return pizzaArr;
}, []);

console.log("QUESTION 7: Individuals that like pizza: ", pizzaLovers);

// 7. Show an an example of a switch statement being used

const students = [
  { firstName: "Anna", age: 16 },
  { firstName: "Giula", age: 42 },
  { firstName: "Stefano", age: 24 },
  { firstName: "Valentina", age: 17 },
  { firstName: "Roberto", age: 28 }
];

students.map((student) => {
  switch (true) {
    case student.age < 18: {
      console.log(
        "High school aged and in Advanced Placement Program.",
        student.firstName
      );
      break;
    }
    case student.age === 18:
      console.log(
        "Inquire, is student in high school and in Advanced Placement Program, or is student graduated and now enrolled in college.",
        student.firstName
      );
      break;
    case student.age > 18:
      console.log("College Student", student.firstName);
      break;
    default:
      console.log(
        "Error there is something wrong with student age",
        student.firstName
      );
  }
});

// ////////////////////////////////////////////////////////////
// //// OBJECT AND ARRAY DESTRUCTURING
// ////////////////////////////////////////////////////////////

const userPersonalData = {
  name: "peter",
  age: "56",
  birthday: "jan 1st"
};
const userGameData = {
  score: 4546,
  accomplishments: [
    "won award for being good gamer",
    "won 1st win",
    "got good score on the weekend"
  ]
};

// // 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:

const userCopy = { ...userPersonalData, ...userGameData };
console.log("QUESTION 9: => ", userCopy);

// // 9. Make a copy of your new user object but override the birthday to december 31st.

const copyUser = { ...userCopy, birthday: "december 31st" };
console.log("QUESTION 9: ANSWER =>", copyUser);

// // 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable.

const accomplishmentsArray = [...userGameData.accomplishments];
console.log("QUESTION 10: accomplishments ", accomplishmentsArray);

// //  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
// //  and store it in a variable name food

var user = {
  name: "pete",
  age: "32",
  favoriteThings: {
    food: ["pizza", "tacos", "burgers", "italian"],
    movies: []
  }
};

const {
  favoriteThings: { food }
} = user;

console.log("QUESTION 11: ANSWER => ", food);

// // 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values.

const [one, two] = food;

console.log("QUESTION 12: ANSWER =>", one, " and ", two);

// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food.
//    the food variable should have all the array items starting from the third one.
const data = ["peter", "34", "apple", "oranges", "pizza", "tacos"];

const [name] = data;
const [, age] = data;
const [, , ...foods] = data;
console.log("QUESTION 13: ANSWER =>", name, ", ", age, ", and ", foods);

// 14. use object destructuring to grab the following from the userInfo object:
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondFavoriteThing

const userInfo = {
  name: "Peter",
  favorites: {
    needs: {
      food: ["burger", "pizza", "tacos", "fried chicken", "sushi"]
    },
    wants: {
      things: ["cars", "jewelry"]
    }
  }
};

const { name: userName } = userInfo;
const {
  favorites: {
    needs: { food: favoriteFood }
  }
} = userInfo;
const {
  favorites: {
    wants: {
      things: [favoriteThing]
    }
  }
} = userInfo;
const {
  favorites: {
    wants: {
      things: [, secondfavoriteThing]
    }
  }
} = userInfo;

console.log(
  "QUESTION 15: ANSWER =>",
  userName,
  ", ",
  favoriteFood,
  ", ",
  favoriteThing,
  ", and ",
  secondfavoriteThing
);

var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

module.exports = fetchData;

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Promises:
// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
fetchData().then(
  (val) => {
    console.log("16: ", val);
  },
  (err) => {
    console.log("QUESTION 15: ANSWER =>", err.message);
  }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const asyncFetch = async () => {
  try {
    const newVar = await fetchData();
    console.log("17: ", newVar);
  } catch (error) {
    console.log("QUESTION 16: ANSWER =>", error.message);
  }
};

asyncFetch();