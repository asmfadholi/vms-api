module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: env('API_URL', '/'),
  // admin: {
  //   url: '/',
  //   auth: {
  //     secret: env('ADMIN_JWT_SECRET', '370ca4b48501bf329d7b6aad73f1a2ff'),
  //   },
  // },
});
