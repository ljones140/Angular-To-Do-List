# To Do List

To Do List application created in Angular.js

## Approach

 The approach I have taken with my To Do List is to use Angular's design conventions to separate the responsibility of the controller, view and logic. To do this I have three main parts of my application that control the logic.

* index.html   
This is view and contains the mark up and binding for the ng elements.

* toDoListController.js  
This is the controller that routes the user actions on the view to the data of the task list

* ToDoListFactory.js  
This factory is responsible for the logic of the to do list. The controller passes all requests to change data on the task list to the factory which will then carry out the task.


## Testing

The application has been unit tested with Karma and end to end feature tested with Protractor. I am particularly proud of the unit tests as in the controller tests the factory is stubbed out and in the Factory test the controller is stubbed out.

## Installation Guide

clone the repo

```
bower install
npm install
```

In order to feature test with protractor
```
http-server & webdriver-manager start
```
then to run the tests

```
protractor test/e2e/conf.js
```
Karma unit tests
```
karma start test/karma.conf.js
```

User stories:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice

As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```
