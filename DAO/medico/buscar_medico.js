import {conexao} from '../conexao.js'


async function buscarMedicos(){
  console.log('DAO de MEDICOS')
    const sql = `SELECT * FROM tbl_medico;`
    
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

async function buscarMedico(codigo){
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

export {buscarMedicos, buscarMedico}
