import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());

app.get('/matricula', async (req, resp) => {
    try {
        let matricula = await db.tb_matricula.findAll();
        resp.send(matricula);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!' })
    }
})

app.post('/matricula', async (req, resp) => {
    try {
        let matri = req.body;

        let r = await db.tb_matricula.create({
            nm_aluno: matri.nome,
            nr_chamada: matri.numero,
            nm_curso: matri.curso,
            nm_turma: matri.turma
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!' })
    }
})


app.put('/matricula/:id', async (req, resp) => {

    try {
        let id = req.params.id;
        let matricula = req.body;

        let r = await db.tb_matricula.update(
            
            { nm_aluno : matricula.nome, 
              nr_chamada: matricula.numero,
              nm_curso: matricula.curso,
              nm_turma: matricula.turma
            },
            {
                where: { id_matricula: id }
            });

        resp.sendStatus(200);


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