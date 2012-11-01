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
     * Mark all mails as read
     */
    $scope.markRead = function() {
        angular.forEach(self.mails, function(value){
            if (value.isNew) {
                value.isNew = 0;
            }
        })
    };

    /**
     * Remove checked mails
     */
    $scope.remove = function() {
        var elements = $('#mails').find('input[type="checkbox"]:checked');
        angular.forEach(elements, function(element){
            angular.forEach(self.mails, function(mail){
                if ($(element).data('id') == mail.id) {
                    self.mails.splice(self.mails.indexOf(mail), 1);
                }
            })
        });
    };
}
