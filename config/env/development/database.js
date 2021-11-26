module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST'),
        database: env('DATABASE_NAME'),
        port: env('DATABASE_PORT'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        // ssl: {
        //   rejectUnauthorized: false,
        // },
        // ssl: {
        //   ca: '../../../ca-certificate.crt',
        // },
      },
      options: {

      },
    },
  },
});
