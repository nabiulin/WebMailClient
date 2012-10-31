/**
 * Inbox controller
 * @constructor
 */
function MailController($scope, $routeParams) {
    var self = this;
    var type = $routeParams.type;
    if (type && mails[type]) {
        self.mails = mails[type];
    }
    $scope.mails = self.mails;

    /**
     * Mark all letters as read
     */
    $scope.markRead = function() {
        angular.forEach(self.mails, function(value){
            value.isNew = 0;
        })
    };
}
