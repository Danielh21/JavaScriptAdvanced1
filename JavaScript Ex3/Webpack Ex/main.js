/**
 * Created by daniel on 13-02-2017.
 */
require('./main.css');
import 'bootstrap/dist/css/bootstrap.css';
var _ = require('lodash');

const name = 'Scotch.io';

// setTimeout(() => alert(`Hello there from ${name}`), 300);


function Person(fn,ln,s){
    this.firstName = fn;
    this.lastName = ln;
    this.favoriteSport = s;
}

const persons = [
    new Person( "Kurt" , "Wonnegut" , "Socker" ),
    new Person( "Jan" , "Peterson" , "Hockey" ),
    new Person( "Jane" , "Peterson" , "Skating" ),
    new Person( "John" , "Hansen" , "Socker" ),
]





function makeTable(persons){

   var g =  _.keysIn(new Person);

    g = g.map((item) =>{
      return _.startCase(item);
   });

    var table= `
    <table class=table>
    <thead> `;

    g.forEach((value)=>{
       table +="<td>" + value + "</td>"
    });

    table += "</thead><tbody>";

    persons.forEach((person)=>{
            table += "<tr>";

                    _.mapKeys(person, (value, key) =>{
                        table += "<td>" + value + "</td>"
                                                    });
            table += "</tr>";

    });
    table += "</tbody></table>"

    return table;

}


const table = makeTable( persons );

var g = document;

document.getElementById("my-table").innerHTML = table;

