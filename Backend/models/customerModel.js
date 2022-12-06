const schema = ["prénom", "nom", "e-mail", "password", "birthday", "address"];

let validator = (obj) => {
  if (Object.entries(obj).length === schema.length) {
    for (const [key, value] of Object.entries(obj)) {
      if (schema.indexOf(key.toLowerCase()) === -1) {
        console.log(key);
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

module.exports = validator;
