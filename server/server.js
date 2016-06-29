const express = require('express');
const app = express();
app.use(express.static(__dirname + '/../dist'));

app.route('/')
  //.get((req, res) => {res.status(200).send('test')})

app.listen(3000, () => {console.log('listening on port 3000')});