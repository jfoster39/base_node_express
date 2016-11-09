module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'rest_client_test'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'example'
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};
