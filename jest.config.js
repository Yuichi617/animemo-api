module.exports = {
    moduleFileExtensions: ['js', 'ts'], // テスト対象の拡張子を列挙する
    preset: 'ts-jest', // A preset that is used as a base for Jest's configuration
    testEnvironment: 'node',  // The test environment that will be used for testing
    testMatch: [ // The glob patterns Jest uses to detect test files
        '**/?(*.)+(spec|test).ts?(x)',
      ],
    transform: { // A map from regular expressions to paths to transformers
      '^.+\\.ts?$': 'ts-jest',
    },
};