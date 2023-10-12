
 function makeObservable(target) {
  const handlers = Symbol('handlers');

  target[handlers] = [];


  target.observe = function(handler) {
    this[handlers].push(handler);
  };

  return new Proxy(target, {
    set(target, property, value) {
      let success = Reflect.set(...arguments); 
      if (success) { 
        target[handlers].forEach(handler => handler(property, value));
      }
      return success;

      // if(!(property in target)) return false;
      // target[property] = value;
      // target[handlers].forEach(handler => handler(property, value));
      // return true;
    }
  });
}

export const globalState = makeObservable({
  category: 'all', 
  page: 1,
})

