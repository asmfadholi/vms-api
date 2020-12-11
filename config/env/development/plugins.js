module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'mochammad.fadholi.st@gamil.com',
      defaultReplyTo: 'mochammad.fadholi.st@gamil.com',
    },
  },
});
