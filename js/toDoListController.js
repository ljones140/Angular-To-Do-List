toDoList.controller('ToDoListController', ['ToDoListFactory', function(ToDoListFactory) {

  var self = this;

  self.taskList = ToDoListFactory.task('show');

  self.addTask = function() {
    if (self.newTask) {
      ToDoListFactory.task('create', self.newTask);
      self.newTask = ('');
    };
  };

  self.deleteTask = function(task) {
    ToDoListFactory.removeTask(task)
  };

  self.markAsDone = function(task) {
    ToDoListFactory.taskComplete(task);
  };

  self.filter = function(filtertype) {
    self.filtertype = filtertype
  };

  self.checkShow = function(complete) {
    if (self.filtertype === 'active' && complete === false) {
      return true;
    } else if (self.filtertype === 'done' && complete === true) {
      return true;
    } else if (self.filtertype === 'all' || self.filtertype === undefined) {
      return true;
    };
  };

  self.removeCompleteTasks = function() {
    ToDoListFactory.removeCompleteTasks();
  };

}]);