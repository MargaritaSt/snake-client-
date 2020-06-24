const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });


  // interpret incoming data as text
  conn.setEncoding('utf8');


  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });
  conn.on('connect', () => {
    conn.write("Name: MRG");
  });

  /*conn.on('connect', () => {
    conn.write("Move: up");
    setTimeout(() => {
      conn.write("Move: left");
    }, 50);
    setTimeout(() => {
      conn.write("Move: left");
    }, 100);
    setTimeout(() => {
      conn.write("Move: down");
    }, 150);
    setTimeout(() => {
      conn.write("Move: right");
    }, 200);
  });*/
  return conn;
};


module.exports = connect;