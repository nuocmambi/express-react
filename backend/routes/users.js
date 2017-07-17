var express = require('express');
var router = express.Router();


let users = [{
	id: 1,
	username: "test1"
},
{
	id: 2,
	username: "martin"
},
{
	id: 3,
	username: "dang"
},
{
	id: 4,
	username: "meg"
}
];


/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json(users);
});

module.exports = router;
