(function(){
    angular.module('ImageScrapper')
    .component('headerComponent',{
        templateUrl: 'component/header-component/header_template.html',
        controller:HeaderController
    });

    HeaderController.$inject = [];
    function HeaderController(){
    }
})();
