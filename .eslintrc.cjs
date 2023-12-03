module.exports = {
  env: {
    "jest/globals": true
 },
  extends: '@it-incubator/eslint-config',
  rules: { 'no-console': ['warn', { allow: ['warn', 'error'] }] }
}
