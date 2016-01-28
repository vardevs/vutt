'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

  select: function select(thread) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.SELECT,
      thread: thread,
      selected: !thread.active
    });
  },

  clearList: function clearList() {
    console.warn('clearList action not yet implemented...');
  },

  completeTask: function completeTask(task) {
    console.warn('completeTask action not yet implemented...');
  }

};