toDoList.controller('ToDoListController', ['ToDoListFactory', function(ToDoListFactory) {

  var self = this;

  self.taskList = ToDoListFactory.taskList();

  self.addTask = function() {
    if (self.newTask) {
      ToDoListFactory.enterTask(self.newTask);
      self.newTask = ('');
    };
  };

  self.deleteTask = function(task) {
    ToDoListFactory.removeTask(task)
  };

}]);