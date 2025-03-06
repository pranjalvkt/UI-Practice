let ob = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91999999999,
    Emp: ["Aman", "Archana"],
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: {
            jquery: "jquery"
        }
    }
};

function flattenObject (ob) {
    let result = {};
    for(let i in ob) {
        
        if((typeof ob[i] === 'object') && !Array.isArray(ob[i])) {
            let temp = flattenObject(ob[i])
            for(let j in temp) {
                result[j] = temp[j];
            }
        }
        else {
            result[i] = ob[i];
        }
    }
    return result;
}
let val = flattenObject(ob);
console.log(val);