


let names = ["GEkekgl", "klgekgweklgwlk", "gklwgkweklegw"];

let rows= names.map(function(name,index){
  return "<td>" + name + "</td>"
});

console.log(rows);

let rowsStr = rows.join(" ");

let table =`<table>
 <tbody> 
$(rows) 
 
 </tbody> 
 
 </table>
`