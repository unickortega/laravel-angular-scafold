export default (app) => {
    app.controller('IndexController', function($scope) {
        $scope.message = 'Hello from Index';
    });
}