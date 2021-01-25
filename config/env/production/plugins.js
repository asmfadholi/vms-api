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
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'info@outing.id',
      defaultReplyTo: 'info@outing.id',
    },
  },
});
