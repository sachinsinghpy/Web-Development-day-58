function nice(name){
    console.log("Hey " + name + " you are nice")
}
// console.log("Hey Sachin you are good!")
nice("Sachin")
nice("Shivam")

function sum(a,b,c=3){
    // console.log(a+b)
    return a+b+c
}

result = sum(3,5)
result2 = sum(4,5,7)

console.log("The sum of these numbers is: ",result)
console.log("The sum of these numbers is: ",result2)


const func1 = (x)=>{
    console.log("I am an arrow fuction",x)
}
func1(34);