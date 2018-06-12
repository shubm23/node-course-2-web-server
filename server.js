const express = require('express');
const hbs = require('hbs');
let app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
  // res.send({
  //   name:'shubham',
  //   likes:[
  //     'biking',
  //     'handling',
  //     'studying'
  //   ]
  //
  // });
  res.render('root.hbs',{
    pageTitle:'Home Page'
  });
})

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'About Page'
  });
});

//Error Page
app.get('/bad',(req,res)=>{
  res.send({
    error:'Unable to handle user request'
  });
})


app.listen(8000,()=>{
  console.log('Server is running on port 8000');
});
