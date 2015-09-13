toDoList.factory('ToDoListFactory', function() {

  var tasks = []

  return {
    taskList: function() {
      return tasks;
    },
    enterTask: function(task) {
      tasks.push( { task: task, complete: false } );
    },
    removeTask: function(task) {
      var index = tasks.indexOf(task);
      tasks.splice(index, 1)
    },
    taskComplete: function(task) {
      (task.complete === false) ? task.complete = true : task.complete = false;
    },
    removeCompleteTasks: function() {
      for (var i = 0; i  < tasks.length; i++) {
        if (tasks[i].complete === true) {
          tasks.splice(i, 1);
        };
      };
    }
  }
});