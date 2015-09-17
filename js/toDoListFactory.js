toDoList.factory('ToDoListFactory', function() {

  var self = this;

  var tasks = []

  this.show  = function() {
    return tasks;
  }

  this.create = function(task) {
    tasks.push( { task: task, complete: false } );
  }

  this.delete = function(task) {
    var index = tasks.indexOf(task);
    tasks.splice(index, 1)
  }

  this.update = function(task) {
    (task.complete === false) ? task.complete = true : task.complete = false;
  }

  this.clear  = function() {
    for (var i = 0; i  < tasks.length; i++) {
      if (tasks[i].complete === true) {
        tasks.splice(i, 1);
      };
    };
  }

  function task(operation, taskDescription) {
    if (self[operation]) {
      return self[operation](taskDescription)
    }
    else {
      throw operation + " not valid."
    }
  }

  return {
    task: task
  }
});