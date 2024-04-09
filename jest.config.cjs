module.exports = {
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'jsx'],
    testPathIgnorePatterns: ['/node_modules/'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
};
