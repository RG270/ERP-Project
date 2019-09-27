var express = require('express');
var app = express();

app.get('/', (req, res)=>{
	res.send("this is our first app");
})

app.listen(3001 , process.env.IP, (req, res) => {
    console.log('server is listening');
});

module.exports = app;
