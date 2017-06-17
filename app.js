const express = require('express')
const app = express()

var cedict = require('node-cc-cedict');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Pinyin Search App' })
})

app.post('/search', function (req, res) {
  var searchText = req.body.search;
  
  cedict.searchByPinyin(searchText, function(words){
	res.render('search', { title: 'Pinyin Search App', searchText: searchText, words: words })
  })
})

app.listen(3000, function () {
  console.log('Pinyin Search App Listening on port 3000!')
})