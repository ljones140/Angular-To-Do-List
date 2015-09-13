describe('To Do list Tasklist', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  var addTaskBox = element(by.className('enter-task'));
  var task = element(by.className('task'));
  var addTaskButton = element(by.className('btn'));

  it('has a title', function() {
    addTaskBox.sendKeys('test task');
    expect(browser.getTitle()).toEqual('To Do List');
  });

   it('has a title two', function() {
    addTaskBox.sendKeys('test task');
    addTaskButton.click();
    expect(task.getText()).toEqual('test task');
  });

});