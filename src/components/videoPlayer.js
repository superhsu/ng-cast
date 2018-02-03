angular.module('video-player')

  .component('videoPlayer', {
  // TODO
    templateUrl: "src/templates/videoPlayer.html",
    bindings: {
      videos: '<'
    },
    // controller: function() {
    //   console.log($ctrl.videos);
    // }
  });
