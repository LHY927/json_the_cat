const request = require("request");

const breedName = process.argv[2];
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback){
    request(URL+breedName, (err, response, body) => {
        let description = null;
        const data = JSON.parse(body);
        if(data.length > 0){
            description = data[0].description;
        }
        callback(err, description);
    })
}

module.exports = {fetchBreedDescription};