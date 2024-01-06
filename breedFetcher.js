const request = require('request');
const URL = "https://api.thecatapi.com/v1/breeds/search?q="

const fetcher = function (breed){
    request(URL + breed, (error, response, body) => {
        const data = JSON.parse(body);
        if(data.length > 0){
            console.log(data);
            console.log(typeof data);
        }else{
            console.log("breed not found")
        }
        if(error){
            print("error: " + error);
        }
    });
}

if(process.argv.length >= 2){
    fetcher(process.argv[2])
}