
export default app => {

    const controller = require('./Controller')
    controller.default(app)

    return {
        path: '/',
        template: require('./index.html'),
        controller: 'IndexController'
    }
}