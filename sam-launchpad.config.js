const join = require('path').join;
const exec = require('child_process').exec;

module.exports = {
  "project_name" : "serverless-website-sam-launchpad",
  "projects" : join( __dirname , "./serverless" ),
  "commands" : {
    "build" : `npm i && npm run build`,
    "test" : `npm test`
  },
  "hooks": {
    "after-validation" : [
      (opts)=>{
        return new Promise((resolve,reject)=>{
          exec(`aws s3 mb s3://${opts.config.project_name}`,(error,stdout,stderr)=>{
            if(error){
              reject(stderr);
            }else{
              resolve();
            }
          });
        })
      }
    ]
  }
}
