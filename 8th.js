// Q.8-Marks Calculator

// Shyam has got his marks in three subjects as 
// A
// A
// , 
// B
// B
//  and 
// C
// C
//  (out of 100).Write a program to calculate his total marks and his total percentage.
// Note: You have to complete Sum and Average function. No need to take any input.

const Sum = (A, B, C) => 
{
 return A+B+C;
};

const Average = (A, B, C) => 
{
 let total=Sum(A,B,C)
 return total/3;
};
console.log(Sum(50,20,100));
console.log(Average(50,20,100));