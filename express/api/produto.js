module.exports = (app, texto) => {
    function salvar(res,res) {
        res.send('Produto > salvar > ' + texto)
    }

    function obter(res,res) {
        res.send('Produto > obter > ' + texto)
    }

    app.post('/produto', salvar)
    app.get('/produto', obter)

    return {salvar, obter}
}