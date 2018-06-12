const express = require('express');
const hbs = require('hbs');
let app = express();
const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
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
app.get('/projects',(req,res)=>{
  res.render('projects.hbs',{
    pageTitle:'Project Page'
  })
});
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


app.listen(port,()=>{
  console.log(`Server is running on ${port}`);
});
