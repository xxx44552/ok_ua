const express = require("express");
const fs = require('fs');
const path = require('path');
const bodyParser = require("body-parser");
const passport = require('passport');
var session = require('express-session');
const FileStore = require('session-file-store')(session);

const config = require('./config');

const app = express();

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));


app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.static(path.join(__dirname, '../data')));



//Authorization *************************

app.use(
    session({
      secret: 'hghtyNN23h',
      store: new FileStore(),
      cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
      },
      resave: false,
      saveUninitialized: false,
    })
);

require('./passport');

app.use(passport.initialize());
app.use(passport.session());

app.post('/login', (req, res, next) => {
  passport.authenticate('local', function(err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect('/login');
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.redirect('/admin');
    });
  })(req, res, next);
});

const auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.redirect('/login');
  }
};

app.get('/admin', auth, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});
//End authorization *************************

app.get("/api", function(req, res){

  var file = fs.readFileSync("../data/data.json", "utf8");
  var data = JSON.parse(file);
  res.send(data);

});

app.get('/api/task/:id', function (req, res) {

  var id = req.params.id;
  var file = fs.readFileSync("../data/data.json", "utf8");
  var data = JSON.parse(file);
  var list = data.task.data;
  var task = null;

  for(var i = 0; i < list.length; i++) {
    if(list[i].id == id) {
      task = list[i];
      break;
    }
  }

  if(task) {
    res.send(task)
  } else {
    res.status(404).send('Error')
  }

});

app.get('/api/news/:id', function (req, res) {

  var id = req.params.id;
  var file = fs.readFileSync("../data/data.json", "utf8");
  var data = JSON.parse(file);
  var list = data.news;
  var news = null;

  for(var i = 0; i < list.length; i++) {
    if(list[i].id == id) {
      news = list[i];
      break;
    }
  }

  if(news) {
    res.send(news)
  } else {
    res.status(404).send('Error')
  }

});

app.get('/api/youtube/:id', function (req, res) {

  var id = req.params.id;
  var file = fs.readFileSync("../data/data.json", "utf8");
  var data = JSON.parse(file);
  var list = data.youtube;
  var youtube = null;

  for(var i = 0; i < list.length; i++) {
    if(list[i].id == id) {
      youtube = list[i];
      break;
    }
  }

  if(youtube) {
    res.send(youtube)
  } else {
    res.status(404).send('Error')
  }

});

app.get('/api/project/:id', function (req, res) {

  var id = req.params.id;
  var file = fs.readFileSync("../data/data.json", "utf8");
  var data = JSON.parse(file);
  var list = data.project.items;
  var project = null;

  for(var i = 0; i < list.length; i++) {
    if(list[i].id == id) {
      project = list[i];
      break;
    }
  }

  if(project) {
    res.send(project)
  } else {
    res.status(404).send('Error')
  }

});

app.get('/api/statistic/:id', function (req, res) {

  var id = req.params.id;
  var file = fs.readFileSync("../data/data.json", "utf8");
  var data = JSON.parse(file);
  var list = data.statistic;
  var statistic = null;

  for(var i = 0; i < list.length; i++) {
    if(list[i].id == id) {
      statistic = list[i];
      break;
    }
  }

  if(statistic) {
    res.send(statistic)
  } else {
    res.status(404).send('Error')
  }

});

app.get('/api/teem/:id', function (req, res) {

  var id = req.params.id;
  var file = fs.readFileSync("../data/data.json", "utf8");
  var data = JSON.parse(file);
  var list = data.teem;
  var teem = null;

  for(var i = 0; i < list.length; i++) {
    if(list[i].id == id) {
      teem = list[i];
      break;
    }
  }

  if(teem) {
    res.send(teem)
  } else {
    res.status(404).send('Error')
  }

});

app.get("/*", function(req, res){
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(config.port, function () {
  console.log('Start server on ' + config.port + ' port...')
});