// Take in an object and recursively change every key name to snake case
// If normal key-value pair, return value with new snakified key name
// If value === object, call snakifyObject with value
// const object2 = { user: { emailAddress: { test: "test"}, password: "password", displayName: { firstName: "Daniel", lastName: "Cho"} }, sessionKey: { test: "test"}}
//const object1 = { user:{ email: "test", password: "password", displayName: "test" }}
// test

const snakifyObject = (oldObject) => {
  const newObject = {}
  for (let [key, value] of Object.entries(oldObject)) {
    if(typeof value === "object"){
      value = snakifyObject(value)
    }
    newObject[snakifyWord(key)] = value;
  }
  return newObject;
}

const snakifyWord = (word) => {
  return word.split('').map((letter) => {
    if(letter === letter .toUpperCase()){
      return '_' + letter.toLowerCase();
    }else{
      return letter;
    }
  }).join('');
}

export default snakifyObject;