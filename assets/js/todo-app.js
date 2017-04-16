'use strict';
var todoApp = angular.module('todoApp', []);
todoApp.controller('TodoCtrl', ['$scope', '$rootScope', 'TodoService',
  function ($scope, $rootScope, TodoService) {
    $scope.formData = {};
    $scope.todos = [];
    TodoService.getTodos().then(function (response) {
      console.log(response);
      $scope.todos = response.data;
    })
    $scope.addTodo = function () {
      console.log($scope.formData);
      TodoService.addTodo($scope.formData).then(function (response) {
        console.log(response);
        $scope.todos.push(response.data)
        $scope.formData = {};
      })
    }
    $scope.removeTodo = function (todo) {
      console.log(todo);
      TodoService.removeTodo(todo).then(function (response) {
        $scope.todos.splice($scope.todos.indexOf(todo), 1)
        console.log(response);
      })
    }
  }])

todoApp.service('TodoService', function ($http, $q) {
  return {
    'getTodos': function () {
      var defer = $q.defer();
      $http.get('/todo').then(function (resp) {
        defer.resolve(resp);
      }, function (err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addTodo': function (todo) {
      console.log(todo);
      var defer = $q.defer();
      $http.post('/todo', todo).then(function (resp) {
        defer.resolve(resp);
      }, function (err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeTodo': function (todo) {
      console.log(todo);
      var defer = $q.defer();
      $http.delete('/todo/' + todo.id, todo).then(function (resp) {
        defer.resolve(resp);
      }, function (err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }
})
