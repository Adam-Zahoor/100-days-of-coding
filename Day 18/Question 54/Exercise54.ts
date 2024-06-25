//writing a function in which a user can enter details he want to see 
function objectKeyValue(key: string, value: string) {
   let myObject: {[key: string] : string}= {};
   myObject[key] = value;
   return myObject;
};

//logging some values after calling the function
console.log(objectKeyValue("myName", "adam"));
console.log(objectKeyValue("myAge", "21"));
console.log(objectKeyValue("myNumber", "xyz"));







