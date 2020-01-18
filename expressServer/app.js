var express = require('express');
var request = require('request');
var cors = require('cors');
// Set up the express app
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
app.use(cors())
// get all todos
app.post('/', (req, res) => {
    var token = req.body.token;
    var message = req.body.message;
   
    request({
        method: 'POST',
        uri: 'https://notify-api.line.me/api/notify',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        auth: {
          'bearer': token
        },
        form: {
          message: message
        }
      }, (err, httpResponse, body) => {
        if(err){
          console.log(err);
        } else {
          res.json({
            httpResponse: httpResponse,
            body: body
          });
        }
    });
});
const PORT = 3030;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});