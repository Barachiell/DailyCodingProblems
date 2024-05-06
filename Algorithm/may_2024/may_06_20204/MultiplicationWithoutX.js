/* 
Write a function that takes two numbers as input and returns their product without using the multiplication operator (*) 

*/

//Not Considering negative numbers:

function multiplyBySum(num, num2){
    if(num === 0 || num2 === 0){
        return 0;
    }
    return num + multiplyBySum(num, num2-1);
}

//Considering Negative Numbers

function multiplyBySum(num, num2){
    if(num === 0 || num2 === 0){
        return 0;
    }
    const isNumNegative = num < 0;
    const isNum2Negative = num2 < 0;
    
    if(isNum2Negative){
     num2 = Math.abs(num2);
    }
    
    if(isNumNegative){
     num = Math.abs(num);
    }
    let multiplication = num + multiplyBySum(num, num2-1);
    
    return isNumNegative !== isNum2Negative ? -multiplication : multiplication;
}