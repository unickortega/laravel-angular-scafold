
export default app => {

    const controller = require('./Controller')
    controller.default(app)

    return {
        path: '/about',
        template: require('./index.html'),
        controller: 'AboutController'
    }
}