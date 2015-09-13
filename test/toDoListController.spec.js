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
    ctrl.addTask('test task');
    expect(ctrl.taskList).toEqual([{task: 'test task', complete: false, active: false}])
  })


});