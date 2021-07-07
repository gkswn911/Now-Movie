const request = require('request');

const NAVER_CLIENT_ID     = '6Ynx8MeApDkQflsjxRQs';
const NAVER_CLIENT_SECRET = '';

const fitMovie = (Genre,Country,Yearto, callback) => {
    const option = {
        query  : "a" , //이미지 검색 텍스트
        start  :1, //검색 시작 위치
        display:1, //가져올 이미지 갯수
        genre: Genre, 
        country : Country,
        yearfrom : Yearto-1,
        yearto : Yearto        
      }

      request({
        uri:'https://openapi.naver.com/v1/search/movie.json', //xml 요청 주소는 https://openapi.naver.com/v1/search/image.xml
        qs :option,
        headers:{
          'X-Naver-Client-Id':NAVER_CLIENT_ID,
          'X-Naver-Client-Secret':NAVER_CLIENT_SECRET
        }
        }, (error, {body}) => {
        const fit = JSON.parse(body)
        console.log(body);
        callback(undefined, {
            fit:fit
            
        })
      })  
     
}

module.exports = fitMovie;