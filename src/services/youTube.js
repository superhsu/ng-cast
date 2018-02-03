angular.module('video-player')
  .service('youTube', function($http) {
    this.searchService = (query, callback) => {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: 'cats',
          max: 5,
          type: 'video',
          videoEmbeddable: 'true',
          key: window.YOUTUBE_API_KEY,
          part: 'snippet'
        }
      }).then(function successCallback(data) {
        console.log('searched!');
        data = data.data.items; 
        console.log(callback);
        callback(data);
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(data) {
        console.log('err');
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

    };
  });



// $http.get('https://www.googleapis.com/youtube/v3/search',
//         {q: 'cats',
//         max: 5,
//         type: 'video',
//         key: window.YOUTUBE_API_KEY,
//         part: 'snippet',
//         videoEmbeddable: 'true'})
//         .then(function successCallback(data) {
//         console.log('searched!');
//         // this callback will be called asynchronously
//         // when the response is available
//       }, function errorCallback(data) {
//         console.log('err', data);
//         // called asynchronously if an error occurs
//         // or server returns response with an error status.
//       });