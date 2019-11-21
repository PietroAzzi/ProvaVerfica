var express = require('express');
var app = express(); 
const path = require('path');
const express = require('express');
const http = require('http');

var cors=require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/',function(req,res){
 res.sendFile(path.join(__dirname+'/www/index.html')); 
});

app.get('/lotta',function(req,res){
 res.sendFile(path.join(__dirname+'/www/lotta.html')); 
});

app.get('/api/scorpioni',function(req,res){
 res.sendFile(path.join(__dirname+'/scorpioni.json')); 
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
