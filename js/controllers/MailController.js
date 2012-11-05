var INBOX_MAILS = 'inbox';
var IS_NEW_MAIL = 1;
/**
 * Inbox controller
 * @constructor
 */
function MailController($scope, $routeParams) {
    var self = this;
    var type = $routeParams.type;
    self.mails = mails;
    if (type && mails[type]) {
        self.mails = mails[type];
    }
    $scope.mails = self.mails;

    /**
     * Mark button as disabled
     * @return {String}
     */
    $scope.disableButton = function() {
        return type == INBOX_MAILS ? '' : 'disabled';
    };

    /**
     * Mark all mails as read
     */
    $scope.markRead = function() {
        angular.forEach(self.mails, function(value){
            if (value.isNew) {
                value.isNew = 0;
            }
        });
        $scope.unread = 0;
    };

    /**
     * Remove checked mails
     */
    $scope.remove = function() {
        var elements = self.getChecked();
        if (elements.length == 0) {
            self.mails.splice(0, self.mails.length);
        } else {
            angular.forEach(elements, function(element){
                angular.forEach(self.mails, function(mail){
                    if ($(element).data('id') == mail.id) {
                        self.mails.splice(self.mails.indexOf(mail), 1);
                    }
                })
            });
        }
    };

    /**
     * Get count of unread mails
     * @return {Number}
     */
    $scope.unread = function() {
        var count = 0;
        if (self.mails[INBOX_MAILS]) {
            angular.forEach(self.mails[INBOX_MAILS], function(value){
                 count += value.isNew == IS_NEW_MAIL ? 1 : 0;
            });
        }
        return count;
    };
}

MailController.prototype = {
    /**
     * Get checked items
     * @return {*}
     */
    getChecked: function() {
        var elements = $('#mails').find('input[type="checkbox"]:checked');
        if (!elements) {
            return {};
        }
        return elements
    }
}
