var person1 = { name: "Hans", birth: 1921, hobby: "Hoppe", mail: "hehlk@hehe.com" };

for (var key in person1) {
    console.log(key + ":" + person1[key]);
}
console.log(person1.hasOwnProperty("birth"));
delete person1.birth;

console.log(person1.hasOwnProperty("birth"));


///************ */

function Person(name, birth, hobby, mail) {
    var name = name;
    var birth = birth;
    var hobby = hobby;
    var mail = mail;

    return{
    getDetails: function () {
        return name + ", " + birth + ", " + hobby + "," + mail;
    },
    setAge: function (age) {
        birth = age;
                            },
    setName: function (navn) {
        name = navn;
    }
 }

}

var newPerson = new Person("Hans", 1991, "Svensk", "hans@gkhe.com");
console.log(newPerson.getDetails());

newPerson.setAge(195252);
newPerson.setName("Grete");
console.log(newPerson.getDetails());
