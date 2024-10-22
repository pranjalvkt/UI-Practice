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

