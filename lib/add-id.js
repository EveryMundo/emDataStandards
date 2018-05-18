const addId = (input, title) => {
  if (input.id) return;

  const obj = { id: undefined, $schema: input.$schema, title: input.title, ...input};

  if (!obj.title) {
    obj.title = title.replace(/^(\w)/, (fullMatch, firstLetter) => firstLetter.toUpperCase());
  }

  obj.id = obj.title.replace(/^(\w)/, (fullMatch, firstLetter) => `/${firstLetter.toLowerCase()}`);

  return obj;
};

module.exports = { addId };
