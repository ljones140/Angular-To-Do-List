toDoList.controller('ToDoListController', ['ToDoListFactory', function(ToDoListFactory) {

  var self = this;

  self.taskList = ToDoListFactory.taskList();


}]);