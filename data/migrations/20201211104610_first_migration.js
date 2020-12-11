
exports.up = function(knex) {
  return knex.schema.createTable('projects', table => {
      table.increments()
      table.string('name', 30).notNullable()
      table.string('description', 128)
      table.boolean('completed').notNullable().defaultTo(0)
  }).createTable('resources', table => {
      table.increments()
      table.string('name', 30).notNullable().unique()
      table.string('description', 128)
  }).createTable('tasks', table => {
      table.increments()
      table.string('description', 128).notNullable()
      table.string('notes', 128)
      table.boolean('completed').defaultTo(0)

      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
        
  }).createTable('projects_resources', table => {
    table.increments()

    table.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')
    .onUpdate('RESTRICT')
    .onDelete('RESTRICT')

    table.integer('resource_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('resources')
    .onUpdate('RESTRICT')
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
