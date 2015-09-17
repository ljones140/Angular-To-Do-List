// describe('ToDoListController', function () {

//   beforeEach(module('ToDoList'));

//   var ctrl;

//   var fakeToDoFactory, scope;

//   // beforeEach(function() {
//   //   fakeToDoFactory  = jasmine.createSpyObj('fakeToDoFactory',  ['task']);

//   //    module({
//   //       ToDoFactory: fakeToDoFactory
//   //     });

//   // });



//  beforeEach(inject(function ($q, $rootScope, $controller) {
//     scope = $rootScope;
//     fakeToDoFactory.task.and.returnValue($q.when( { task: true }));
//     ctrl = $controller('ToDoListController');
//   }));

//   beforeEach(function() {
//     spyOn(scope, 'ToDoFactory');
//   });

//   // beforeEach(inject(function($controller) {
//   //   ctrl = $controller('ToDoListController');
//   // }));

//   it('calls task with argument show', function() {
//     // scope.$apply();
//     // expect(ctrl.taskList).toEqual(true);
//     expect($scope.task).toHaveBeenCalled();
//   });

//   it('enters task to tasklist', function() {
//     ctrl.newTask = 'test task'
//     ctrl.addTask();
//     expect(ctrl.taskList).toEqual([{task: 'test task', complete: false}]);
//   });

//   it('deletes task from task list', function() {
//     ctrl.newTask = 'test task'
//     ctrl.addTask();
//     ctrl.deleteTask(0);
//     expect(ctrl.taskList).toEqual([]);
//   });

//   it('records task as done', function() {
//     ctrl.newTask = 'test task'
//     ctrl.addTask();
//     ctrl.markAsDone(ctrl.taskList[0]);
//     expect(ctrl.taskList[0].complete).toEqual(true);
//   });

//   it('records task as incomplete if complete true', function () {
//     ctrl.newTask = 'test task'
//     ctrl.addTask();
//     ctrl.markAsDone(ctrl.taskList[0]);
//     ctrl.markAsDone(ctrl.taskList[0]);
//     expect(ctrl.taskList[0].complete).toEqual(false);
//   });

//   it('removes all complete tasks', function () {
//     ctrl.newTask = 'test task'
//     ctrl.addTask();
//     ctrl.markAsDone(ctrl.taskList[0]);
//     ctrl.removeCompleteTasks();
//     expect(ctrl.taskList).toEqual([]);
//   });

//   it('removes only complete tasks', function () {
//     ctrl.newTask = 'test task'
//     ctrl.addTask();
//     ctrl.newTask = 'test task2'
//     ctrl.addTask();
//     ctrl.markAsDone(ctrl.taskList[0]);
//     ctrl.removeCompleteTasks();
//     expect(ctrl.taskList).toEqual([{task: 'test task2', complete: false}]);
//   });


// });