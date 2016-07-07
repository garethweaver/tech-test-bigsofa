var app = angular.module('app', [require('angular-resource')]);
app
  .controller('MainController', ['$scope','$http', function($scope,$http) {
    // Fetch json from gitHub API
    // Note - Played around with calling this in revealIssues() but the http request delay too noticeable.
    //        Shame because user could load page and click later (would not get accurate representation of latest issues).
    $http.get("https://api.github.com/repos/twbs/bootstrap/issues?state=open&page=1&per_page=5")
      .success(function(data) {
        $scope.issues = data;
    });
    // Reveal button && Hide the list of issues
    $scope.revealButton = false;
    $scope.issueList = false;
    // On button click
    $scope.revealIssues = function(){
      // Hide button && reveal list
      $scope.revealButton = !$scope.revealButton;
      $scope.issueList = !$scope.issueList;
    };
}]);
