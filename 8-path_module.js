const os = require('os');
const { compileFunction } = require('vm');

// info abt current user
const user = os.userInfo()
console.log(user);

// method that returns system uptime
console.log(`Uptime is ${os.uptime()} seconds`)

// more methods
const currOs = {
    name:os.type(),
    release:os.release(),
    total:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currOs)


const path =require('path')
const filepath = path.join('/content/','subfolder','text.txt')
console.log(filepath);

const base = path.basename(filepath)
console.log(base)