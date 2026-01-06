//inmutability (Deep copy) but with desadventages.
//example.
//but this method is not perfect because: loses methods, loses dates, doesnt copy Map/Set, doesnt copy undefined.
const user = {
    name: "Walter",
    settings: {
      theme: "dark"
    }
  };

const deepcopy = JSON.parse(JSON.stringify(user));
deepcopy.settings.theme = 'light';

console.log(user.settings.theme); //dark , because we created a copy of the object.


//Structured clone (modern and recommended).
//advantages: copies dates, copies Map/ Sets, copies nested arrays, keeps types, doesnt lose undefined.
const deep = structuredClone(user);

console.log(deep); //{ name: 'Walter', settings: { theme: 'dark' } }