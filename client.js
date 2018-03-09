const WebSocket = require('ws');

if (process.argv.length != 3) {
  console.log('usage: client.js <ws(s)://web-socket-server:port>');
  process.exit(1);
}

const ws = new WebSocket(process.argv[2]);

ws.on('open', () => {
  console.log('Connection established.');
});

ws.on('message', (data) => {
  console.log('Message received: ' + data);
});

setInterval(() => { ws.send('Your code is ' + Math.random() + '.'); }, 1000);
