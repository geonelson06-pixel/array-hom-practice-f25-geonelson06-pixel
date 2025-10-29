// You’re given an array of students. Use .find() to get the student whose score is greater than 90.
const students = [
  { name: "Alice", score: 88 },
  { name: "Brian", score: 95 },
  { name: "Carla", score: 78 },
];

const greatest = (student) => student > 90

console.log(students.findIndex(greatest));


// Expected output: { name: "Brian", score: 95 }

// You’re given an array of fruit names. Use .findIndex() to find the index of "mango".

const fruits = ["apple", "banana", "mango", "orange"];

console.log(fruits.findIndex(fruits));


// Expected output: 2


// You’re given an array of objects representing books. Use .map() to create a new array that contains only the titles of the books.

const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
];

console.map(books.findIndex(title));
// Expected output: ["The Hobbit", "1984", "Pride and Prejudice"]
