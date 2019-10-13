var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
app.get('/', (req, res)=>{
	const names = [{name: "someone" }, {name: "someoneelse"}];
	res.json(names);
});


app.listen(3001 , (req, res) => {
    console.log('server is listening');
});
