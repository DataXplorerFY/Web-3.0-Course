// Develop a program that calculates and prints the sum of the first n even numbers using a for loop.



var Natural_number: number = 10;
var sum: number = 0
for (var i = 1; i <= Natural_number; i++) {
    if (i % 2 == 0) {
        sum = sum + i;

    }

}

console.log("The sum of even natural numbers is: ", sum);


// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

var array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i <= array.length; i++) {
    if (i % 2 == 0) {
        console.log("The Even numbers in Array is:", i);
    }
}

// Implement a program that uses a loop to iterate through
// an array of numbers and remove all the even numbers
// from them and just leave the odd ones

var array1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i <= array1.length; i++) {
    if (array1[i] % 2 == 0) {
        array1.splice(i, 1);

    }


}

console.log(array1);


// Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

function area(radius: number) {

    var Area: number = Math.PI * (radius * radius)

    return Area;

}

area(50)

// Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.

var grades: number[] = [100, 50, 70, 90, 60, 55, 57, 87, 30, 40];

for (var i = 0; i < grades.length; i++) {
    if (grades[i] < 50) {
        grades.splice(i, 1);
    }
}

console.log(grades);



// Write a program that uses a function to find the largest element in an array of numbers



function findMaximum(arr: number[]) {
    let max_value: number = arr[0];

    for (let num of arr) {
        if (num > max_value) {
            max_value = num;
        }
    }

    console.log( max_value);
}


 findMaximum([10,20,30,40]);


// Find Minimum Value in Array

 function minvalue(arr1:number[]){
    var min:number=arr1[0]
    for(let num of arr1){
        if(num<min){
            min=num;
        }
    }
    console.log(min);

 }

 minvalue([10,20,30,40])