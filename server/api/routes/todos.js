import express from 'express';
import Todo from '../models/todo.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {



    var todo = new Todo();

    router.get('/', todo.getAll);
    router.post('/', todo.create);

    app.use('/todos', router);

};
