let names = ["gegwe", "gkjwkegl ", "gklgelkæw"];

function filter(arr, callback) {
    let arrayToReturn = [];
    arr.forEach(function (value, index) {
        if (callback(value) === true) {
            arrayToReturn.push(value);
        }

    });
    return arrayToReturn;
}



3///////


Array.prototype.myFilter = function (func) {
    let arrayToReturn = [];
    let length = this.length;

    for (i = 0; i < length; i++) {
        let prob = this[i];
        if (func.call(1, prob) === true) {
            arrayToReturn.push(this[i]);
        }
    };

    return arrayToReturn;
};

Array.prototype.myMap = function (func) {
    let arrayToReturn = [];
    let length = this.length;

    for (i = 0; i < length; i++) {
        let prob = this[i];
        let newProp = func.call(1, prob);
        arrayToReturn.push(newProp);
    }
    return arrayToReturn;

};

let numbers = [4, 1, 34, 5, 6, 7, 8, 9, 2];

let newarray = numbers.myFilter(function (prob) {
    if (prob > 2) return true;
});

console.log(newarray);

let doubleArray = numbers.myMap(function(prob){
 return prob*2;
});

console.log(doubleArray);

4 ////// 

let persons = ["Gert", "Hans", "Kurt", "Svend"];

let liItems = persons.map(function(prob){
return "<li>" + prob + "</li>";
});

console.log(
"<ul>"+
liItems.join(

) +
"</ul>"
)

let bla = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone:
"675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

let ToStringArray = bla.map(function(obj){
return obj.name + ", " + obj.phone;
});

console.log(ToStringArray);

