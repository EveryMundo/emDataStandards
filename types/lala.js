function typefy(o) => {
  if (typeof o === 'object') {
    Object.keys(o).forEach(k => {
      o[k] = typefy(o[k]);
    });

    return o;
  }

  
}
Object.keys(o).forEach(() => { o[ok] = })