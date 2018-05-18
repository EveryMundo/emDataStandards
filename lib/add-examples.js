const fs = require('fs');

const addExamples = (input, fullFilename) => {
  const examplesDoc = require(fullFilename.replace('.schema.', '.example.'));

  let changed = false;
  Object.keys(input.properties).forEach((property) => {
    if (input.properties[property].example) return;

    changed = true;
    input.properties[property].example = examplesDoc[property];
  });

  if (changed) return input;
};

module.exports = { addExamples };
