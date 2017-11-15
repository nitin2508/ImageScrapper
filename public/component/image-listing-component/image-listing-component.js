(function() {
  angular.module('ImageScrapper')
    .component('imageListingComponent', {
      templateUrl: 'component/image-listing-component/image-listing-component.html',
      controller: ImageListingController
    });

  ImageListingController.$inject = ['$rootScope', 'LoaderService', '$timeout','$state'];

  function ImageListingController($rootScope, LoaderService, $timeout,$state) {
    var vm = this;
    vm.$onInit = activate;

    function activate() {

        vm.keyword = $state.params.keyword;
        vm.imagesArray = [];
        if(vm.keyword ){
            LoaderService.showLoader();
            LoaderService.getAllImages(vm.keyword )
            .then(function(res){
                var imageUrls = res[0].imageUrls;
                for (var i = 0; i < imageUrls.length; i++) {
                    var string = 'http://localhost:3006/'+vm.keyword+'/'+imageUrls[i];
                vm.imagesArray.push(string)
                }
                LoaderService.hideLoader();
            })
        }
    }
}
})();
