const express = require('express');
const http = require('http');

const app = express();

app.use(express.json());

const PORT = 3303;
const server = http.createServer(app).listen(PORT, (err)=>{
    if(err){
        console.log(`Server failed to start, exiting: ${err}`);
        process.exit(1);
    } else {
        console.log(`Server is running on: http://localhost:${PORT}`);
    }
});

module.exports = {app, server};
require('./index'); 

