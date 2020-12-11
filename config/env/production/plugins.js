module.exports = ({ env }) => ({
  upload: {
      provider: 'google-cloud-storage',
      providerOptions: {
          bucketName: 'storage-vms-bucket',
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
      defaultFrom: 'mochammad.fadholi.st@gmail.com',
      defaultReplyTo: 'mochammad.fadholi.st@gmail.com',
    },
  },
});
