toDoList.controller('ToDoListController', ['ToDoListFactory', function(ToDoListFactory) {

  var self = this;

  self.taskList = ToDoListFactory.taskList();

  self.addTask = function() {
    ToDoListFactory.enterTask(self.newTask);
  };

}]);