export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.e2e-spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageForm: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnviroment: 'node',
}