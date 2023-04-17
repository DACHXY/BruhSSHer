import { Client } from "ssh2";
const conn = new Client();
conn.on('ready', () => {
  console.log('Client :: ready');
  conn.forwardOut('192.168.100.102', 8000, '127.0.0.1', 80, (err, stream) => {
    if (err) throw err;
    stream.on('close', () => {
      console.log('TCP :: CLOSED');
      conn.end();
    }).on('data', (data) => {
      console.log('TCP :: DATA: ' + data);
    }).end([
      'HEAD / HTTP/1.1',
      'User-Agent: curl/7.27.0',
      'Host: 127.0.0.1',
      'Accept: */*',
      'Connection: close',
      '',
      ''
    ].join('\r\n'));
  });
}).connect({
  host: '192.168.100.100',
  port: 22,
  username: 'frylock',
  password: 'nodejsrules'
});