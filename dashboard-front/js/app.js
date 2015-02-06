App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});



App.IndexRoute = Ember.Route.extend({
  model: function() {
    //return ['red', 'yellow', 'blue' , 'green'];
    return Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls').then(function(data) {
      return data.splice(0, 3);
    });
  }
});



/*


var boardListMainSampleData = {
   "product" : {
      "id" : "",
      "name" : "",
      "startDate" : "",
      "endDate" : "",
      "progress" : "",
      "managed" : [
            {
            "name" : "",
            "url" : ""
         } 
        ],
       "developer" : [
            {
               "id" : "",
               "name" : "",
               "grade" : {
                  "id" : "",
                  "name" : ""
               }
            }
         ],
      "description" : ""
   }
};

*/