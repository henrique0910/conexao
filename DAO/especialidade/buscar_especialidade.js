import {conexao} from '../conexao.js'


async function buscarEspecialidades(){
  console.log('DAO de ESPECIALIDADE')
    const sql = `SELECT * FROM tbl_especialidade;`
    
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

async function buscarEspecialidade(codigo){
    const sql = `SELECT * FROM tbl_especialidade WHERE codigo = ?`
    
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

export {buscarEspecialidades, buscarEspecialidade}
