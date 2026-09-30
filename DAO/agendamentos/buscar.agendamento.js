import {conexao} from '../conexao.js'


async function buscarAgendamentos(){
  console.log('DAO de AGENDAMENTO')
    const sql = `SELECT * FROM tbl_agendamento;`
    
    const conn = await conexao()
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

async function buscarAgendamento(codigo){
    const sql = `SELECT * FROM tbl_agendamento WHERE codigo = ?`
    
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql, [codigo]);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

export {buscarAgendamentos, buscarAgendamento}
