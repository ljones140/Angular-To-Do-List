describe('ToDoListController', function() {
  beforeEach(module('ToDoList')); // creating a mock module
  var ctrl;

  describe('when using todo list', function() {
    var fakeToDoFactory, scope;

    beforeEach(function(){
      fakeToDoFactory  = jasmine.createSpyObj('fakeToDoFactory',  ['task']);


      module({
        ToDoListFactory: fakeToDoFactory
      });
    });

    beforeEach(inject(function ($q, $rootScope, $controller) {
      scope = $rootScope;
      fakeToDoFactory.task.and.returnValue($q.when( { task: true }));

      ctrl = $controller('ToDoListController');
    }));

    it('taskList calls task with show', function() {
      ctrl.taskList
      expect(fakeToDoFactory.task).toHaveBeenCalledWith('show');
    });

    it('addTask calls task with create', function() {
      ctrl.newTask = 'test task'
      ctrl.addTask
      scope.$apply();
      expect(fakeToDoFactory.task).toHaveBeenCalledWith('create', 'test task');

    });


  });
});