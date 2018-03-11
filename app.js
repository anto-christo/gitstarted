var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').Server(app);
var mongoose = require('mongoose');
var assert = require('assert');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/gs';

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.use(express.static(__dirname));

server.listen(process.env.PORT || 3000,function(){
    console.log('Listening on '+server.address().port);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var GitHub = require('github-api');
var gh = new GitHub();

app.post('/insert_user',function(req,res){

    var followers = req.body.followers;
    var stars = req.body.stars;
    var forks = req.body.forks;
    var repos = req.body.repos;
    var languages = req.body.languages;
    var sizes = req.body.sizes;
    var username = req.body.username;

    obj = {username:username,followers:followers,stars:stars,forks:forks,repos:repos,languages:JSON.parse(languages),sizes:JSON.parse(sizes)};

    MongoClient.connect(url, function(err, client) {
        assert.equal(null,err);
        const db = client.db('gs');

        db.collection('user_info').insert(obj,function(err,result){
            
        });
    });
});

app.post('/rep_info',function(req,res){

    var token = req.body.token;

    var gh = new GitHub({
        token:token
    });

    var userrepos = gh.getUser();
    var rate = gh.getRateLimit();

    rate.getRateLimit(function(error,result){
        //console.log(result);
    })

    userrepos.listRepos(function(error,result){
        //console.log(result);
        return res.send(JSON.stringify({"res":result}));
    });

});

app.post('/user_info',function(req,res){

    var token = req.body.token;

  var gh = new GitHub({
        token:token
  });

  var userinfo = gh.getUser();

  userinfo.getProfile(function(error,result){
      //console.log(result);
      return res.send(JSON.stringify({"res":result}));
  });

});

app.post('/get_cont',function(req,res){

    var token = req.body.token;
    var rep_name = req.body.rep_name;

  var gh = new GitHub({
        token:token
  });

  var repoinfo = gh.getRepo(rep_name);

  repoinfo.getContributors(function(error,result){
      console.log(result);
      return res.send(JSON.stringify({"res":result}));
  });

});

// app.post('/get_recom',function(req,res){

//   var token = req.body.token;
//   var stars = req.body.stars;
//   var followers = req.body.followers;
//   var repos = req.body.repos;
//   var languages = req.body.languages;
//   var sizes = req.body.sizes;

//   var lang = JSON.parse(languages);
//   var size = JSON.parse(sizes);

//   var gh = new GitHub({
//         token:token
//   });

//   var repos = gh.search();

//   repos.forRepositories({q:"language:javascript+python"},function(error,result){
//       console.log(result);
//       return res.send(JSON.stringify({"res":result}));
//   });

// });


// var github = require('octonode');

// // Then we instantiate a client with or without a token (as show in a later section)
// var client = github.client();
// var ghsearch = client.search();
// ghsearch.repos({
//         q: 'language:javascript+language:html',
//         sort: 'stars',
//         order: 'asc',
//         page:2,
//         per_page: 2
//       }, function(error,result){
//         console.log(result)
//       }
//     )
// });

var github = require('octonode');

app.post('/get_recom',function(req,res){

    var token = req.body.token;
    var stars = req.body.stars;
    var followers = req.body.followers;
    var repos = req.body.repos;
    var forks = req.body.forks;
    var languages = req.body.languages;
    var sizes = req.body.sizes;
    var page = req.body.page;
  
    var lang = JSON.parse(languages);
    var size = JSON.parse(sizes);

    var query = '';

    for(var i in lang){
        var string = 'language:'+lang[i]+"+";
        query = query+string;
    }

    var st = 'stars:'+stars+"+";
    var fl = 'followers:'+followers+"+";
    var fk = 'forks:'+forks+"+";

    query=query+st+fl+fk;

    console.log(query);

    var client = github.client();
  
    var ghsearch = client.search();

    ghsearch.repos({
        q: query,
        sort: 'created',
        order: 'asc',
        per_page: 100,
        page:page
      }, function(error,result){
            //console.log(result);
      return res.send(JSON.stringify({"res":result}));
  }); 
});
