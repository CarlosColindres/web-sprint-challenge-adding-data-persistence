// build your `Task` model here

const db = require('../../data/dbConfig')

module.exports = {
    getAll() {
        return db('tasks as t').join('projects as p', 't.project_id', 'p.id').select('p.name', 'p.description', 'description')
    },
    insert(task) {
        return db('taks')
            .insert(task)
            .then(([id]) => {
                return db('tasks').where('task_id', id).first()
            })
    }
}