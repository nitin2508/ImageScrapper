(function() {
  angular.module('ImageScrapper')
    .component('scrapeInputComponent', {
      templateUrl: 'component/scrape-input-component/scrape-input-component.html',
      controller: ScrapeController
    });

  ScrapeController.$inject = ['$rootScope', 'LoaderService', '$timeout'];

  function ScrapeController($rootScope, LoaderService, $timeout) {
    var vm = this;
    vm.$onInit = activate;

    function activate() {
      vm.scrapeImage = scrapeImage;
      vm.arrayOfKeyword = [];
      LoaderService.showLoader();
      LoaderService.getAllKeyword()
        .then(function(res) {
          vm.arrayOfKeyword = res;
          LoaderService.hideLoader();
        })
    }


    function avtivateTimeout(){
        $timeout(function() {
          vm.error = false
        }, 2000);
    }

    function scrapeImage(keyword) {
      for (var i = 0; i < vm.arrayOfKeyword.length; i++) {
        if (vm.arrayOfKeyword[i] === keyword) {
          vm.error = true;
          avtivateTimeout();
          //return;
        }
      }
      var obj = {
        keyword: keyword
      }
      LoaderService.showLoader();
      LoaderService.scrapeImage(obj)
        .then(function(res) {
          vm.arrayOfKeyword.push(res.keyword);
          LoaderService.hideLoader();
        })
    }
  }
})();
