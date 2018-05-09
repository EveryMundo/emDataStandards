const typefy = (o) => {
  if (o == null) return null;

  // if (typeof o === 'object') {
  //   Object.keys(o).forEach(k => {
  //     if (k.startsWith('@')) return o[k];
  //     o[k] = typefy(o[k]);
  //   });

  //   return o;
  // }

  return o.constructor.name.toLowerCase();
}

const toSchemaProperties = (input) => {
  if (Array.isArray(input)) return input.map(toSchemaProperties);
  
  const properties = {};

  if (typeof input === 'object') {
    Object.keys(input).forEach((key) => {
      if (key.startsWith('@')) return;

      properties[key] = {
        description: key,
        type: typefy(input[key]),
      };

      if (Array.isArray(input[key])) {
        properties[key].type = "array";
        properties[key].items = { type: typefy(input[key][0]) };
      }

      if (properties[key].type === 'object') {
        properties[key].properties = toSchemaProperties(input[key]);
      }
    });
  }

  return properties;
}

const toSchema = (input) => {
  const schema = {
    "$schema": "http://json-schema.org/draft-06/schema#",
    "title": input['@type'],
    "description": input['@type'],
    "type": "object",
    "properties": toSchemaProperties(input),
    "required": []
  };

  if (Array.isArray(input)) schema.type = "array";

  return schema;
};

// Object.keys(o).forEach(() => { o[ok] = })
/*
{
    "$schema": "http://json-schema.org/draft-06/schema#",
    "title": "Product",
    "description": "A product from Acme's catalog",
    "type": "object",
    "properties": {
        "id": {
            "description": "The unique identifier for a product",
            "type": "integer"
        },
        "name": {
            "description": "Name of the product",
            "type": "string"
        },
        "price": {
            "type": "number",
            "exclusiveMinimum": 0
        },
        "tags": {
            "type": "array",
            "items": {
                "type": "string"
            },
            "minItems": 1,
            "uniqueItems": true
        }
    },
    "required": ["id", "name", "price"]
}
*/
module.exports = { typefy, toSchema };