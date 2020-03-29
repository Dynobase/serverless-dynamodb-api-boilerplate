const { fileLoader, mergeTypes } = require('merge-graphql-schemas');
const { writeFileSync } = require('fs');

const typeDefs = mergeTypes(fileLoader(`${__dirname}/../../graphql/entities/**/*.graphql`), {
  all: true
});

writeFileSync('schema.graphql', typeDefs);
