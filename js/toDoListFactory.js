toDoList.factory('ToDoListFactory', function() {

  var tasks = {}

  return {
    taskList: function() {
      return tasks;
    },
    subtract: function(x, y) {
      return x - y;
    },
    divide: function(x, y) {
      return x / y;
    },
    multiply: function(x, y) {
      return x * y;
    }
  }
});