toDoList.controller('ToDoListController', ['ToDoListFactory', function(ToDoListFactory) {

  var self = this;

  self.taskList = function() {
    return ToDoListFactory.task('show');
  };

  self.taskListView = self.taskList();

  self.addTask = function() {
    if (self.newTask) {
      ToDoListFactory.task('create', self.newTask);
      self.newTask = ('');
    };
  };

  self.deleteTask = function(task) {
    ToDoListFactory.task('delete', task)
  };

  self.markAsDone = function(task) {
    ToDoListFactory.task('update', task);
  };

  self.filter = function(filtertype) {
    self.filtertype = filtertype
  };

  self.removeCompleteTasks = function() {
    ToDoListFactory.task('clear');
  };

}]);