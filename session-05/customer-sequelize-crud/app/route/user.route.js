module.exports = function(app) {
 
    const users = require('../controller/user.controller.js');
    const auth = require('../route/auth.js');
    // Create a new User
    app.post('/api/users', auth,users.create);
 
    // Retrieve all User
    app.get('/api/users', auth, users.findAll);
 
    // Retrieve a single User by Id
    app.get('/api/users/:id', auth, users.findOne);
 
    // Update a User with Id
    app.put('/api/users/:id', auth, users.update);
 
    // Delete a User with Id
    app.delete('/api/users/:id', auth, users.delete);
}