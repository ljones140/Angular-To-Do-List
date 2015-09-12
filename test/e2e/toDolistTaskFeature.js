describe('To Do list Tasklist', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('can record a task', function() {
    element(by.model('toDoCtrl.newTask')).sendKeys('test task')
    expect(element(by.className('task'))).toContain('test task')
  });

});