const Express = require('express');
const App = Express();

// CONFIG
// Router
const PORT = 3000; 
App.listen(PORT, () => {
  console.log(`Express Server Running ${PORT}`);
});