app.controller('MesssageForm', function($scope, HttpService, focus) {
  $scope.placeholder = "Digite aqui sua mensagem ...";
  $scope.form_action_class= "hide";

  $scope.textChange = function(){
    $scope.form_action_class = ($scope.text_message) ? "show" : "hide";
  }

  $scope.clearMessage = function(){
    $scope.text_message = "";
    $scope.textChange();
    focus('TextAreaMesssageForm');
  }

  $scope.setMmessage = function(text){
    return {
                id: Math.random(),
                user: $scope.user,
                message: {
                  time: new Date().getTime(),
                  alreadyRead: false,
                  message: text
                }
              }
  }

  $scope.sendMessage = function(){
    var message = $scope.setMmessage($scope.text_message);
    $scope.talks.push(message);
    $scope.clearMessage();
    focus('TextAreaMesssageForm');
  }

});
