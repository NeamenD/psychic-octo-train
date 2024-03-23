// a string var (datacsv) with a multi-line string containing comma-separated values
const datacsv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// this line splits the csv string into an array called "row" using the newline character(`"\n"`)
let row = datacsv.split('\n');

// initializes an empty array called `table` this array will hold the csv data in a two dimensional format 
// each element represents a row and each row is itself an array of values
const table = [];


// this loop iterates over each element of the `row` array.
// for each row(`r`), it splits the row into an array of values using the comma(`,`) as the delimiter
// and pushes this array into thw `table` array.
// after this loop, `table` will contain the csv data in atwo-dimensional array format`
row.forEach((r) =>{
    let rowData = r.split(',');
    table.push(rowData);
});

// to see how the CSV data has been parsed into a 2 dimensional array
console.log(table);

// this line remoces the first row (element) from the `table` array and assigns it to a new array called `titles`
// this first row contains the column headers or titles.
// `shift()` method is used to remove the first element from an array and returns that removed element.
const titles = table.shift();

// These lines initialize two empty arrays: people will hold
//  objects representing individuals from the CSV data,
//  and keys will hold lowercase versions of the column headers, 
// which will be used as keys when constructing the objects.
const people = [];
const keys = [];



titles.forEach((title) =>{
    const key = title.toLowerCase();
    keys.push(key);
});

table.forEach(row => {
    const person = {};
    for (let i = 0; i < row.length; i++){
        person[keys[i]] = row[i];
    }
    people.push(person);
});

people.pop();

const p = { id: "48", name: "Barry", occupation: "Runner", age: "25" };

people.splice(1, 0, p);

const lastPerson = { id: "7", name: "Bilbo", occupation: "None", age: "111" };

people.push(lastPerson);
console.log(people);

let sum = 0;

people.forEach(person =>{
    sum += parseInt(person.age);
});

const averageAge = sum/people.length;
console.log(sum);
console.log(averageAge);

const ages = people.reduce((acc, person) =>{
    return acc += parseInt(person.age);
},0);

const row1 = Object.keys(people[0]);
console.log(row1);

let convertToCSV = row1.join(',').concat(`\\n`);

people.forEach((person) =>{
    let row = '';
    for (let i = 0; i < row1.length; i++){
        if (i === row1.length - 1){
            row += `${person[row1[i]]}\\n`;
        } else {
            row += `${person[row1[i]]},`;
        }
    }
    convertToCSV += row;
});

console.log(convertToCSV);
