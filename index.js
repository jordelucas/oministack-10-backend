const express = require('express')

const app = express()

app.use(express.json())

/* Métodos HTTP */

// get - buscar
// post - criar
// put - atualizar/editar
// delete - deletar

// Tipos:

// Query Params - request.query -> Filtros, ordenacao, paginacao 
// Route Params - request.params -> Identificar um recurso na alteracao ou remocao
// Body - request.body -> Dados para criacao ou alteracao de um registro


app.post('/users/:id', (request, response) => {
    console.log(request.body)
    return response.json({ message: 'Hello Omnistack' })
})

app.listen(3333)