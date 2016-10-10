app.service('HttpService', function($http){
    return {
      url : '/static/json/talk.json',
      talks: [],
      getTalks: function(){
        return $http.get(this.url)
          .then(function (response) {
           this.talks = response.data;
           return response.data;
          });
      },
    }
});
