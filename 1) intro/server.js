// How NodeJS differs from Vanilla JS
// 1) Node runs on a server - not in a browser (backend not frontend)
// 2) The console is the terminal window
// 3) global object instead of window object
// 4) has common core modules
// 5) CommonJS modules instead of ES6 modules
// 6) Missing some JS APIs like fetch

// console.log(global)

const os = require("os");
const path = require("path");
const math = require("./math");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));

console.log(math.add(3, 4));
console.log(math.sub(3, 4));
console.log(math.mul(3, 4));
console.log(math.div(3, 4));
