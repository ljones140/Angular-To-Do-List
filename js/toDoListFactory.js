toDoList.factory('ToDoListFactory', function() {

  var tasks = []

  return {
    taskList: function() {
      return tasks;
    },
    enterTask: function(task) {
      tasks.push({task: task, complete: false, active: false});
      console.log(task);
    }
  }
});