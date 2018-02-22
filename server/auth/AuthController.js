var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../user/User');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

var VerifyToken = require('./VerifyToken');
/*
router.post('/register', function(req, res) {
  var un = req.body.username.toLowerCase();
  User.findOne({ username: un }, function (err, user) {
    if (err) return res.status(500).send('Błąd serwera.');
    if (!user) {
        var hashedPassword = bcrypt.hashSync(req.body.password, 8);
        User.create({
          username : un,
          email : req.body.email,
          password : hashedPassword,
          firstName : req.body.firstName,
          lastName : req.body.lastName,
          role : req.body.role
        },
  function (err, user) {
    if (err) return res.status(500).send("Wystąpił błąd podczas rejestracji użytkownika.")
    res.status(200).send({ok:"Ok"});
  });
}
else {
return res.status(404).send('Taki użytkownik już istnieje.');
}
});
})
*/

/*router.get('/me', VerifyToken, function(req, res, next) {
  /* var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    User.findById(decoded.id, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
*/
/*
User.findById(req.userId, { password: 0 }, function (err, user) {
   if (err) return res.status(500).send("There was a problem finding the user.");
   if (!user) return res.status(404).send("No user found.");
    // res.status(200).send(user);
    next(user); // add this line
  });
});

*/
// add the middleware function
/*router.use(function (user, req, res, next) {
  res.status(200).send(user);
});
*/

router.post('/login', function(req, res) {
  User.findOne({ username: req.body.username }, function (err, user) {
    if (err) return res.status(500).send('Błąd serwera.');
    if (!user) return res.status(404).send('Nie znaleziono użytkownika.');
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send('Niepoprawne hasło');
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        role: user.role,
                        token: token });
  });
});

module.exports = router;
