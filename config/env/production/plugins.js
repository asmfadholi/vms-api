module.exports = {
  upload: {
      provider: 'google-cloud-storage',
      providerOptions: {
          bucketName: 'storage-vms-bucket',
          publicFiles: false,
          uniform: false,
          basePath: '',
      },
  },
}
