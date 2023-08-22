// Develop a program that calculates and prints the sum of the first n even numbers using a for loop.



var Natural_number:number=10;
var sum:number=0
for(var i=1;i<=Natural_number;i++){
    if(i%2==0){
        sum =sum+i;
             
    }
    
}
  
console.log("The sum of even natural numbers is: ",sum);


// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

var array: number[]=[1,2,3,4,5,6,7,8,9,10];

for(var i=0; i<=array.length;i++){
    if(i%2==0){
        console.log("The Even numbers in Array is:",i);
    }
}

// Implement a program that uses a loop to iterate through
// an array of numbers and remove all the even numbers
// from them and just leave the odd ones

var array1: number[]=[1,2,3,4,5,6,7,8,9,10];

for(var i=0; i<=array1.length;i++){
    if(array1[i]%2==0){
        array1.splice(i,1);
        
    }
    
    
}

console.log(array1);


// Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

function area(radius:number){

    var Area:number=Math.PI*(radius*radius)

    return Area;

}

var result:number= area(56);
console.log(result.toFixed(2));