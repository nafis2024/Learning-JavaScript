const cars = ["Volvo", "BMW"];   // Allowed
{
  const cars = ["Volvo", "BMW"]; // Allowed
}
{
  const cars = ["Volvo", "BMW"]; // Allowed
}
cars.push = "Toyota" // Allowed but it notifies that it is pushed
console.log(cars)