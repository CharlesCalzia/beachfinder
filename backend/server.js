const express = require('express');
const request = require('request'); //include libraries

require('dotenv').config(); //import environment variables

const app = express(); //create express app

app.get('/', (req, res)=>{ //route to homepage
    res.send('this is the homepage');
})


var allData = new Array;
app.get('/api/v1/beaches', (req, res) => { //route to api
    
    const input = req.query;
    const radius = input.radius;
    const lat = input.lat;
    const lng = input.lng;
    
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=beach&type=natural_feature&location=${lat},${lng}&radius=${radius}&key=${process.env.API_KEY}`
    
    request({ //make call to the google api
        method: 'GET',
        uri: url,
    }, (error, response, body) => {
        if(!error && response.statusCode == 200){ //check there are no errors
            var data = JSON.parse(body);
            res.send(data.results);   
        }
        else{
            res.send('error');
        }
        
    })
})

const port = process.env.PORT || 3000; //host server on port specified in environment variables (.env file) otherwise host on port 3000
app.listen(port, ()=>{
    console.log(`listening on ${port}`);
})

