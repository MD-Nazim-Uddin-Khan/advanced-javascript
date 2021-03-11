const students = [
    {id: 21, name: "karim"},
    {id: 31, name: "rahim"},
    {id: 41, name: "sunny"},
    {id: 71, name: "eti"}
]

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter( s => s.id>40);
const biggerOne = students.find( s => s.id>40);
console.log(ids);
console.log(names);
console.log(bigger);
console.log(biggerOne);