var app = angular.module('app',['ngRoute']);
app.conf=function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      templateUrl: 'views/home.html' 
    })
    .when('/todolist', { 
      templateUrl: 'views/todolist.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
}
app.config(app.conf);