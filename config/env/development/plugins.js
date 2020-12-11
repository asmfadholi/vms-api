module.exports = ({ env }) => ({
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
