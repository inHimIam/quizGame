(function () {
  angular.module('aJeopardyApp', ['ngRoute']);

  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: './views/home.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/', {
        templateUrl: './views/play.html',
        controller: 'catCtrl',
        controllerAs: 'vm'
      })
      .when('/create-A-game', {
        templateUrl: './views/create-A-game.html',
        controller: 'createAgameCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});
  }
// function to re-route a user after logging in//
  function run($rootScope, $location, authentication) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
      if ($location.path() === '/profile' && !authentication.isLoggedIn()) {
        $location.path('/');
      }
    });
  }

  angular.module('aJeopardyApp')
    .config(['$routeProvider', '$locationProvider', config])
    .run(['$rootScope', '$location', 'authentication', run]);
})();
