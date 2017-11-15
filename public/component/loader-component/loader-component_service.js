(function(){
    angular.module('ImageScrapper')
    .service('LoaderService',LoaderService);

    LoaderService.$inject = ['$rootScope','$http'];

    function LoaderService($rootScope,$http){
        var baseUrl = 'http://localhost:3006/';
        this.showLoader = function(){
            $rootScope.$emit('SHOW_LOADER');
        };
        this.hideLoader = function(){
            $rootScope.$emit('HIDE_LOADER');
        };

        this.getAllKeyword = function(){
            return $http.get(baseUrl+'keyword')
                .then(function(response) {
                    return response.data;
                });
        }
        this.scrapeImage = function(obj){
            return $http.post(baseUrl+'scrape',obj)
                .then(function(response) {
                    return response.data;
                });
        }
        this.getAllImages = function(keyword){
            return $http.get(baseUrl+'scrape/'+keyword)
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();
