const request = require('request');

const NAVER_CLIENT_ID     = '6Ynx8MeApDkQflsjxRQs';
const NAVER_CLIENT_SECRET = '';

const movieSearch = (title, callback) => {
    const option = {
        query  :title , //이미지 검색 텍스트
        start  :1, //검색 시작 위치
        display:1, //가져올 이미지 갯수
        
      }

      request({
        uri:'https://openapi.naver.com/v1/search/movie.json', //xml 요청 주소는 https://openapi.naver.com/v1/search/image.xml
        qs :option,
        headers:{
          'X-Naver-Client-Id':NAVER_CLIENT_ID,
          'X-Naver-Client-Secret':NAVER_CLIENT_SECRET
        }
        }, (error, {body}) => {
        const movie = JSON.parse(body)
        console.log(body);
        callback(undefined, {
          movie:movie
            
        })
      })  
     
}

module.exports = movieSearch;