export const makeDOM = (domtype,property) => {
    const dom = document.createElement(domtype);
    Object.keys(property).map((key)=> {
        dom[key] = property[key];
    })
    return dom;
};

export const appendChildrenList = (target, childrenList) => {
    if (!Array.isArray(childrenList)) return;
  
    childrenList.forEach((children) => {
      target.appendChild(children);
    })
  };
  
