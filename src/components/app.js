angular.module('video-player')
  .component('app', {
  // TODO
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {

      this.selectVideo = (index) => {
        this.currentVideo = this.videos[index];
      };
      this.searchYoutube = (query) => {
        youTube.searchService(query, (data) => {
          this.videos = data;
          this.currentVideo = data[0];
        });
      };
      this.searchYoutube('capybaras');
    }
  });

