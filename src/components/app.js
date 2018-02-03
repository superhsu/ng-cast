angular.module('video-player')
  .component('app', {
  // TODO
    templateUrl: 'src/templates/app.html',
    controller: ['youTube', function(youtube) {

      this.$onInit = () => {
        this.searchYoutube('capybaras');
      };

      this.selectVideo = (index) => {
        this.currentVideo = this.videos[index];
      };
      this.searchYoutube = (query) => {
        youtube.searchService(query, (data) => {
          this.videos = data;
          this.currentVideo = data[0];
        });
      };
    }]
  });

