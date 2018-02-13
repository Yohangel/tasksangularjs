app.controller("appController", function appController($scope, $http) {
    //adding tasks
    $http.get('js/data.json').success(function (data) {
        $scope.tasks = data;
    });
})
//getting task id from url
app.controller("infoController", function infoController($scope, $routeParams) {
    $scope.task = $scope.tasks[$routeParams.id];
});

//creating controller for save new tasks
app.controller("addController", function addController($scope, $location) {
    $scope.textButton = "Añadir una nueva tarea";
    $scope.task = {};
    $scope.newTask = function () {
        $scope.tasks.push($scope.task);
        $location.url("/");
    }
})

//editing tasks by id
app.controller("editController", function editController($scope, $routeParams, $location) {
    $scope.textButton = "Editar tarea";
    $scope.task = $scope.tasks[$routeParams.id];
    $scope.editTask = function () {
        $scope.tasks[$routeParams.id] = $scope.task;
        $location.url("/");
    }
})

//deleting tasks by id
app.controller("removeController", function removeController($scope, $routeParams, $location) {
    $scope.task = $scope.tasks[$routeParams.id];
    $scope.removeTask = function () {
        $scope.tasks.splice($routeParams.id, 1);
        $location.url("/");
    }
})