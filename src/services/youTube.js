angular.module('video-player')
  .service('youTube', function($http) {
    this.searchService = (query, callback) => {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: query,
          max: 5,
          type: 'video',
          videoEmbeddable: 'true',
          key: window.YOUTUBE_API_KEY,
          part: 'snippet'
        }
      }).then(function successCallback(data) {
        console.log('searched!');
        data = data.data.items; 
        callback(data);
      }, function errorCallback(data) {
        console.log(data);
        console.log('err');
      });

    };
  });
