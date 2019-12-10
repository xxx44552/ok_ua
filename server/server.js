const express = require("express");
const fs = require('fs');
const path = require('path');
const bodyParser = require("body-parser");
const passport = require('passport');
var session = require('express-session');
const FileStore = require('session-file-store')(session);
var nodemailer = require('nodemailer');

const config = require('./config');

const app = express();
var jsonParser = bodyParser.json();

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

//загрузка на сервер картинки
function getImg(el, id, dir, typeImg, nameImg) {
  var imageData = el.replace(/^data:image\/\w+;base64,/, '');
  fs.writeFile(`${__dirname}/../data/${dir}/${nameImg}${id !== null?id:""}.${typeImg}`, imageData, {encoding: 'base64'}, function(err){
    if(err) {
      console.error(err)
    }
  });
}

function delPic(dir, name) {
  fs.readdir(dir, (err, files) => {
    files.forEach((file) => {
      let img = file.match(name)
      if(img) {
        console.log(img.input)
        if(file == img.input) {
          console.log(file)
          fs.unlink(`${dir}${file}`, (err) => {
            if (err) console.log(err);
            else console.log("del pic", file);
          });
        }
      }
    });
  });
}

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


//Edit
app.put("/api", function(req, res){

  if(!req.body) return res.sendStatus(400);

  var file = fs.readFileSync("../data/data.json", "utf8");
  var data = JSON.parse(file);



  var fb = req.body.fb;
  var insta = req.body.insta;
  var youtube = req.body.youtube;
  var tel = req.body.tel;
  var email = req.body.email;
  var headerText = req.body.headerText;
  var headerTitle = req.body.headerTitle;
  var headerLogo = req.body.headerLogo;
  var headerLogoType = req.body.headerLogoType;
  var taskTitle = req.body.taskTitle;
  var taskData = req.body.taskData;
  var deleteTaskItem = req.body.deleteTaskItem;
  var newsData = req.body.newsData;
  var deleteNewsItem = req.body.deleteNewsItem;
  var youtubeData = req.body.youtubeData;
  var deleteYoutubeItem = req.body.deleteYoutubeItem;
  var projectTitle = req.body.projectTitle;
  var projectData = req.body.projectData;
  var deleteProjectItem = req.body.deleteProjectItem;
  var statisticData = req.body.statisticData;
  var deleteStatisticItem = req.body.deleteStatisticItem;
  var teemData = req.body.teemData;
  var deleteTeemItem = req.body.deleteTeemItem;
  var mapCoordinates = req.body.mapCoordinates;
  var mapTitle = req.body.mapTitle;
  var footerAddress = req.body.footerAddress;
  var footerLogo = req.body.footerLogo;
  var footerLogoType = req.body.footerLogoType;
  var copy = req.body.copy;

  if(fb) {
    data.social.fb = fb;
  }
  if(insta) {
    data.social.insta = insta;
  }
  if(youtube) {
    data.social.youtube = youtube;
  }
  if(tel) {
    data.tel = tel;
  }
  if(email) {
    data.email = email;
  }
  if(headerText) {
    data.header.text = headerText;
  }
  if(headerTitle) {
    data.header.title = headerTitle;
  }
  if(headerLogo) {
    fs.readdir('../data/img', (err, files) => {
        files.forEach((file) => {
          let img = file.match(/header_logo/)
          if(img) {
            console.log(img.input)
            if(file == img.input) {
              console.log(file)
              fs.unlink(`${__dirname}/../data/img/${file}`, (err) => {
                if (err) console.log(err);
                else console.log("del pic", file);
              });
            }
          }

        });
        getImg(headerLogo, null, 'img', headerLogoType, 'header_logo');
      });

      data.header.logo = `img/header_logo.${headerLogoType}`
  }
  if(taskTitle) {
    data.task.title = taskTitle;
  }

  if(taskData) {

    // находим максимальный id
    var taskId = Math.max.apply(Math,data.task.data.map(function(o){
      return o.id;
    }));

    for(let i = 0; i < taskData.length; i++) {
      if(!isFinite(taskId)) {
        taskId = 0
      }else {
        taskId += +1;
      }
      var task = {
        id: taskId,
        text: taskData[i].text,
        img: `img/task/img${taskId}.${taskData[i].imgType}`
      };
      data.task.data.push(task)
      getImg(taskData[i].img, taskId, 'img/task/', taskData[i].imgType, 'img');
    }
  }

  if(deleteTaskItem) {
    for(var i = 0; i < deleteTaskItem.length; i++) {
      data.task.data = data.task.data.filter(el => el.id !== deleteTaskItem[i]);
      delPic('../data/img/task/', `img${deleteTaskItem[i]}`)
    }
  }

  if(newsData) {

    // находим максимальный id
    var taskIdNews = Math.max.apply(Math, data.news.map(function(o){
      return o.id;
    }));

    for(let i = 0; i < newsData.length; i++) {

      if(!isFinite(taskIdNews)) {
        taskIdNews = 0
      }else {
        taskIdNews += +1;
      }


      var news = {
        id: taskIdNews,
        text: newsData[i].text,
        img: `img/news/img${taskIdNews}.${newsData[i].imgType}`
      };
      data.news.push(news);
      getImg(newsData[i].img, taskIdNews, 'img/news/', newsData[i].imgType, 'img');
    }
  }

  if(deleteNewsItem) {
    for(var i = 0; i < deleteNewsItem.length; i++) {
      data.news = data.news.filter(el => el.id !== deleteNewsItem[i]);
      delPic('../data/img/news/', `img${deleteNewsItem[i]}`)
    }
  }

  if(youtubeData) {
    // находим максимальный id
    var taskIdYoutube = Math.max.apply(Math,data.youtube.map(function(o){
      return o.id;
    }));

    for(let i = 0; i < youtubeData.length; i++) {
      if(!isFinite(taskIdYoutube)) {
        taskIdYoutube = 0
      }else {
        taskIdYoutube += +1;
      }

      var youtube = {
        id: taskIdYoutube,
        text: youtubeData[i].text,
        link: youtubeData[i].link
      };
      data.youtube.push(youtube)
    }
  }

  if(deleteYoutubeItem) {
    for(var i = 0; i < deleteYoutubeItem.length; i++) {
      data.youtube = data.youtube.filter(el => el.id !== deleteYoutubeItem[i]);
    }
  }

  if(projectTitle) {
    data.project.title = projectTitle;
  }

  if(projectData) {

    // находим максимальный id
    var taskProjectId = Math.max.apply(Math,data.project.items.map(function(o){
      return o.id;
    }));

    for(let i = 0; i < projectData.length; i++) {
      if(!isFinite(taskProjectId)) {
        taskProjectId = 0
      }else {
        taskProjectId += +1;
      }

      var project = {
        id: taskProjectId,
        title: projectData[i].title,
        text: projectData[i].text,
        img: `img/project/data/img${taskProjectId}.${projectData[i].imgType}`
      };
      data.project.items.push(project)
      getImg(projectData[i].img, taskProjectId, 'img/project/data/', projectData[i].imgType, 'img');
    }
  }

  if(deleteProjectItem) {
    for(var i = 0; i < deleteProjectItem.length; i++) {
      data.project.items = data.project.items.filter(el => el.id !== deleteProjectItem[i]);
      delPic('../data/img/project/data/', `img${deleteProjectItem[i]}`)
    }
  }

  if(statisticData) {

    // находим максимальный id
    var taskStatisticId = Math.max.apply(Math,data.statistic.map(function(o){
      return o.id;
    }));

    for(let i = 0; i < statisticData.length; i++) {
      if(!isFinite(taskStatisticId)) {
        taskStatisticId = 0
      }else {
        taskStatisticId += +1;
      }

      var block = {
        id: taskStatisticId,
        text: statisticData[i].text,
        count: statisticData[i].count,
        img: `img/statistic/img${taskStatisticId}.${statisticData[i].imgType}`
      };
      data.statistic.push(block)
      getImg(statisticData[i].img, taskStatisticId, 'img/statistic/', statisticData[i].imgType, 'img');
    }
  }

  if(deleteStatisticItem) {
    for(var i = 0; i < deleteStatisticItem.length; i++) {
      data.statistic = data.statistic.filter(el => el.id !== deleteStatisticItem[i]);
      delPic('../data/img/statistic/', `img${deleteStatisticItem[i]}`)
    }
  }

  if(teemData) {

    // находим максимальный id
    var taskTeemId = Math.max.apply(Math,data.teem.map(function(o){
      return o.id;
    }));

    for(let i = 0; i < teemData.length; i++) {
      if(!isFinite(taskTeemId)) {
        taskTeemId = 0
      }else {
        taskTeemId += +1;
      }

      var teem = {
        id: taskTeemId,
        name: teemData[i].name,
        prof: teemData[i].prof,
        social: teemData[i].social,
        img: `img/teem/img${taskTeemId}.${teemData[i].imgType}`
      };
      data.teem.push(teem)
      getImg(teemData[i].img, taskTeemId, 'img/teem/', teemData[i].imgType, 'img');
    }
  }

  if(deleteTeemItem) {
    for(var i = 0; i < deleteTeemItem.length; i++) {
      data.teem = data.teem.filter(el => el.id !== deleteTeemItem[i]);
      delPic('../data/img/teem/', `img${deleteTeemItem[i]}`)
    }
  }

  if(mapTitle) {
    data.map.title = mapTitle;
  }

  if(mapCoordinates) {
    data.map.coordinates = mapCoordinates;
  }

  if(footerAddress) {
    data.footer.address = footerAddress;
  }

  if(footerLogo) {
    fs.readdir('../data/img', (err, files) => {
      files.forEach((file) => {
        let img = file.match(/footer_logo/)
        if(img) {
          console.log(img.input)
          if(file == img.input) {
            console.log(file)
            fs.unlink(`${__dirname}/../data/img/${file}`, (err) => {
              if (err) console.log(err);
              else console.log("del pic", file);
            });
          }
        }

      });
      getImg(footerLogo, null, 'img', footerLogoType, 'footer_logo');
    });

    data.footer.logo = `img/footer_logo.${footerLogoType}`
  }

  if(copy) {
    data.copy = copy;
  }

  var dataR = JSON.stringify(data);
  fs.writeFileSync("../data/data.json", dataR);

  res.send(dataR);

});

app.get("/*", function(req, res){
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'webinme.ru@gmail.com',
    pass: '1234567vV'
  }
});


app.post('/mail', jsonParser, function (request, response) {
  // if(!request.body.email || !request.body.firstName || !request.body.lastName) {
  //   return response.sendStatus(400);
  // }
  console.log(request.body);
  console.log(request.body.mess, '----------');

  var file = fs.readFileSync("../data/data.json", "utf8");
  var data = JSON.parse(file);
  var sendEmail = data.email;

  console.log(sendEmail)

  var mailOptions = {
    from: 'webinme.ru@gmail.com',
    to: sendEmail,
    subject: 'Сообщение с вашего сайта - okua.in.ua',
    text: `Сообщение от: ${request.body.firstName}`,
    html: ` <h1>${request.body.mess ? 'Обратная связь' : 'Получать обновления'}</h1>   
            <p>Имя: ${request.body.firstName}</p>
            <p>Фамилия: ${request.body.lastName}</p>
            <p>Телефон: ${request.body.phone}</p>
             ${request.body.mess ? `<p>Сообщение: ${request.body.mess}</p>` : ''}
            <p>Почта: ${request.body.email}</p>`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      response.redirect('/err-mail')
    } else {
      response.redirect('/')
    }
  });

})

app.listen(config.port, function () {
  console.log('Start server on ' + config.port + ' port...')
});
