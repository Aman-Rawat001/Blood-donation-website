// USING HTML FILE SERVING.

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 80;

//EXPRESS SPECIFIC STFF.
app.use('/static',express.static('static')) // for serving static files.
app.use(express.urlencoded()) 

// ENDPOINTS (METHORD FOR SERVING HTML FILES)
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
})
let temp = 0;
app.post('/', function(req, res) {
    name = req.body.name; 
    email = req.body.email; 
    phone = req.body.phone; 
    desc = req.body.desc; 
    let detailOfClint = `${++temp}: Name=${name} Email=${email} Phone=${phone} Address=${desc}\n` // (\n) for add newline in output file.
    
    fs.appendFileSync('Output.txt', detailOfClint)  // save submitted data in file('output.txt).

    res.sendFile(path.join(__dirname + '/views/index.html'));
   
})

// START THE SERVER.
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});