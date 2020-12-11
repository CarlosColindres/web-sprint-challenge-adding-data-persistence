// build your `Task` model here

const db = require('../../data/dbConfig')

module.exports = {
    getAll() {
        return db('tasks as t').join('projects as p', 't.projects_id', 'p.project_id').select('p.project_name', 'p.project_description', 'task_description')
    },
    insert(task) {
        return db('taks')
            .insert(task)
            .then(([id]) => {
                return db('tasks').where('task_id', id).first()
            })
    }
}