
exports.up = function(knex) {
  return knex.schema.createTable('projects', table => {
      table.increments()
      table.string('name', 30).notNullable()
      table.string('description', 128)
      table.boolean('completed').notNullable().defaultTo(false)
  }).createTable('resources', table => {
      table.increments()
      table.string('name', 30).notNullable().unique()
      table.string('description', 128)
  }).createTable('tasks', table => {
      table.increments()
      table.string('description', 128).notNullable()
      table.string('notes', 128)
      table.boolean('completed').defaultTo(false)

      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
        
  }).createTable('projects_resources', table => {
    table.increments()

    table.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')

    table.integer('resource_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('resources')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')
  })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
