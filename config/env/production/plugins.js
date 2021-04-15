module.exports = ({ env }) => ({
  upload: {
      provider: 'google-cloud-storage',
      providerOptions: {
          bucketName: env('BUCKET_NAME'),
          publicFiles: false,
          uniform: false,
          basePath: '',
      },
  },

  email: {
    provider: 'smtp',
    providerOptions: {
      host: env('SMTP_HOST'), //SMTP Host
      port: env('SMTP_PORT')   , //SMTP Port
      secure: true,
      username: env('SMTP_USERNAME'),
      password: env('SMTP_PASSWORD'),
      // rejectUnauthorized: true,
      requireTLS: true,
      connectionTimeout: 1,
    },
    settings: {
      from: env('EMAIL_FROM'),
      replyTo: env('EMAIL_REPLY_TO'),
    },
  },

});
