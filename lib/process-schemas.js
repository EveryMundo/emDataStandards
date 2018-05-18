
const fs = require('fs');
const path = require('path');
const { addId } = require('./add-id');
const { addLinks } = require('./add-links');

const TYPES_DIR = path.resolve('./types');
fs.readdirSync(TYPES_DIR)
  .filter(_ => _.includes('.schema.json'))
  .sort()
  .forEach((filename) => {
    const fullFilename = path.resolve(TYPES_DIR, filename);
    const schema = require(fullFilename);
    // console.log({filename, schema});

    try {
      const title = filename.replace('.schema.json', '');
      // const obj = addId(schema, title)
      const obj = addLinks(schema, title);
      if (!obj) return;

      fs.writeFileSync(fullFilename, JSON.stringify(obj, null, 2));
    } catch(e) {
      console.error(filename, e.message);
      return;
    }
  });