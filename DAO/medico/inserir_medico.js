import {conexao} from '../conexao.js'

async function incluirMedico(infos){
    const data = [infos]
    const sql = `INSERT INTO tbl_medico (crm, nome, endereco, telefone, numeroRegistro ) VALUES ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[data]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

export {incluirMedico}
