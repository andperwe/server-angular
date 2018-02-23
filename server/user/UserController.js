var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('./User');
var VerifyToken = require('../auth/VerifyToken');

// CREATES A NEW USER
/*router.post('/user', function (req, res) {
    User.create({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            role : req.body.role
        },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});
*/
// RETURNS ALL THE USERS IN THE DATABASE
router.post('/userdt', VerifyToken, function(req, res) {
  var sorting = {}
  var start = 0
  var page = parseInt(req.body.page);
  if ( page > 1)
    start = (page -1) * 5;
  sorting[req.body.sort[0]] = req.body.sort[1]
  var filter = ""
  if (req.body.filter)
    filter = req.body.filter
  var q = User.aggregate([
    {
      $project: {
        username:1,
        lastName: {$ifNull:["$lastName",""]},
        firstName: {$ifNull:["$lastName",""]},
        email: {$ifNull:["$email",""]},
        role:1
      }
    },
    {
      $match:
          {username: {'$regex':'^' + filter,'$options':'i'}}
    },
    {$sort : sorting},
    {$skip : start},
    {$limit : 5}
  ]);

  var q_count = User.aggregate([

    {
      $project: {
        username:1
      }
    },
    {
      $match:
          {username: {'$regex':'^' + filter,'$options':'i'}}
    },
    {
      $count : "count"
    }
  ]);
  q_count.exec(function(err, count_f) {
    var recFilter = 0;
    if (count_f.length > 0)
      recFilter = parseInt(count_f[0].count)
    q.exec(function(err, users) {
      if (err)
        res.send(err);
      var data_send = {"recordsFiltering": recFilter, "data": users}
      res.json(data_send);
    })
  })
});

router.post('/user_new', VerifyToken, function(req, res) {
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

router.get('/user/:id', VerifyToken, function(req, res, next) {
  var id = req.params.id;
  User.findById(id, function (err, user) {
    if (err) {res.json({}); next();}
    res.json(user);
  });
});

router.put('/user/:id', VerifyToken, function(req, res, next) {
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  req.body.password = hashedPassword;
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next('Wystąpił błąd podczas aktualizowania użytkownika.');
    res.json(post);
  });
});

router.delete('/user/:id', VerifyToken, function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) {
      return next('Wystąpił błąd podczas usuwania użytkownika.');
    }
    res.json(post);
  });
});



// GETS A SINGLE USER FROM THE DATABASE
/*router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// DELETES A USER FROM THE DATABASE
/*router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ user.name +" was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
/*router.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});
*/

module.exports = router;
