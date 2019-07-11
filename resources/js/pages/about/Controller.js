export default (app) => {
    app.controller('AboutController', function($scope) {
        $scope.message = 'Hello from About';
    });
}