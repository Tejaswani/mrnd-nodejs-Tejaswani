var express = require('express');
var router = express.Router();
var con = new Array(),i = 0;
var msgs =new Array();
/* GET contacts */
router.get('/:id', function(req, res, next){
	var fs = require('fs');
	var filename = req.params.id+"-Contact.json";
	var path = 'E:/Softwares/mrnd/mrnd-nodejs-master/spec/tests/data/'+filename;
	fs.openSync(path,'w');
	var data = fs.readFileSync(path,encoding)
	res.send(data);
});

router.post('/', function(req, res, next) {
	console.log("hello");
	var fs = require('fs');
	var path = 'E:/Softwares/mrnd/mrnd-nodejs-master/spec/tests/data/0-Contact.json';
//	fs.openSync(path,'w');
	fs.writeFileSync(path,JSON.stringify(req.body));
	con.push(req.body);
	//console.log(req.body);
	i+=1;
	var tmpId = (i-1)+"";
	res.send(tmpId);
});

router.put('/:id', function(req, res, next) {
	/*var fs = require('fs');
	var path = 'E:/Softwares/mrnd/mrnd-nodejs-master/spec/tests/data/0-Contact.json';
	fs.openSync(path,'r+');
	fs.writeFileSync(path,JSON.stringify(req.body));*/
	if(req.body.firstName!=undefined)
		con[i-1].firstName = req.body.firstName;
	if(req.body.lastName!=undefined)
		con[i-1].lastName = req.body.lastName;
	if(req.body.phone!=undefined)
		con[i-1].phone = req.body.phone;
	res.send(con[i-1]);
});
router.post('/:id/messages', function(req, res, next) {
	//console.log(req.params.id);
	if(msgs[req.params.id] == undefined)
	{
		msgs[req.params.id] = [];
	}
	msgs[req.params.id].push(req.body);
	res.send(""+msgs.length);
});

router.get('/:id/messages',function(req,res,next){
	if(msgs[req.params.id]!=undefined)
	{
		res.send(msgs[req.params.id]);
	}
});
module.exports = router;
