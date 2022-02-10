const Express = require('express');
const App = Express();

// CONFIG
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