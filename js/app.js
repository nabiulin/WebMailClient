var app = angular.module('webmail', [])
    .config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/show/:type', {templateUrl: 'views/mails.html', controller: MailController})
        .when('/create', {templateUrl: 'views/mail.html', controller: MailController})
        .otherwise({redirectTo: '/'});
    }
]);

