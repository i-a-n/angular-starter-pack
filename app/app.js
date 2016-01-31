// angular goodness goes here.
// general reference dox: https://docs.angularjs.org/tutorial/
(function() {
    var app = angular.module("angularStarterPack", ["firebase","ngRoute"]);

    app.controller("DefaultController", function($scope, $firebaseObject) {
        $scope.dummyData = lifespans;       // using $scope instead of this.
                                            // see people-list.html for why

        // No firebase yet; I don't want to hard-code my own dummy app here.
        // To set up firebase, see:
        // https://www.firebase.com/docs/web/libraries/angular/quickstart.html
    });

    app.controller("DetailController", function($scope, $firebaseObject) {
        $scope.dummyData = detailString;    // re-using 'dummyData'!?!?! yup. (thanks $scope!)
    });

    // configuring a very basic routing scheme.
    // "/#/people" = default. "/#/people/3" = detail.
    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
          when('/people', {
            templateUrl: 'app/_partials/people-list.html',      // partial views live here
            controller: 'DefaultController'
          }).
          when('/people/:personID', {
            templateUrl: 'app/_partials/person-detail.html',
            controller: 'DetailController'
          }).
          otherwise({
            redirectTo: '/people'
          });
      }]);

    // dummy data since I don't want to hook up my firebase to a boilerplate
    var lifespans = [
        { name: 'Louis Pasteur', years: '1822 — 1895' },
        { name: 'Pope Benedict IX', years: 'c.1012 – c.1056' },
        { name: 'Mohamed Bouazizi', years: '1984 – 2011' }
    ];

    var detailString = "Info about this person coming soon.";

})();
