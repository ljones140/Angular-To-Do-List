describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));
  var ctrl;

  describe('when using todo list', function() {
    var fakeToDoFactory;

    beforeEach(function(){
      fakeToDoFactory  = jasmine.createSpyObj('fakeToDoFactory',  ['task']);

      module({
        ToDoListFactory: fakeToDoFactory
      });
    });

    beforeEach(inject(function ($controller) {
      fakeToDoFactory.task.and.returnValue([{task: 'test task', complete: true}]);
      ctrl = $controller('ToDoListController');
    }));

    it('taskList calls task with show', function() {
      ctrl.taskList();
      expect(fakeToDoFactory.task).toHaveBeenCalledWith('show');
      expect(ctrl.taskList()).toEqual([{task: 'test task', complete: true}]);
    });

    it('addTask calls task with create', function() {
      ctrl.newTask = 'test task'
      ctrl.addTask();
      expect(fakeToDoFactory.task).toHaveBeenCalledWith('create', 'test task');
    });

    it('calls factory delete task with task', function() {
      var testTask = {task: 'test task', complete: true}
      ctrl.deleteTask(testTask);
      expect(fakeToDoFactory.task).toHaveBeenCalledWith('delete', testTask);
    });

    it('calls task complete when mark as done called', function () {
      var testTask = {task: 'test task', complete: true}
      ctrl.markAsDone(testTask);
      expect(fakeToDoFactory.task).toHaveBeenCalledWith('update', testTask);
    });

    it('calls clear when removeCompleteTasks is called', function() {
      ctrl.removeCompleteTasks();
      expect(fakeToDoFactory.task).toHaveBeenCalledWith('clear');
    });

  });
});
