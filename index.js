const express = require('express');
const port = 8000;

const app = express();


app.listen(port, (err) => {
    if(err) { console.log(`Error in running the server: ${err}`); return; }
    console.log("server is running on port: ", port);
})