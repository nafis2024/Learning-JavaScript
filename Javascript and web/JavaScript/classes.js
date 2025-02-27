class product{
    constructor(name,price,quantity){
        this.name = name
        this.price = price
        this.quantity = quantity
    }
    displayProduct(){ //It's straight up a function
        console.log(`Price of ${this.name}s are $${this.price.toFixed(2)}`)    
    }
}



let apples = new product("Apple", 3, 8) 
apples.displayProduct() //this is standalone printing itself

let banana = new product("Banana", 2, 4)
var anotherWay = banana.displayProduct()


//The Class and their property features
class doctor {
    constructor(name, degree){
        this._name = name
        this._degree = degree
        this._experience = 0
    }
    get name(){
        return this._name
    }
    get degree(){
        return this._degree
    }
    addExp(newYear){
        
        this._experience += newYear

        if(newYear = NaN){ //I don't know why it doesn't works
            return this._experience //I thought about this myself tho //I maybe cannot implement if functions inside constructors
        }
        
    }
}

const doc1 = new doctor("Roman", "MBBS", 0)
doc1.addExp(3)
console.log(doc1)
console.log(doc1.degree) // _degree and degree prints the same thing



//a wide class with inheritence explained

class member{
    constructor(name, memberType, membershipStartingYear, contributions) {
        this._memberType = memberType
        this._name = name
        this._membershipStartingYear = membershipStartingYear
        this._contributions = 0

    }
    get name(){
        return this._name
    }
    get memberType(){
        return this._memberType
    }
    get membershipStartingYear(){
        return this._membershipStartingYear
    }
    newContributions(numOfCon){
        this._contributions += numOfCon
    }
}

class student extends member {
    constructor(name, grade, memberType){
        super(name, memberType)
        this._grade = grade
    }
    
}
let student1 = new student("Rose", 6, "Student")
console.log(student1)
console.log(student1.name)

//the super constructor can only be called once
//the parenting allows repeative codes to be not written






