const fs = require('fs')
const exec = require('child_process')



fs.readdir('bin', (err) => {
    if (err) {
       exec.exec('mkdir bin', (f) => {
        if(f ) console.log(f)
    })  
    }
})