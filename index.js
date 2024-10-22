// var a = 100;
// {
//     let a = 20;
// }
// console.log(a);

// async function getData () {
//     var str = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("Actual data")
//         }, 3000);
//     })
    
//     return str
// }
// async function getDataByHelper () {
//     var str = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("meta data by helper")
//         }, 3000);
//     })
    
//     return str
// }

// var nameArray = [];
// fetch('https://api.github.com/users/pranjalvkt/repos')
// .then((data)=> {
//     return data.json();
// })
// .then((data)=>{
//     data.forEach(element => {
//         nameArray.push(element.name);
//         console.log(element);
//     });
// }).then(()=>{
//     console.log(nameArray);
// })

// getDataByHelper()
// .then((data)=> {
    // console.log(data);
    // return getData();
    // return data;
// })
// .then((data)=> console.log(data))



/*
// Polyfill for Bind
let name = {
    firstName: "Pranjal",
    lastName: "Tripathi"
}

let printFullName = function(hometown, state, country) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state + ", " + country);
}

let printMyName = printFullName.bind(name, "Prayagraj");
printMyName("UP", "India");

Function.prototype.myBind = function(...args) {
    // this -> function on which myBind is call
    let obj = this,
    params = args.slice(1);
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2]);
    };
}

let printMyName2 = printFullName.myBind(name, "Prayagraj");
printMyName2("UP", "India");
*/


/*
// Using Closure
let multiply = function(x) {
    return function (y) {
        console.log(x * y);
    }
}
let multiplyByTwo = multiply(2);
multiplyByTwo(5);
let multiplyByThree = multiply(3);
multiplyByThree(5);


// Using Bind methid
let multiply = function (x, y) {
    console.log(x * y);
}
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);
let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);
*/

// let total_money = 100;
// let threshold = 10;
// let phone = 8;
// let accessory = 1;
// let total_spend = 0;
// const tax = 0.09;
// while(total_money > total_spend) {
//     total_spend += phone;

//     if(total_spend < threshold) {
//         total_spend += accessory;
//     }
// }

// const calculateTax = (amount) => {
//     return amount * tax;
// }

// const matting = (amount) => {
//     amount = amount.toFixed(2);
//     return '$' + amount;
// }

// total_spend = calculateTax(total_spend) + total_spend;
// total_spend = matting(total_spend);

// console.log(total_spend);

// 'use strict'
// a = 2


// async function getData() {
//     let follower = await fetch('./followers_1.json').then((res)=> res.json())
//     let following = await fetch('./following.json').then((res)=> res.json())
//     return {'followings': following, 'followers': follower};
// }

// let arr = []
// getData().then((data)=>{
//     data.followings.relationships_following.forEach(following => {
//         doesExist(data.followers, following.string_list_data[0].value)
//     });
//     let res = data.followings.relationships_following.filter(n => !arr.includes(n.string_list_data[0].value));
//     res.forEach(element => {
//         console.log(element.string_list_data[0].value)
//     });
// })
// function doesExist(followers, following) {
//     followers.forEach(follower => {
//         if(follower.string_list_data[0].value == following) {
//             arr.push(following)
//         }
//     });
// }

let count = 0
const getData = () => {
    console.log("hello", count++);
}

const debounce = (func, del) => {
    let timer;
    return function () {
        let context = this;
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func()
        }, del);
    }
}
const newFunc = debounce(getData, 300);

