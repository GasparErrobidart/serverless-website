const exec        = require('child_process').exec;
const join        = require('path').join;
let completed   = 0;
const buildLib    = [
  "json-ld",
  "ng-universal"
];

function build(opts){

  buildLib.forEach(libName=>{
    process.chdir(`${join(__dirname , "lib", libName)}`);
    console.log("Building:",`${join(__dirname , "lib", libName)}`);
    exec("npm i && npm run build",
    (error, stdout, stderr) => {

        if (error !== null) {
          console.error(stderr);
          process.exit(1);
        }

        completed++;

        // ON FINISH
        if(completed == buildLib.length){
          process.exit(0);
        }

    })  // <---- Exec end)
  })


} // <---- build() end

build();
