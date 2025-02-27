for (let i = 1; i <10; i++){
   if (i % 2 == 1) 
   if (i % 3 == 2) console.log(i); 
}
const prompt = require("prompt-sync")();
var qc = prompt("The ans?");
var cities = ["Dhaka", "Chattogram", "Thakurgaon", "Rangpur"]
for (var i = 0; i <= 1; i++) {
   if (qc == cities[i]) {
      console.log("the worst city");
      }
      else if(qc != cities[i]) {
      console.log("not in the list")
      break;
      //idk why it prints it 2 times
      //just use break
    }
   }
