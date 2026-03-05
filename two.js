function greetUser(name, greeting = "Hello") {
  return greeting + " " + name;
}

console.log(greetUser("Rahul")); 
console.log(greetUser("Rahul", "Good Morning"));
// Hello Rahul
// Good Morning Rahul