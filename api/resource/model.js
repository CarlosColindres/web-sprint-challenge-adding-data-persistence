// build your `Resource` model here

const db = require('../../data/dbConfig')

module.exports = {
    getAll() {
        return db('resources')
    },
    insert(resource) {
        return db('resources').insert(resource, 'id')
            .then(([id]) => db('resources').where('id', id).first())
    }
}