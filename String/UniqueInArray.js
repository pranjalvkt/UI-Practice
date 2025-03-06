const array = [3, 1, 2, 2,2, 3, 4, 4, 5];
let uniqueArr = [];
array.forEach((item)=>{
    if(!uniqueArr.includes(item)) {
        uniqueArr.push(item)
    }
})
console.log(uniqueArr)