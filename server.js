var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser')
var request = require('request');

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var port = 8081;
app.listen(port, function () {
  console.log(`GardenBot web application is listening on port ${port}!`);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/images/garden25.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images/garden1.jpg'));
});

app.get('/ui/support.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'support.js'));
});
app.get('/ui/images/garden21.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images/garden21.jpg'));
});
app.post('/loginCredentials', function(req,res){
    var username = req.body.userName;
    var password = req.body.password;
    console.log(username, password);
    if(username === "hello" && password === "hello"){
      res.sendFile(path.join(__dirname,'ui','Firstpage.html'));
    } 
    else{res.end();}
});
app.get('/ui/gardenStatus.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gardenStatus.html'));
});
app.get('/ui/gardenStatus.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gardenStatus.css'));
});
app.get('/ui/images/garden19.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images/garden19.jpg'));
});


app.get('/ui/images/garden12.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images/garden12.jpg'));
});
app.get('/ui/newGarden1.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'newGarden1.css'));
});
app.get('/ui/newGarden.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'newGarden.html'));
});


app.get('/ui/waterSchedule.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'waterSchedule.html'));
});
app.get('/ui/waterSchedule.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'waterSchedule.css'));
});
app.get('/ui/images/garden28.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images/garden28.jpg'));
});


app.get('/ui/FirstPage.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'FirstPage.html'));
});


app.get('/ui/aboutus.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aboutus.html'));
});
app.get('/ui/aboutus.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aboutus.css'));
});
app.get('/ui/images/garden22.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images/garden22.jpg'));
});


app.get('/ui/contact.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
});
app.get('/ui/contact.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.css'));
});
app.get('/ui/images/garden20.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images/garden20.jpg'));
});


// app.get('/ui/gridLayout.html', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'gridLayout.html'));
// });
app.get('/ui/gridLayout.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gridLayout.css'));
});
app.get('/ui/images/garden7.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images/garden7.jpg'));
});


app.post('/contact', function(req,res){
  var contactName = req.body.Cname;
  var contactEmail = req.body.Cemail;
  var contactQuery = req.body.query;
  console.log(contactName, contactEmail);
  res.sendFile(path.join(__dirname,'ui','firstPage.html'));
});


app.post('/gardenDetails', function(req,res){
  var gardenName = req.body.gardenName;
  var plant1 = req.body.plant1;
  var plant2 = req.body.plant2;
  var plant3 = req.body.plant3;  
  console.log(gardenName, plant1);
  res.sendFile(path.join(__dirname,'ui','gridLayout.html'));
});


app.post('/gardenGrids', function(req,res){
  var G1 = req.body.G1;
  var G2 = req.body.G2;
  var G3 = req.body.G3;
  var G4 = req.body.G4;
  var G5 = req.body.G5;
  var G6 = req.body.G6;
  var G7 = req.body.G7;
  var G8 = req.body.G8;
  var G9 = req.body.G9;
  var G10 = req.body.G10; 
  var G11 = req.body.G11;
  var G12 = req.body.G12;
  console.log(G1, G12);
  res.sendFile(path.join(__dirname,'ui','waterSchedule.html'));  
});

app.post('/waterschedule', function(req,res){
  var mode = req.body.mode;
  var Mmode = req.body.Mmode;
  var interval1 = req.body.interval1;
  var interval2 = req.body.interval2;
  var interval3 = req.body.interval3;
  var eventTime1 = req.body.eventTime1;
  var eventTime2 = req.body.eventTime2;
  var eventTime3 = req.body.eventTime3;
  var Cinterval = req.body.Cinterval;
  var CeventTime = req.body.CeventTime;
  var moistureLevel = req.body.moistureLevel;
  console.log(mode, Mmode, Cinterval, CeventTime);  
  var url = 'http://192.168.4.1/HELLO';
  var que = '?'+mode +'&'+Mmode+'.';
  res.sendFile(path.join(__dirname,'ui','waterSchedule.html'));  
});
app.get('/statusData',function(req,res){
  var statusNow={
    "temp" : 56,
    "humd" : 45,
    "soilM": 80,
    "Wlevel": 80,
    // "upTime": "2000-08-05"
  };
  console.log("request for status");
  res.send(JSON.stringify(statusNow));
});


