//creating app module
var app = angular.module("app", []);
//routes starting
app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "templates/index.html"
    })
        .when("/add", {
            title: 'Agregar tarea',
            templateUrl: "templates/add.html",
            controller: "addController"
        })
        .when("/edit/:id", {
            title: 'Editar tarea',
            templateUrl: "templates/edit.html",
            controller: "editController"
        })
        .when("/remove/:id", {
            title: 'Eliminar tarea',
            templateUrl: "templates/remove.html",
            controller: "removeController"
        })
        .otherwise({ redirectTo: "/" })
})