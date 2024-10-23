let counter = 0;
const getCount = () => {
    console.log("Counter " + counter++);
}
const throttle = (func, del) => {
    let flag = true;
    return function () {
        if(flag) {
            func();
            flag = false;
            setTimeout(() => {
                flag = true
            }, del)
        }
    }
}
const newFunc = throttle(getCount, 300)
window.addEventListener('resize', newFunc);