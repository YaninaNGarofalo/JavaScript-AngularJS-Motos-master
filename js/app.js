var app = angular.module('aplicacionMotos', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'vistas/modelos.html',
        controller:'ctrl',
        controllerAs:'ctrl'
    })
    .when('/modelos', {
        templateUrl:'vistas/modelos.html',
        controller:'ctrl',
        controllerAs:'ctrl'
    })
    .when('/ficha', {
        templateUrl:'vistas/ficha.html',
        controller:'ctrl',
        controllerAs:'ctrl'
    })
   .otherwise({ reditrectTo : "/" });
})