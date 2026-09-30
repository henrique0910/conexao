import {conexao} from '../conexao.js'


async function buscarPacientes(){
  console.log('DAO de PACIENTE')
    const sql = `SELECT * FROM tbl_paciente;`
    
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

async function buscarPaciente(codigo){
    const sql = `SELECT * FROM tbl_paciente WHERE codigo = ?`
    
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

export {buscarPacientes, buscarPaciente}
