const express = require('express');
const router = express.Router();
const movieSearch = require('../public/javascripts/movie');
const alert = require('alert');

router.get('/', function(req,res,next){
  
  movieSearch(req.query.title,(error, {movie}={})=>{
    
    if (req.query.title == ""){
      alert("검색할 영화 제목을 입력해주세요.");
      return res.render('index');
    }
    else if( movie['total'] == 0 ){
      alert("결과가 없습니다. 다른 제목을 입력해주세요.");
      return res.render('index');
    }

    for(let i = 0; i < 5; i++){
      movie['items'][0]['title'] = movie['items'][0]['title'].replace(/<b>/,"")
      movie['items'][0]['title'] = movie['items'][0]['title'].replace(/<\/b>/,"")
      movie['items'][0]['subtitle'] = movie['items'][0]['subtitle'].replace(/<b>/,"")
      movie['items'][0]['subtitle'] = movie['items'][0]['subtitle'].replace(/<\/b>/,"")
    }

    if (error){
      return res.send({error})
    }
      return res.render('search', {
  
      title: movie['items'][0]['title'],
      Director : movie['items'][0]['director'],
      Actor : movie['items'][0]['actor'],
      userRating : movie['items'][0]['userRating'],
      subtitle: movie['items'][0]['subtitle'],
      pubDate : movie['items'][0]['pubDate'],
      image : movie['items'][0]['image'],
      link : movie['items'][0]['link'],


    })
  

  })

});

module.exports = router;

