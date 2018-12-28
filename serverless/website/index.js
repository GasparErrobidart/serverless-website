const express = require('express');
const app = express();
const path = require('path');
const mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/templates');
app.use(express.static(path.join(__dirname, './public')));


module.exports.render = (event,context,callback)=>{
  let template = "home";
  let templateParameters = event;
  console.log("\n\nPath:",event.path);
  switch(event.path){
    case '/about':
      template = "about"
      break;
  }
  app.render(template, templateParameters, function(err, html){
    let response = {
        "headers": {
          // "Access-Control-Allow-Origin": "*",
          "Content-Type" : "text/html"
        },
        'statusCode': 200,
        'body': html
    };
    callback(null,response);
  });

}
