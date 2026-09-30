import express from 'express'

import { buscarPacientes } from './DAO/paciente/buscar_paciente.js'
import { buscarEspecialidades } from './DAO/especialidade/buscar_especialidade.js'
import { buscarAgendamentos } from './DAO/agendamentos/buscar.agendamento.js'
import { buscarMedicos } from './DAO/medico/buscar_medico.js'
import { buscarConsultas } from './DAO/consultas/buscar.consultas.js'

import { incluirPaciente } from './DAO/paciente/inserir_paciente.js'
import { incluirEspecialidade } from './DAO/especialidade/inserir_especialidade.js'
import { incluirMedico } from './DAO/medico/inserir_medico.js'
import { incluirConsulta } from './DAO/consultas/inserir_consulta.js'



const app = express()


app.use(express.json())


app.get('/', (req, res) => {
    res.json({ mensagem: 'API de Clinica Rodando perfeitamente!' })
})


app.get('/paciente', async (req, res) => {
    try {
        const pacientes = await buscarPacientes()
        res.json(pacientes)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: erro.message })
    }
})

app.get('/especialidades', async (req, res) => {
    try {
        const especialidades = await buscarEspecialidades()
        res.json(especialidades)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: erro.message })
    }
})

app.get('/agendamento', async (req, res) => {
    try {
        const agendamento = await buscarAgendamentos()
        res.json(agendamento)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: erro.message })
    }
})

app.get('/medico', async (req, res) => {
    try {
        const medicos = await buscarMedicos()
        res.json(medicos)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: erro.message })
    }
})

app.get('/consulta', async (req, res) => {
    try {
        const consultas = await buscarConsultas()
        res.json(consultas)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: erro.message })
    }
})






// POST 
app.post('/inserirPaciente', async (req, res) => {
    let {nome, endereco, telefone, doencasPrevias, remediosDeUsoContinuo} = req.body

    let infos = [nome, endereco, telefone, doencasPrevias, remediosDeUsoContinuo]
    let resp = await incluirPaciente(infos)

    
    res.send(resp)
})


app.post('/inserirEspecialidade', async (req, res) => {
    let {nome, publicoAlvo} = req.body

    let infos = [nome, publicoAlvo]
    let resp = await incluirEspecialidade(infos)

    
    res.send(resp)
})

app.post('/inserirMedico', async (req, res) => {
    let { nome, endereco, telefone, crm,  numeroRegistro} = req.body

    let infos = [ nome, endereco, telefone, crm, numeroRegistro]
    let resp = await incluirMedico(infos)

    
    res.send(resp)
})

app.post('/inserirConsulta', async (req, res) => {
    let {data, hora, crm, numeroAgendamento} = req.body

    let infos = [ data, hora, crm, numeroAgendamento]
    let resp = await incluirConsulta(infos)

    
    res.send(resp)
})



// Inicialização do Servidor
app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000')
})
