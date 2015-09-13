describe('To Do list Tasklist', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  var addTaskBox = element(by.className('enter-task'));
  var task = element(by.className('task'));
  var addTaskButton = element(by.className('btn'));
  var taskList = element(by.className('task-list'));
  var doneMark = element(by.className('done-mark'));
  // var completeCount = element(by.className('complete-tasks'));

  it('has a title', function() {
    addTaskBox.sendKeys('test task');
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('has a title two', function() {
    addTaskBox.sendKeys('test task');
    addTaskButton.click();
    expect(task.getText()).toEqual('test task todo');
  });

  it('allows deletion of task', function() {
    addTaskBox.sendKeys('test task');
    addTaskButton.click();
    element(by.className('delete-btn')).click();
    expect(taskList.getText()).toEqual('');
  });

  it('allows task to be marked as done', function() {
    addTaskBox.sendKeys('test task');
    addTaskButton.click();
    expect(task.getText()).toEqual('test task todo');
    doneMark.click();
    expect(task.getText()).toEqual('test task Done');

  });

  it('allows task to unmarked', function() {
    addTaskBox.sendKeys('test task');
    addTaskButton.click();
    expect(task.getText()).toEqual('test task todo');
    doneMark.click();
    expect(task.getText()).toEqual('test task Done');
    doneMark.click();
    expect(task.getText()).toEqual('test task todo');

  });





});