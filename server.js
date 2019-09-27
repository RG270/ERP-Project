var express = require('express');
var app = express();

app.get('/', (req, res)=>{
	const names = [{name: "someone" }, {name: "someoneelse"}];
	res.json(names);
});

app.listen(3001 , process.env.IP, (req, res) => {
    console.log('server is listening');
});

module.exports = app;
