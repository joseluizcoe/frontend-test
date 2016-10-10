app.controller('MessageListCtrl', function($scope, HttpService) {

    $scope.glued = true;

    $scope.css_message = function(user){
      return user.id == $scope.user.id ? 'you' : 'not-you';
    }

    $scope.addTalk = function(talk) {
      $scope.talks.push(talk);
    }

    $scope.loadTalks = function() {
      HttpService.getTalks()
         .then(function(response) {
           for (x=0; x<response.talkMessages.length; x++){
             $scope.addTalk(response.talkMessages[x]);
           }
         });
    };
    $scope.loadTalks();
  }
);
