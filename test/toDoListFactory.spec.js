describe('factory: ToDoListFactory', function() {

  var toDoListFactory;

  beforeEach(module('ToDoList'));

  beforeEach(inject(function(ToDoListFactory) {
    toDoListFactory = ToDoListFactory;
  }));

  it('initialises with an empty tasklist', function() {
    expect(toDoListFactory.task('show')).toEqual([]);
  });

  it('enters task to tasklist', function() {
    toDoListFactory.task('create', 'test task');
    expect(toDoListFactory.task('show')).toEqual([{task: 'test task', complete: false}]);
  });

  it('deletes task from task list', function() {
    var newTask = 'test task'
    toDoListFactory.task('create', 'test task');
    toDoListFactory.task('delete',0);
    expect(toDoListFactory.task('show')).toEqual([]);
  });

  it('records task as done', function() {
    var newTask = 'test task'
    toDoListFactory.task('create', 'test task');
    taskToUpdate = toDoListFactory.task('show')[0]
    toDoListFactory.task('update', taskToUpdate);
    expect(toDoListFactory.task('show')).toEqual([{task: 'test task', complete: true}]);
  });

  it('records task as incomplete if complete true', function () {
    var newTask = 'test task'
    toDoListFactory.task('create', 'test task');
    taskToUpdate = toDoListFactory.task('show')[0]
    toDoListFactory.task('update', taskToUpdate);
    toDoListFactory.task('update', taskToUpdate);
    expect(toDoListFactory.task('show')).toEqual([{task: 'test task', complete: false}]);
  });

  it('removes all complete tasks', function () {
    toDoListFactory.task('create', 'test task');
    taskToUpdate = toDoListFactory.task('show')[0]
    toDoListFactory.task('update', taskToUpdate);
    toDoListFactory.task('clear');
    expect(toDoListFactory.task('show')).toEqual([]);
  });

  it('removes only complete tasks', function () {
    toDoListFactory.task('create', 'test task');
    taskToUpdate = toDoListFactory.task('show')[0]
    toDoListFactory.task('create', 'test task two');
    toDoListFactory.task('update', taskToUpdate);
    toDoListFactory.task('clear');
    expect(toDoListFactory.task('show')).toEqual([{task: 'test task two', complete: false}]);
  });

  it('thows error if invalid function called', function (){
    expect(function(){ toDoListFactory.task('invalid'); }).toThrow("invalid not valid.");
  });


});