
const fs = require('fs');
const path = require('path');
const { addId } = require('./add-id');
const { addLinks } = require('./add-links');
const { addExamples } = require('./add-examples');

const TYPES_DIR = path.resolve('./types');
fs.readdirSync(TYPES_DIR)
  .filter(_ => _.includes('.schema.json'))
  .sort()
  .forEach((filename) => {
    console.log(filename);
    const fullFilename = path.resolve(TYPES_DIR, filename);
    const schema = require(fullFilename);
    // console.log({filename, schema});

    try {
      // const obj = addId(schema, title)
      const obj = addExamples(schema, fullFilename);
      if (!obj) return console.log(filename, 'EMPTY!!');

      fs.writeFileSync(fullFilename, JSON.stringify(obj, null, 2));
    } catch(e) {
      console.error(filename, e.message);
      return;
    }
  });