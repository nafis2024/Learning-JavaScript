
//{break}
let noteBlock = ""
for(let i = 0; i <= 4; i++){
    if(i == 3){break;}
    console.log(noteBlock + "This value is" , i)
}
console.log(noteBlock)
//{continue}
let jukeBox = ""
for(let i = 0; i <= 4; i++){
    if(i == 3){ continue}
    console.log(jukeBox + "Not skipping", i)
    console.log("It skips 3") //this extra line represents how this loop actually works
}
console.log(jukeBox)


//break is just a normal thing
//continue command tells it to move on and leave the highlighted thing behind