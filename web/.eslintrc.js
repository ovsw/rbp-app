module.exports = {
  "plugins": [
    "jsx-a11y"
  ],
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:jsx-a11y/recommended'],
  rules: {
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'never']
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    }
  }
}
