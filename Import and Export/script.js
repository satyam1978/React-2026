//here we see how to perform import from another file.
import a from './app.js'; //importing default export
console.log(a);

//note: we can use any variable, name while importing default export.(like here we use go, b, d,etc instead of a).

//importing named export
import {name} from './app.js';//in named export we must have to use exact name while importing.
console.log(name);