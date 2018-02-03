angular.module('video-player')
  .component('videoList', {
  // TODO
  // bindings: {
  //   videos: '<' 
  // },
    templateUrl: 'src/templates/videoList.html',
    // bindings: {
    //   videoData: <
      
    // }
    bindings: {
      videos: '<'
    },
    controller: () => {
      console.log(this.videos);
    }
  });
