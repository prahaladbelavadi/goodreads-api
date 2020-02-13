var request = require('request-promise');
var xml2js = require('xml2js');
require('dotenv').config();

let options = {
  method: 'GET',
  uri: `https://www.goodreads.com/review/list/${process.env.USER_ID}.xml`,
  qs: {
    key: process.env.KEY,
    v: process.env.VERSION,
    shelf: process.env.SHELF,
    per_page: process.env.PER_PAGE
  }
};

request(options)
  .then(shelf => {
    return shelf;
  })
  .then(shelf => {
    xml2js.parseString(shelf, function(err, result) {
      console.log(JSON.stringify(result));
    });
  })
  .catch(err => console.error(err));
