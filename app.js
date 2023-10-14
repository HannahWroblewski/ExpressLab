const express = require('express');
const app = express();

const PORT = 1337
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

// Respond with an HTML page on the root path:
app.get('/puppies', (req, res) => {
    res.send(`
      <html>
       <head>
         <title>Puppies</title>
       </head>
       <body>
         <h1>dogs</h1>
       </body>
      </html>
    `)
  })

  app.get('/kittens', (req, res) => {
    res.send(`
      <html>
       <head>
         <title>Kittens</title>
       </head>
       <body>
         <h1>cats</h1>
       </body>
      </html>
    `)
  })


app.get('/', (req, res) => {
    res.send(`
      <html>
       <head>
         <title>My site</title>
       </head>
       <body>
         <h1>Hello World</h1>
       </body>
      </html>
    `)
  })