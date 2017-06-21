(function() {
  angular.module('aJeopardyApp')
  .controller('landingCtrl', landingCtrl);
  function landingCtrl($scope){
    $scope.optionsArray = 
        [
            {choice: '', explain: ''},
            {choice: '', explain: ''},
            {choice: '', explain: ''},
            {choice: '', explain: ''}
        ]
        }
})();
