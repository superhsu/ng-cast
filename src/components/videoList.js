angular.module('video-player')
  .component('videoList', {
  // TODO
  // bindings: {
  //   videos: '<' 
  // },
    controller: function () {
      console.log(this);
    },
    templateUrl: 'src/templates/videoList.html',
    // bindings: {
    //   videoData: <
      
    // }
    bindings: {
      videos: '<',
      selectVideo: '<'
    }
    
  });
