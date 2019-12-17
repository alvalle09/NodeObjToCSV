const ObjToCsv = require('objects-to-csv');

const myObj =  [
    { name: 'Myname', occupation: 'Dev', hobby: 'drums' }, 
    { name: 'Myname2', occupation: 'Tech', hobby: 'singing' }, 
    { name: 'Myname3', occupation: 'marketing', hobby: 'reading' }, 
    { name: 'Myname4', occupation: 'Tech', hobby: 'bball' }, 
    { name: 'Myname5', occupation: 'CEO', hobby: 'food' }, 

];

const csv = new ObjToCsv(myObj);

csv.toDisk('./list.csv');

