module.exports = {
  globalSetup: require.resolve('./test/global-setup'),
  transform: {
    '^.+\\.+js$': require.resolve('./test/custom-transform'),
  },
}
