angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Casa',
    latitude: 2.783,
    longitude: 4.234
  }, {
    id: 1,
    name: 'Treball',
    latitude: 2.783,
    longitude: 4.234
  }, {
    id: 2,
    name: 'Casa Marina',
    latitude: 2.783,
    longitude: 4.234
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
