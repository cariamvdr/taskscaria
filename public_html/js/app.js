var app = angular.module('app',['ngRoute']);
app.conf=function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      templateUrl: 'views/home.html' 
    })
    .when('/tasks', { 
      templateUrl: 'views/tasks.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
}
app.config(app.conf);