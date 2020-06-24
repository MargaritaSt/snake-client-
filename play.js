const  connect  = require('./client');
const  setupInput  = require('./input');
console.log('Connecting ...');
//connect();
let conn = connect();
setupInput(conn);
