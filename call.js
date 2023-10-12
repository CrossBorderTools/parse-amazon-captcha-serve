const exec = require('child_process').exec;


function recognition(pic) {
    return new Promise((resolve, reject) => {
        exec(`python index.py -P ${pic}`, function (error, stdout, stderr) {
            if (error) {
                reject(stderr)
            }
            resolve(stdout.trim())
        })
    })
}

module.exports = {
    recognition
}