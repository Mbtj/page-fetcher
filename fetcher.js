const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);

const fetch = function(url, filepath) {

const printMessage = function(filepath) {
  const stats = fs.statSync(filepath).size;
  console.log(`Downloaded and saved ${stats} bytes to ${filepath}`)
}


request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(filepath, body, (err) => { // write html file to this file
    if (err) {
      console.error(err);
      return
    } else {
      printMessage(filepath);
    }
  });

});

}

fetch(args[0], args[1]); //url filepath