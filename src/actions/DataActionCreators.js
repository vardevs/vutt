var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

  select: function(thread) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.SELECT,
      thread: thread,
      selected: !thread.active
    });
  },

  clearList: function() {
    console.warn('clearList action not yet implemented...');
  },

  completeTask: function(task) {
    console.warn('completeTask action not yet implemented...');
  }

};
