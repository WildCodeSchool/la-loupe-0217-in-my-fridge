import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }

});

let model = mongoose.model('Todo', todoSchema);

export default class Todo {

    create(req, res) {

        model.create(req.body,
            (err, todo) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json({
                        success: true,
                        todo: todo,
                    });
                }
            });

    }
    getAll(req, res) {
      
        model.find({}, (err, todos) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json(todos);
            }
        });
    }
}
