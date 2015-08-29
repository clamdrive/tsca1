angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {
        'use strict';
    })

    .controller('ChatsCtrl', function ($scope, Chats) {
        'use strict';
        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        'use strict';
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function ($scope) {
        'use strict';
        $scope.settings = {
            enableFriends: true
        };
    });
