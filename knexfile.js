module.exports = {
  development: {
    // complete your knexfile
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/projects.db3'
    },
    migrations: {
      directory: "./data/migrations",
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
  },
},
  testing: {
      // complete your knexfile
      client: 'sqlite3',
      useNullAsDefault: true,
      migrations: {
        directory: "./data/migrations",
      },
      connection: {
        filename: './data/projects.db3'
      },
      pool: {
        afterCreate: (conn, done) => {
          // runs after a connection is made to the sqlite engine
          conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
        },
    },
  }
};
