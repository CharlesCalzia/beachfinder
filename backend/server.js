const express = require('express');
const request = require('request');
var cors = require('cors') //include libraries

require('dotenv').config(); //import environment variables

const app = express(); //create express app


app.use(cors());



var allData = new Array;
app.get('/api/v1/beaches', cors(), (req, res) => { //route to api
    
    const input = req.query;
    const radius = input.radius;
    const lat = input.lat;
    const lng = input.lng;
    const place = input.place;
    console.log(place===undefined);
    if (place===undefined){
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?type=natural_feature&location=${lat},${lng}&radius=${radius}&key=${process.env.API_KEY}&query=beach`;
        console.log(url);
        request({ //make call to the google api
            method: 'GET',
            uri: url,
        }, (error, response, body) => {
            if(!error && response.statusCode == 200){ //check there are no errors
                var data = JSON.parse(body);
                res.send(data.results);   
                //console.log(data.results)
            }
            else{
                res.send('error');
            }
            
        })
    }
    else{
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?type=natural_feature&location=${lat},${lng}&radius=${radius}&key=${process.env.API_KEY}&query=beaches+in+${place}`;
        console.log(url);
        request({ //make call to the google api
            method: 'GET',
            uri: url,
        }, (error, response, body) => {
            if(!error && response.statusCode == 200){ //check there are no errors
                var data = JSON.parse(body);
                res.send(data.results);   
                //console.log(data.results)
            }
            else{
                res.send('error');
            }
            
        })
    }
    
    
    
})

const port = process.env.PORT || 3000; //host server on port specified in environment variables (.env file) otherwise host on port 3000

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
})

