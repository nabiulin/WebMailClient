var app = angular.module('webmail', [])
    .config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/show/:type', {templateUrl: 'views/mails.html', controller: MailController})
        .otherwise({redirectTo: '/'});
    }
]);

