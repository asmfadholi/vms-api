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
  // email: {
  //   provider: 'sendgrid',
  //   providerOptions: {
  //     apiKey: env('SENDGRID_API_KEY'),
  //   },
  //   settings: {
  //     defaultFrom: 'no-reply@outing.id',
  //     defaultReplyTo: 'no-reply@outing.id',
  //   },
  // },
  email: {
    provider: 'mandrill',
    providerOptions: {
      mandrill_api_key: env('MANDRILL_API_KEY'),
      mandrill_default_replyto: 'no-reply@outing.id',
      mandrill_default_from_email: 'no-reply@outing.id',
    },
    // settings: {
    //   defaultFrom: 'no-reply@outing.id',
    //   defaultReplyTo: 'no-reply@outing.id',
    // },
  },

});
