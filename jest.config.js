module.exports = {
  globalSetup: require.resolve('./test/global-setup'),
  transformIgnorePatterns: ['/node_modules/', 'global-setup\\.js$'],
  transform: {
    '^.+\\.+js$': require.resolve('./test/custom-transform'),
  },
}
