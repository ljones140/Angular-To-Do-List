describe('ToDoListController', function () {

  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty tasklist', function() {
    expect(ctrl.taskList).toEqual([]);
  });

  it('enters task to tasklist', function() {
    ctrl.newTask = 'test task'
    ctrl.addTask();
    expect(ctrl.taskList).toEqual([{task: 'test task', complete: false}])
  });

  it('deletes task from task list', function() {
    ctrl.newTask = 'test task'
    ctrl.addTask();
    ctrl.deleteTask(0);
    expect(ctrl.taskList).toEqual([]);
  });

  it('records task as done', function() {
    ctrl.newTask = 'test task'
    ctrl.addTask();
    ctrl.markAsDone(ctrl.taskList[0]);
    expect(ctrl.taskList[0].complete).toEqual(true);
  });

  it('records task as incomplete if complete true', function () {
    ctrl.newTask = 'test task'
    ctrl.addTask();
    ctrl.markAsDone(ctrl.taskList[0]);
    ctrl.markAsDone(ctrl.taskList[0]);
    expect(ctrl.taskList[0].complete).toEqual(false);
  });

  it('removes all complete tasks', function () {
    ctrl.newTask = 'test task'
    ctrl.addTask();
    ctrl.markAsDone(ctrl.taskList[0]);
    ctrl.removeCompleteTasks();
    expect(ctrl.taskList).toEqual([]);
  });

  it('removes only complete tasks', function () {
    ctrl.newTask = 'test task'
    ctrl.addTask();
    ctrl.newTask = 'test task2'
    ctrl.addTask();
    ctrl.markAsDone(ctrl.taskList[0]);
    ctrl.removeCompleteTasks();
    expect(ctrl.taskList).toEqual([{task: 'test task2', complete: false}]);
  });


});