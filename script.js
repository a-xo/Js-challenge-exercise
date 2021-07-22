/**
 * Write a function to remove the hyphens '-' from all the properties (even nested) of the object
 */

const removeHyphens = (obj) => {
    const newObj = {};
    const recurse = (obj) => {
        for (const key in obj) {
            let value = obj[key];
            if(value != undefined) {
                if (value && typeof value === 'object') {
                    recurse(value, key);
                } else {
                    let newValue = value.replace(/-/g, "");
                    newObj[key] = newValue;
                }
            }
        }
    }
    recurse(obj);
    return newObj;
}

// This object is just an example. The function should accept any kind of input.
const obj = {
    orderData: {
      name: "the-id",
      items: [{ address: "primrose-street-london" }],
    },
    additional: "additional-prop",
  };

console.log(JSON.stringify(removeHyphens(obj), null, 2));
