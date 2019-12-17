const ObjToCsv = require('objects-to-csv');
const neatCsv = require('neat-csv');

const fs = require('fs');

// const myObj =  [
//     { name: 'Myname', occupation: 'Dev', hobby: 'drums' }, 
//     { name: 'Myname2', occupation: 'Tech', hobby: 'singing' }, 
//     { name: 'Myname3', occupation: 'marketing', hobby: 'reading' }, 
//     { name: 'Myname4', occupation: 'Tech', hobby: 'bball' }, 
//     { name: 'Myname5', occupation: 'CEO', hobby: 'food' }, 

// ];

// const csv = new ObjToCsv(myObj);
// csv.toDisk('./list.csv');

fs.readFile('./list.csv', async(err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(await neatCsv(data));
}
)

