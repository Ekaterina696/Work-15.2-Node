const axios = require('axios');
const fs = require('fs');
const path = require('path');
const http = require('http');


;(async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    
    fs.writeFile(path.resolve(__dirname, '1.json'), JSON.stringify(data), 'utf-8', (err) => {
        if (err) {
            throw err;
        }

        console.log(`Done`);
    })
}) ();

http
    .createServer((request, response) => {
        response.write('Hello');
        response.end();
    })
    .listen(3000);