import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());

app.get('/matricula', async (req, resp) => {
    try {
        let matricula = await db.tb_matricula.findAll({order: [["id_matricula","desc"]]});
        resp.send(matricula);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!' })
    }
})

app.post('/matricula', async (req, resp) => {
    try {
        let matri = req.body;
        let r =await db.tb_matricula.findOne({where:{nr_chamada:matri.chamada,nm_turma:matri.turma}});
        if(r!= null){
        return resp.send({erro:' O número de chamada ja está sendo utilizado nessa turma'})
        }
        if( matri.nome == "") {
            return resp.send({erro: 'O campo nome é obrigatório'})
        }
        if(matri.nome.length<3) {
            return resp.send({erro: 'O campo nome precisa de no minímo 3 caracteres'})
        }
        if(matri.chamada == "") {
            return resp.send({erro: 'O campo chamada é obrigatório'})
        }
        if(matri.chamada <=0) {
            return resp.send({erro: 'O campo chamada não pode ter números negativos'})
        }
        if( isNaN(matri.chamada)) {
            return resp.send({erro: 'O campo chamada não pode ter letras como valor'})
        }

        if( matri.curso == "") {
            return resp.send({erro: 'O campo curso é obrigatório'})
        }
        if(matri.curso.length<3) {
            return resp.send({erro: 'O campo curso precisa de no minímo 3 caracteres'})
        }
        if(matri.turma == "") {
            return resp.send({erro: 'O campo turma é obrigatório'})
        }
        if(matri.turma.length<3) {
            return resp.send({erro: 'O campo turma precisa de no minímo 3 caracteres'})
        }

        let a = await db.tb_matricula.create({
            nm_aluno: matri.nome,
            nr_chamada: matri.chamada,
            nm_curso: matri.curso,
            nm_turma: matri.turma
        
        })
        resp.send(a);
    
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!' })
    }
})


app.put('/matricula/:id', async (req, resp) => {

    try {
        let id = req.params.id;
        let matricula = req.body;
        let a =await db.tb_matricula.findOne({where:{nr_chamada:matricula.chamada,nm_turma:matricula.turma}});
        if(a!= null){
        return resp.send({erro:'O número de chamada ja está sendo utilizado nessa turma'})
    }
    
        let r = await db.tb_matricula.update(
            
            { nm_aluno : matricula.nome, 
              nr_chamada: matricula.chamada,
              nm_curso: matricula.curso,
              nm_turma: matricula.turma
            },
            {
                where: { id_matricula: id }
            });

        resp.send(r);


    } catch (e) {
        resp.send({ erro: e.toString() });
    }


})

app.delete('/matricula/:id', async (req, resp) => {
    try {
        let r = await db.tb_matricula.destroy({ where: { id_matricula: req.params.id } });
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
})


app.listen(process.env.PORT,
x => console.log(`Server up at port ${process.env.PORT}`))