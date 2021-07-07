const express = require('express');
const router = express.Router();
const fitMovie = require('../public/javascripts/fit');
const alert = require('alert');

router.get('/', function(req,res,next){

  fitMovie(req.query.genre, req.query.country,
     req.query.yearto,(error, {fit}={})=>{
    
    
    if( fit['total'] == 0 ){
      alert("결과가 없습니다. 다른 영화를 골라주세요.");
      return res.render('index');
    }

    for(let i = 0; i < 5; i++){
    fit['items'][0]['title'] = fit['items'][0]['title'].replace(/<b>/,"")
    fit['items'][0]['title'] = fit['items'][0]['title'].replace(/<\/b>/,"")
    fit['items'][0]['subtitle'] = fit['items'][0]['subtitle'].replace(/<b>/,"")
    fit['items'][0]['subtitle'] = fit['items'][0]['subtitle'].replace(/<\/b>/,"")
    }

    if (error){
      return res.send({error})
    }
      return res.render('fitMovie', {
  
      title: fit['items'][0]['title'],
      Director : fit['items'][0]['director'],
      Actor : fit['items'][0]['actor'],
      userRating : fit['items'][0]['userRating'],
      subtitle: fit['items'][0]['subtitle'],
      pubDate : fit['items'][0]['pubDate'],
      image : fit['items'][0]['image'],
      link : fit['items'][0]['link'],


    })
  

  })

});

module.exports = router;

