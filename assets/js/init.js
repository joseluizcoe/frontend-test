window.onload = function(){
  var template = '<div type="text/ng-template" id="chatCatho" ng-app="chatCatho">\
    <div class="box box-chat {{ box_class }}" ng-controller="ChatBox">\
      <div class="box-header">\
        <h1 class="box-title">Vaga: Desenvolvedor Front-end</h1>\
        <div class="box-actions">\
          <a href="#" class="resize"   ng-click="minimize()"><i class="icon minimize"></i></a>\
          <a href="#" class="maximize" ng-click="resize()"><i class="icon resize"></i></a>\
          <a href="#" class="close"    ng-click="close()"><i class="icon close"></i></a>\
        </div>\
      </div>\
      <div class="box-body" ng-controller="MessageListCtrl" scroll-glue>\
        <span ng-repeat="talk in talks track by $index">\
          <div ng-if="($index==0) || ($index > 0 && talks[$index-1].user.id != talk.user.id)">\
            <span class="break" />\
            <img src="/static/imgs/user-{{talk.user.id}}.jpg" alt="" class="avatar {{ css_message(talk.user) }}">\
          </div>\
          <div class="chat-msg {{ css_message(talk.user) }}">\
            <div class="text">{{ talk.message.message }}</div>\
            <span class="status" ng-if="talk.user.id == user.id && talk.message.alreadyRead"><i class="sent icon"></i></span>\
            <span class="status" ng-if="talk.user.id == user.id && !talk.message.alreadyRead"><i class="sending icon"></i></span>\
            <div class="about">\
              <span class="username">{{ talk.user.name }}</span>\
              <strong class="companyname" ng-if="talk.company.name">{{ talk.company.name }}</strong>\
              <span class="time">enviado as {{ talk.message.time | fromNow }}</span>\
            </div>\
          </div>\
        </span>\
      </div>\
      <div class="msg-form" ng-controller="MesssageForm">\
        <div class="actions {{ form_action_class }}">\
          <a ng-click="sendMessage()" class="send"><i class="icon send"></i></a>\
          <a ng-click="clearMessage()" class="clear"><i class="icon trash"></i></a>\
        </div>\
        <textarea id="TextAreaMesssageForm" ng-attr-placeholder="{{ placeholder }}" ng-change="textChange()" ng-model="text_message" rows="4" cols="40">{{ text_message }}</textarea>\
      </div>\
    </div>\
  </div>';


  function loadjs(path){
      var file = document.createElement('script');
      file.setAttribute("type","text/javascript");
      file.setAttribute("src", path);
      document.body.appendChild(file);
  }

  setTimeout( function(){
    var element = document.getElementById("chatCatho");
    element.innerHTML = template;
    loadjs("/static/js/all.js");
  }, 300);
}
