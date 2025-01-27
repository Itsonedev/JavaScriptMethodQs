const homeWork = "JavaScript 10 questions";
console.log(homeWork);


//Question #1
function getLastIndex(things){
    return things.length - 1;
}

//Question #2
function getSecondToLastIndex(things){
    return things.length -2;
}

//Question #3
function getFirstElement(things){
    return things[0];
}

//Question #4
function getLastElement(things){
    return things[things.length - 1];
}
 
//Question #5
function getSecondToLastElement(things){
    return things[things.length - 2];
}

//Question #6
function getSum(nums){
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum;
}

//Question #7
function getAverage(nums){
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum / nums.length;
}

//Question #8
function extractAllOddNumbers(nums){
   let result = [];

   for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 !== 0){
        result.push(nums[i]);
    }
   }
   return result;
}

//Question #9
function extractAllEvenNumbers(nums){
    let result = [];
 
    for(let i = 0; i < nums.length; i++){
     if(nums[i] % 2 == 0){
         result.push(nums[i]);
     }
    }
    return result;
 }

 //Question #10
 function contains(nums, num){
    for(let i = 0; i < nums.length; i++){
        if( nums.includes(num)){
            return true;
        }
    }

    return false;
}

const people = ['Devon', 'James', 'George', 'Mike', 'Odell']
const numbers = [1, 2, 3, 4, 5];


console.log("Question #1: " + getLastIndex(people));
console.log("Question #2: " + getSecondToLastIndex(people));
console.log("Question #3: " + getFirstElement(people));
console.log("Question #4: " + getLastElement(people));
console.log("Question #5: " + getSecondToLastElement(people));
console.log("Question #6: " + getSum(numbers));
console.log("Question #7: " + getAverage(numbers));
console.log("Question #8: " + extractAllOddNumbers(numbers));
console.log("Question #9: " + extractAllEvenNumbers(numbers));
console.log("Question #10: " + contains(numbers,5));

console.log("I am not crazy and I really do this shit");


