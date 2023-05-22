const sum = (arr) => {
    let sumOfElements = 0;
    for(i in arr){
        sumOfElements += arr[i];
    }
    /* or
    for(let i=0; i<arr.length; i++){
        sumOfElements += arr[i];
    }*/
    return sumOfElements;
};

const arr = [50, 50, 100, 90];
const res = sum(arr);
console.log("The result= "+res);