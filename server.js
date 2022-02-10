const Express = require('express');
const App = Express();

// CONFIG
// Static File
App.use(Express.static("public"));
// Template Engine
App.set("view engine", "ejs");
// Router
const PORT = 3000; 
App.listen(PORT, () => {
  console.log(`Express Server Running ${PORT}`);
});

App.get('/', (req, res)=> {
    res.render('test')
})