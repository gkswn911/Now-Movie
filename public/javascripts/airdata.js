//airdata에 대한 JSON객체 담기
const request = require("request")
const serviceKey = require('keys.js')


var headers = {
    'X-Naver-Client-Id': '',
    'X-Naver-Client-Secret': '',
}

const airdata = (stationName, callback) => { 
    const url = 'https://openapi.naver.com/v1/search/movie.json'
   
    var queryParams = encodeURIComponent('title') + '=' + encodeURIComponent('아이언맨')

} 

// var headers = {
//     'X-Naver-Client-Id': '{애플리케이션 등록 시 발급받은 client id 값}',
//     'X-Naver-Client-Secret': '{애플리케이션 등록 시 발급받은 client secret 값}'
// };

// var options = {
//     url: 'https://openapi.naver.com/v1/search/movie.xml?query=%EC%A3%BC%EC%8B%9D&display=10&start=1&genre=1',
//     headers: headers
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }
// }

// request(options, callback);
// this is curl part