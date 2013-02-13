var INBOX_MAILS = 'inbox';
var TRASH_MAILS = 'trash';
var IS_NEW_MAIL = 1;

function AppController($scope, $routeParams) {
    var type = $routeParams.type;
    self.mails = mailData;
    if (type && mailData[type]) {
        self.mails = mailData[type];
    }
    $scope.mails = self.mails;
    $scope.type = type;

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
        angular.forEach(self.mails, function(value) {
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
        if (elements.length > 0) {
            angular.forEach(elements, function(element) {
                angular.forEach(self.mails, function(mail) {
                    if ($(element).data('id') == mail.id) {
                        self.mails.splice(self.mails.indexOf(mail), 1);
                        // add removed message to trash
                        if (mail.isNew && mail.isNew == IS_NEW_MAIL) {
                            mail.isNew = 0;
                        }
                        mailData[TRASH_MAILS].push(mail);
                    }
                })
            });
        }
    };


   /**
    * Send message
    */
    $scope.send = function() {
        alert('The message has been sent');
    };

    /**
     * Get count of unread mails
     * @return {Number}
     */
    $scope.unread = function() {
        var count = 0;
        if (self.mails[INBOX_MAILS]) {
            angular.forEach(self.mails[INBOX_MAILS], function(value) {
                count += value.isNew == IS_NEW_MAIL ? 1 : 0;
            });
        }
        return count;
    };

    /**
     * Get checked items
     * @return {*}
     */
    self.getChecked = function() {
        var elements = $('#mails').find('input[type="checkbox"]:checked');
        if (!elements) {
            return {};
        }
        return elements
    }
}