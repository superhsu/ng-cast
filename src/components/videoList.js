angular.module('video-player')
  .component('videoList', {
    controller: function () {
      console.log(this);
    },
    templateUrl: 'src/templates/videoList.html',

    bindings: {
      videos: '<',
      selectVideo: '<'
    }
    
  });
