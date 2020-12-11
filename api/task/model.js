// build your `Task` model here

const db = require('../../data/dbConfig')

module.exports = {
    getAll() {
      return db("tasks as t")
        .join("projects as p", "t.project_id", "p.id")
        .select(
            "p.name as project_name",
            "p.description as project_description",
            "t.description",'t.notes', 't.completed'
          )
        .then((res) =>
          res.map((item) => {
            return { ...item, completed: item.completed ? true : false };
          })
        );
    },
    insert(task) {
      return db("tasks")
        .insert(task, "id")
        .then((id) => {
          return db("tasks")
            .where("id", id)
            .first()
            .then((res) => {
              return { ...res, completed: res.completed ? true : false };
            });
        });
    },
  };