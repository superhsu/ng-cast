angular.module('video-player')
  .component('app', {
  // TODO
    templateUrl: 'src/templates/app.html',
    controller: ['youTube', function(youtube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];

      this.selectVideo = (index) => {
        console.log('hi');
        this.currentVideo = this.videos[index];
      };
      var that = this; 
      this.searchYoutube = (query) => {
        //call our service 
        console.log(this, 'outside service');
        youtube.searchService(query, (data) => {
          console.log(this, 'inside service');
          this.videos = data;
          this.currentVideo = data[0];
        });
      };
    }]
  });

