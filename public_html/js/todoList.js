'use strict';

/*Déclaration de l'application demoApp*/

var demoApp = angular.module('demoApp',[
    //dépendance du module
    'todoList'
]);

/*Déclaration du module todoList*/

var todoList = angular.module('todoList',[]);

/*Contrôleur de l'appli "Todo List"*/

todoList.controller('todoCtrl',['$scope',
    function ($scope) {
        //on initialise les todos avec un tableau vide : []
        //je fais correspondre todos avec $scope.todos pour ne pas réécrire $scope partout
        var todos = $scope.todos = [];
    

    // Ajouter un todo
    $scope.addTodo = function() {
        //.trim() permet de supprimer les espaces inutiles en début et fin de string
        var newTodo = $scope.newTodo.trim();
        if (!newTodo.length){ // éviter les todos vides
            return;
        }
        todos.push({ //on ajoute le todo au tableau des todos
            title: newTodo,
            completed: false
        });
        //réinitialisation de la variable newTodo
        $scope.newTodo= '';
    };

    //enlever un todo
    $scope.removeTodo = function (todo) {
        todos.splice(todos.indexOf(todo), 1);
    };

    //Cocher ou décocher tous les todos
    $scope.markAll = function (completed) {
        todos.forEach(function (todo){
            todo.completed = !completed;
        });
    };

    //enlever tous les todos cochés
    $scope.clearCompletedTodos = function () {
        $scope.todos = todos = todos.filter(function (todo){
            return !todo.completed;
        });
    };
  }
]);