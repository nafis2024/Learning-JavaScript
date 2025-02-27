var complexArray = [
    {
        "Card number": 791847276467,
        "Billing adress": [
            "House 32",
            "Road 3",
            "Sector 2"    ]
    },
    
    {
        "butter cup": 2,
        "flower cup": 2,
        "suger kg": 0.18,
        "more items" : ["Water", "Baking soda", "spoon"]
    }, 
    
    {
        "javascript": true
    }
]
console.log(complexArray[1]["more items"][2])



//record collection challenge
var recordCollection = {
    2548: {
      albumTitle: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
      albumTitle: "1999",
      artist: "Prince",
      tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [],
    },
    5439: {
      albumTitle: "ABBA Gold",
    },
  };

  function changeRecs(id, prop, name){
    if (name === ""){
        delete recordCollection[id][prop]
    } else if (prop === name){
        return recordCollection[id][prop][name]
    }
  }
  console.log(changeRecs([1245], [0]))

//record collection incomplete






//profile lookup chanllenge
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
if (contacts[firstName] = "") {
    return "there's no contact with this name"
} else if (contacts[firstName[prop] = ""]){
    return "no property with this contact"
} else return contacts[firstName][prop]
// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Akira", "likes"));


//attempt 2
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
for( var i = 0; i < contacts.length; i++){
    if (contacts[i][name] === name) {
    return contacts[i[prop]] || "not found";
        
    } 
    } 
}
// Only change code above this line


// Change these values to test your function
lookUpProfile("Akira", "likes");