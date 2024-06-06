const axios = require('axios');
const fs = require('fs');
const path = require('path');


;(async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    
    fs.writeFile(path.resolve(__dirname, '1.json'), JSON.stringify(data), 'utf-8', (err) => {
        if (err) {
            throw err;
        }

        console.log(`Done`);
    })
}) ();