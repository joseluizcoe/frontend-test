app.controller('ChatBox', function($scope, HttpService) {
  $scope.talks = [];
  $scope.box_class = "";
  $scope.user = {
                  id: 9483484,
                  perfilId: 1,
                  name: "Nome do Candidato"
                };

  $scope.minimize = function() {
    $scope.box_class = "box-closed";
  }

  $scope.resize = function() {
    $scope.box_class = "";
  }

  $scope.close = function(){
    $scope.box_class = "hide";
  }

});
