angular.module('video-player')

  .component('search', {
  // TODO
    templateUrl: 'src/templates/search.html',
    bindings: {
      searchYoutube: '<'
    }
  });


// controller: ['youTube', function (youtube) {
//       this.searchYoutube = () => {
//         //call our service 
//         youtube.searchService();
//       };   