import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    async listarAluno() {
        let r = await api.get(`/matricula/`);
        return r.data;
    }


    async inserirAluno(nomeAluno, chamada, curso,turma) {
       let inserir={
           nome: nomeAluno,
           numero: chamada,
           curso: curso,
           turma: turma

       }
        let r = await api.post(`/matricula`, inserir);
        return r.data;
    }

    async removerAluno(id) {
        let r = await api.delete(`/matricula/` + id);
        return r.data;
    }

    async alteraraluno(id, nome,chamada,curso,turma ) {
        let r = await api.put(`/matricula/` + id, {nome,chamada,curso,turma});
        return r.data;
    }

}