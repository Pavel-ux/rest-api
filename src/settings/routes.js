module.exports = app => {
    const users = require('../controllers/users')

    app
        .route('/api/users')
        .get(users.getAllUsers)
    
    app
        .route('/api/auth/signup')
        .post(users.signup)

    app
        .route('/api/auth/signin')
        .get(users.signin)
}