export default (app) => {
    let routes = require('./routes')
    routes = routes.default(app)

    app.config(function($routeProvider, $locationProvider) {

        for(const route in routes){
            $routeProvider
            .when(routes[route].path, {
            template : routes[route].template,
            controller : routes[route].controller
            })
        }
        
        $routeProvider.otherwise({redirectTo: '/'});
    
        $locationProvider.html5Mode(true);
    });
}