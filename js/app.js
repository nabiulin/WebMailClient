var app = angular.module('webmail', [])
    .config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/show/:type', {templateUrl: 'views/mails.html', controller: AppController})
        .when('/create', {templateUrl: 'views/new.html', controller: AppController})
        .when('/view/:type/:mailId', {templateUrl: 'views/view.html', controller: MailController})
        .otherwise({redirectTo: '/show/inbox'});
    }
]);