const fs = require("fs");
const { compile, compileFromFile } = require("json-schema-to-typescript");
const glob = require("glob");

glob("./functions/api/rest/**/*.json", null, function(er, files) {
  return Promise.all(
    files.map(file => {
      return compileFromFile(file).then(ts =>
        fs.writeFileSync(`${file.replace(".json", '')}.d.ts`, ts)
      );
    })
  );
});

