angular.module('video-player')
  .service('youTube', function() {
    this.searchService = function () {
      console.log('searched!');
    };
  });
