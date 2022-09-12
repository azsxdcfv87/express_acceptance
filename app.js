const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main', extname: '.handlebars' }))
app.set('view engine', 'handlebars')

// routes setting
app.get('/', (req, res) => {
  const page = '首頁'
  res.render('index', { indexPage: page })
})

app.get('/:page', (req, res) => {
  // 動態抓取網址
  const page = req.params.page
  res.render('index', { indexPage: page })
})

app.listen(port, () => {
  console.log(`App is running http://localhost:${port}`)
})