const express = require('express')
const app = express()
const bodyParse = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app, 'com params')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParse.text())
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended: true}))

app.use(saudacao('Guilherme'))

app.use('/opa', (req,res, cadeia) => {
    console.log('Antes')
    cadeia()
})

app.get('/cliente/relatorio', (req, res) => {
    res.send(`Cliente relatorio: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req,res) => {
    // let corpo = '';
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function(){
    //     res.send(corpo)
    // })
    res.send(req.body)
})

app.get('/cliente/:id', (req,res) => {
    res.send(`Client ${req.params.id} selecionado`)
})

app.get('/opa', (req,res, next) => {
    console.log('Durante')
    res.json({
        data: [
            {id: 7, name: 'Ana', position: 1},
            {id: 32, name: 'Bia', position: 2},
            {id: 73, name: 'Carlos', position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()
    
    // res.json({
    //     name: 'iPad',
    //     preco: '$49,99'
    // })

    // res.send('Estou bem')
})

app.use('/opa', (req,res, cadeia) => {
    console.log('Depois')
})

app.listen(8080, () => {
    console.log('Backend executando')
})