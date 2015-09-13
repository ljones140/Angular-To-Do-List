describe('ToDoListController', function () {

  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty tasklist', function() {
    expect(ctrl.taskList).toEqual([]);
  })

  it('enters task to tasklist', function() {
    ctrl.newTask = 'test task'
    ctrl.addTask();
    expect(ctrl.taskList).toEqual([{task: 'test task', complete: false, active: false}])
  })

  it('deletes task from task list', function() {
    ctrl.newTask = 'test task'
    ctrl.addTask();
    ctrl.deleteTask(0);
    expect(ctrl.taskList).toEqual([]);
  } )

});