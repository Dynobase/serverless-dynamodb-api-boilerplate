const dotenv = require('dotenv');
dotenv.config({ path: './.env.test' });

module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['<rootDir>/**/*.test.ts']
}
