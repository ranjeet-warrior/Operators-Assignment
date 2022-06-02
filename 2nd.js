//Q2.Find if the conditions are obeyed or not
//You are given two number first as 
// A
// A
//  and second as 
// B
// B
//  and check if both conditions (
// A
// <
// 10
// A
// <
// 10
//  and 
// A
// >
// B
// A
// >
// B
// ) are satisfied or not with the help of operators.
// Note: You have to complete Is_Valid function. No need to take any input.

const Is_Valid = (A,B) => {
    return(A<10 && A>B)?"true":"false";  
    };
    console.log(Is_Valid(5,3));
