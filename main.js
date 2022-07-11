const data = require('./data.json');

//Ex1
console.log(data);

// Ex2
const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
   if (req.url === '/') {
      res.end(`<h1>This is Homepage</h1>`);
   } else if (req.url === '/about') {
      const render = Object.keys(data).map((key) => {
         return `<div>
                <ul>
                    <li>${key}: ${data[key]}</li>
                </ul>
            </div>`;
      });
      res.end(render.join(''));
   } else {
      res.end(`<h1>404 Not Found</h1>`);
   }
});

server.listen(port, () => console.log('Server running...'));
