var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser')
var request = require('request');
var requestify = require('requestify');
var app = express();
app.use(morgan('combined'));
app.use(bodyParser.raw())
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

var gardenName,plant1,plant2,plant3;
app.post('/gardenDetails', function(req,res){
   gardenName = req.body.gardenName;
   plant1 = req.body.plant1;
   plant2 = req.body.plant2;
  plant3 = req.body.plant3;  
  console.log(gardenName, plant1);
  requestify.request('http://192.168.4.1:80/'+'!0;'+gardenName+';'+plant1+';'+plant2+';'+plant3+'-',{
    method: 'GET',  
    headers:{
        Aceept : 'text/plain',
        connection:'keep-alive',
      },
        dataType : 'plain' 
    }).then(function(response){    
    console.log('response:',response.getBody());
});
  res.sendFile(path.join(__dirname,'ui','gridLayout.html'));
  
});

var G1,G2,G3,G4,G5,G6,G7,G8,G9,G10,G11,G12;
app.post('/gardenGrids', function(req,res){
   G1 = (req.body.G1 == plant1)*1+(req.body.G1 == plant2)*2+ (req.body.G1 == plant3)*3;
   G2 = (req.body.G2 == plant1)*1+(req.body.G2 == plant2)*2+ (req.body.G2 == plant3)*3;
   G3 =(req.body.G3 == plant1)*1+(req.body.G3 == plant2)*2+ (req.body.G3 == plant3)*3;
   G4 = (req.body.G4 == plant1)*1+(req.body.G4 == plant2)*2+ (req.body.G4 == plant3)*3;
   G5 = (req.body.G5 == plant1)*1+(req.body.G5 == plant2)*2+ (req.body.G5 == plant3)*3;
   G6 = (req.body.G6 == plant1)*1+(req.body.G6 == plant2)*2+ (req.body.G6 == plant3)*3;
   G7 = (req.body.G7 == plant1)*1+(req.body.G7 == plant2)*2+ (req.body.G7 == plant3)*3;
   G8 = (req.body.G8 == plant1)*1+(req.body.G8 == plant2)*2+ (req.body.G8 == plant3)*3;
   G9 = (req.body.G9 == plant1)*1+(req.body.G9 == plant2)*2+ (req.body.G9 == plant3)*3;
   G10 = (req.body.G10 == plant1)*1+(req.body.G10 == plant2)*2+ (req.body.G10 == plant3)*3; 
   G11 = (req.body.G11 == plant1)*1+(req.body.G11 == plant2)*2+ (req.body.G11 == plant3)*3;
   G12 = (req.body.G12 == plant1)*1+(req.body.G12 == plant2)*2+ (req.body.G12 == plant3)*3;
  console.log(G1, G12);
  res.sendFile(path.join(__dirname,'ui','waterSchedule.html'));  
});

app.post('/waterschedule', function(req,res){
  var mode = req.body.mode;
  var Mmode = req.body.Mmode;
  var interval1 = req.body.interval1;
  var interval2 = req.body.interval2;
  var interval3 = req.body.interval3;
  var eventTime1 = req.body.eventTime1/30;
  var eventTime2 = req.body.eventTime2/30;
  var eventTime3 = req.body.eventTime3/30;
  var Cinterval = req.body.Cinterval;
  var CeventTime = req.body.CeventTime/30;
  var moistureLevel = (req.body.moistureLevel == '15%')*1 + (req.body.moistureLevel == '20%')*2 +(req.body.moistureLevel == '25%')*3 + (req.body.moistureLevel == '30%')*4 + (req.body.moistureLevel == '35%')*5;
  console.log(mode, Mmode, Cinterval, CeventTime); 
  if(mode==='manual') mode=Mmode; 
  if(mode == 'A'){
  requestify.get('http://192.168.4.1:80/'+'!1'+G1+G1+G3+G4+G5+G6+G7+G8+G9+G10+G11+G12+mode+moistureLevel+'-').then(function(response) {
    // Get the response body 
    response.getBody();
});
}
if(mode == 'C'){
  requestify.get('http://192.168.4.1:80/'+'!1'+G1+G1+G3+G4+G5+G6+G7+G8+G9+G10+G11+G12+mode+Cinterval+CeventTime+'-').then(function(response) {
    // Get the response body 
    response.getBody();
});
}
if(mode == 'I'){
  requestify.get('http://192.168.4.1:80/'+'!1'+G1+G1+G3+G4+G5+G6+G7+G8+G9+G10+G11+G12+mode+interval1+eventTime1+interval2+eventTime2+interval3+eventTime3+'-').then(function(response) {
    // Get the response body 
    response.getBody();
});
}
res.sendFile(path.join(__dirname,'ui','waterSchedule.html'));
// request(options,function(error, response, body) {
    
//     console.log("error:",error);
//     console.log("statusCode:",response && response.statusCode);  
//     console.log("BODY",body);
// });
// request({
//   uri: 'http://192.168.4.1/TEMP',  
//   Host: '192.168.4.1',
//   method: 'GET',
//   Accept: 'text/html',
//   headers: {
//     connection : 'keep-alive',
//       'Upgrade-Insecure-Requests': 1,
//        DNT: 1,
//       'Accept-Encoding': 'gzip, deflate',
//       'Accept-Language': 'en-US,en;q=0.8,ta;q=0.6',
//       'User-Agent': 'Gardenbot'
//   },
//   timeout: 60000,
// }, function(error, response, body) {
//   console.log("error:",error);
//   console.log(body);
// });
 });
app.get('/statusData',function(req,res){
  var statusNow={
    "temp" : 56,
    "humd" : 20,
    "soilM": 80,
    "Wlevel": 80,
    // "upTime": "2000-08-05"
  };
  console.log("request for status");
  res.send(JSON.stringify(statusNow));
});


