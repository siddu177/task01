
var app = angular.module('taskApp', ['ngRoute', 'ngMaterial']);
    app.config(
        function( $routeProvider ){
            $routeProvider
            // route for the home page
                .when('/', {
                    templateUrl : 'app/views/homePage.html',
                    controller  : 'HomeController as ctrl'
                })
                // route for the about page
                .when('/seeAll', {
                    templateUrl : 'app/views/seeAll.html',
                    controller  : 'SeeAllController as ctrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    );
    app.controller('AppController', appController);
    function appController($scope, $mdBottomSheet) {
        $scope.showListBottomSheet = function ($event) {
            $mdBottomSheet.show({
                templateUrl: 'app/views/options-list-html.html',
                controller: 'ListOptionsController as ctrl',
                targetEvent: $event
            }).then(function () {

            }).catch(function (error) {

            });
        };
        $('html').keyup(function(e){
            if(e.keyCode === 34){
                    $scope.showListBottomSheet();
            }
        });
    }