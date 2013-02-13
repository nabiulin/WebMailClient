function MailController($scope, $routeParams) {
    var type = $routeParams.type;
    var mailId = $routeParams.mailId;

    if (mailData[type]) {
        var keepGoing = true;
        if (keepGoing) {
            angular.forEach(mailData[type], function(mail) {
                if (mail.id == mailId) {
                    $scope.mail = mail;
                    keepGoing = false;
                }
            });
        }
    }
}