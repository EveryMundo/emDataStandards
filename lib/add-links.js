const addLinks = (input) => {
  if (input.links) return;

  const obj = { ...input, links: undefined};

  const {title, description, id} = input;

  obj.links = [{
    title,
    description,
    rel: 'self',
    href: id,
    method: 'GET',
    targetSchema: { rel: 'self' }
  }];

  return obj;
};

module.exports = { addLinks };
