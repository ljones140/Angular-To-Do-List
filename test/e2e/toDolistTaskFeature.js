describe('To Do list Tasklist', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  var addTaskBox = element(by.className('enter-task'));
  var task = element(by.className('task'));
  var addTaskButton = element(by.className('btn'));
  var taskList = element(by.className('task-list'));
  var doneMark = element(by.className('done-mark'));
  var activeFilter = element(by.className('show-active'));
  var doneFilter = element(by.className('show-done'));
  var allFilter = element(by.className('show-all'));
  var taskCount = element(by.className('task-count'));

  it('has a title', function() {
    addTaskBox.sendKeys('test task');
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('has a title two', function() {
    addTaskBox.sendKeys('test task');
    addTaskButton.click();
    expect(element(by.className('task')).getText()).toEqual('test task todo');
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

  it('allows task to be filtered by active', function() {
    addTaskBox.sendKeys('test task');
    addTaskButton.click();
    expect(task.getText()).toEqual('test task todo');
    doneMark.click();
    addTaskBox.sendKeys('test two');
    addTaskButton.click();
    activeFilter.click();
    var tasks = element.all(by.repeater('task in toDoCtrl.taskList'))
    expect(tasks.last().getText()).toContain('test two');
    expect(tasks.first().getText()).toContain('');
  });

  it('allows task to be filtered by complete', function() {
    addTaskBox.sendKeys('test task');
    addTaskButton.click();
    expect(task.getText()).toEqual('test task todo');
    doneMark.click();
    addTaskBox.sendKeys('test two');
    addTaskButton.click();
    doneFilter.click();
    var tasks = element.all(by.repeater('task in toDoCtrl.taskList'))
    expect(tasks.first().getText()).toContain('test task Done');
    expect(tasks.last().getText()).toContain('');
  });

  it('shows all tasks with active', function() {
    addTaskBox.sendKeys('test task');
    addTaskButton.click();
    expect(task.getText()).toEqual('test task todo');
    doneMark.click();
    addTaskBox.sendKeys('test two');
    addTaskButton.click();
    allFilter.click();
    var tasks = element.all(by.repeater('task in toDoCtrl.taskList'))
    expect(tasks.first().getText()).toContain('test task Done');
    expect(tasks.last().getText()).toContain('test two todo');
  });


  it('shows a count of tasks', function() {
    addTaskBox.sendKeys('test task');
    addTaskButton.click();
    expect(taskCount.getText()).toEqual('total tasks: 1');
    addTaskBox.sendKeys('test task 2');
    addTaskButton.click();
    expect(taskCount.getText()).toEqual('total tasks: 2');
  });

  it('removes all completed tasks', function() {
    addTaskBox.sendKeys('test task');
    addTaskButton.click();
    expect(taskCount.getText()).toEqual('total tasks: 1');
    doneMark.click();
    element(by.className('completed-remove')).click();
    expect(taskCount.getText()).toEqual('total tasks: 0');
  });



});