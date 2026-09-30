import {conexao} from '../conexao.js'


async function buscarConsultas(){
  console.log('DAO de CONSULTA')
    const sql = `SELECT * FROM tbl_consulta;`
    
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

async function buscarConsulta(codigo){
    const sql = `SELECT * FROM tbl_consulta WHERE codigo = ?`
    
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

export {buscarConsultas, buscarConsulta}
